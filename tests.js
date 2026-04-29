/**
 * tests.js — Comprehensive Unit Tests for Election Process Education
 *
 * Scope: Validators, calculateScore, findConstituency, formatDate,
 *        escapeHTML, sanitizeText, debounce, logEvent, showToast,
 *        findFAQAnswer, saveUserData, askGemini, storage helpers.
 *
 * Execution: Tests run automatically when the page loads.
 * Results are visible in the browser console (F12 → Console tab).
 * window.__testResults exposes { passed, failed, total } for automation / CI.
 */

(async function runTests() {
    'use strict';

    // ─── Mini Test Framework ──────────────────────────────────────────────────
    let passed = 0;
    let failed = 0;

    /**
     * Assert a condition and log the result.
     * @param {boolean} condition - The assertion to evaluate
     * @param {string}  label     - Human-readable description
     */
    function assert(condition, label) {
        if (condition) {
            console.log(`  \u2705 PASS: ${label}`);
            passed++;
        } else {
            console.error(`  \u274c FAIL: ${label}`);
            failed++;
        }
    }

    /**
     * Assert that two values are strictly equal.
     * @param {*}      actual
     * @param {*}      expected
     * @param {string} label
     */
    function assertEqual(actual, expected, label) {
        assert(actual === expected, `${label} (expected: ${JSON.stringify(expected)}, got: ${JSON.stringify(actual)})`);
    }

    /**
     * Assert that a function throws when called.
     * Supports both sync and async functions.
     * @param {Function} fn    - Function to call
     * @param {string}   label
     */
    async function assertThrows(fn, label) {
        try {
            await fn();
            console.error(`  \u274c FAIL: ${label} (expected throw, but did not throw)`);
            failed++;
        } catch (_) {
            console.log(`  \u2705 PASS: ${label}`);
            passed++;
        }
    }

    console.group('\uD83D\uDDF3\uFE0F Election App \u2014 Unit Tests');

    // =========================================================================
    // 1. validateName
    // =========================================================================
    console.group('1. Validators.validateName()');
    assert(window.Validators !== undefined, 'Validators module is exposed on window');

    if (window.Validators) {
        // Happy path
        assert(Validators.validateName('Ramesh').valid === true,          'valid single-word name');
        assert(Validators.validateName('Ravi Kumar').valid === true,       'valid name with space');
        assert(Validators.validateName("O'Brien").valid === true,          "valid name with apostrophe");
        assert(Validators.validateName('Al').valid === true,               'minimum 2-char name passes');
        assert(Validators.validateName('Priya-Sharma').valid === true,     'hyphenated name passes');

        // Edge cases
        assert(Validators.validateName('A').valid === false,               'single-char name fails');
        assert(Validators.validateName('').valid === false,                'empty string fails');
        assert(Validators.validateName('   ').valid === false,             'whitespace-only fails');
        assert(Validators.validateName('123').valid === false,             'numeric-only name fails');
        assert(Validators.validateName('Raj@#').valid === false,           'special-char name fails');
        assert(Validators.validateName('R2D2').valid === false,            'alphanumeric name fails');

        // Type safety
        assert(Validators.validateName(null).valid === false,              'null input fails gracefully');
        assert(Validators.validateName(undefined).valid === false,         'undefined input fails gracefully');
        assert(Validators.validateName(42).valid === false,                'numeric type fails gracefully');

        // Return shape
        const r = Validators.validateName('');
        assert(typeof r.message === 'string' && r.message.length > 0,     'invalid result has non-empty message');
        const rOk = Validators.validateName('Test');
        assert(rOk.message === '',                                          'valid result has empty message');
    }
    console.groupEnd();

    // =========================================================================
    // 2. validateAge
    // =========================================================================
    console.group('2. Validators.validateAge()');
    if (window.Validators) {
        // Happy path
        assert(Validators.validateAge(25).valid === true,                  'age 25 valid');
        assert(Validators.validateAge(18).valid === true,                  'age 18 (boundary) valid');
        assert(Validators.validateAge(17).valid === true,                  'age 17 valid input (underage handled in UI)');
        assert(Validators.validateAge(1).valid === true,                   'age 1 (min positive) valid input');
        assert(Validators.validateAge(100).valid === true,                 'age 100 (boundary) valid');

        // Failures
        assert(Validators.validateAge(0).valid === false,                  'age 0 invalid');
        assert(Validators.validateAge(-1).valid === false,                 'negative age invalid');
        assert(Validators.validateAge(101).valid === false,                'age > 100 invalid');
        assert(Validators.validateAge(NaN).valid === false,                'NaN age invalid');
        assert(Validators.validateAge('abc').valid === false,              'non-numeric string invalid');
        assert(Validators.validateAge('').valid === false,                 'empty string invalid');
        assert(Validators.validateAge(null).valid === false,               'null age invalid');
        assert(Validators.validateAge(undefined).valid === false,          'undefined age invalid');
        assert(Validators.validateAge(18.5).valid === false,               'float age invalid');

        // Message quality
        const neg = Validators.validateAge(-5);
        assert(typeof neg.message === 'string' && neg.message.length > 0, 'invalid age has a message');
    }
    console.groupEnd();

    // =========================================================================
    // 3. validateConstituencyInput
    // =========================================================================
    console.group('3. Validators.validateConstituencyInput()');
    if (window.Validators) {
        assert(Validators.validateConstituencyInput('Mysuru').valid === true,    'valid constituency input');
        assert(Validators.validateConstituencyInput('bangalore').valid === true, 'alias input valid');
        assert(Validators.validateConstituencyInput('').valid === false,         'empty string fails');
        assert(Validators.validateConstituencyInput('   ').valid === false,      'whitespace-only fails');
        assert(Validators.validateConstituencyInput(null).valid === false,       'null fails gracefully');
        assert(Validators.validateConstituencyInput(undefined).valid === false,  'undefined fails gracefully');
    }
    console.groupEnd();

    // =========================================================================
    // 4. calculateScore
    // =========================================================================
    console.group('4. calculateScore()');
    if (window.calculateScore) {
        // Baseline
        assertEqual(calculateScore({ name: '', age: null, registered: null, votingMethod: null, constituency: null }), 0,
            'empty state = 0');

        // Incremental
        assertEqual(calculateScore({ name: 'A', age: 25, registered: null, votingMethod: null, constituency: null }), 20,
            'name + adult age = 20');
        assertEqual(calculateScore({ name: 'A', age: 25, registered: 'yes', votingMethod: null, constituency: null }), 50,
            'name + age + registered yes = 50');
        assertEqual(calculateScore({ name: 'A', age: 25, registered: 'no', votingMethod: null, constituency: null }), 30,
            'name + age + registered no = 30 (partial)');
        assertEqual(calculateScore({ name: 'A', age: 25, registered: 'notsure', votingMethod: null, constituency: null }), 30,
            'name + age + notsure = 30 (partial)');
        assertEqual(calculateScore({ name: 'A', age: 25, registered: 'yes', votingMethod: 'in-person', constituency: 'mysuru' }), 100,
            'all fields complete = 100');

        // Caps
        assert(calculateScore({ name: 'A', age: 25, registered: 'yes', votingMethod: 'in-person', constituency: 'mysuru' }) <= 100,
            'score never exceeds 100');

        // Null safety
        assert(calculateScore(null) === 0, 'null state = 0 (no crash)');
        assert(calculateScore(undefined) === 0, 'undefined state = 0 (no crash)');

        // Minor age: should not grant age score
        const minorScore = calculateScore({ name: 'A', age: 15, registered: null, votingMethod: null, constituency: null });
        assertEqual(minorScore, 10, 'minor (age <18) only gets name score, not age score');
    }
    console.groupEnd();

    // =========================================================================
    // 5. formatDate
    // =========================================================================
    console.group('5. formatDate()');
    if (window.formatDate) {
        assert(typeof formatDate('2026-05-25T00:00:00Z') === 'string',    'returns a string');
        assert(formatDate('2026-05-25T00:00:00Z').includes('2026'),       'includes year');
        assert(formatDate('2026-05-25T00:00:00Z').includes('May'),        'includes month name');
        assert(formatDate('invalid-date') === 'Invalid date',             'invalid ISO returns "Invalid date"');
        assert(formatDate(null) === 'Date not available',                 'null returns fallback');
        assert(formatDate(undefined) === 'Date not available',            'undefined returns fallback');
        assert(formatDate('').includes('Invalid'),                        'empty string returns invalid notice');
    }
    console.groupEnd();

    // =========================================================================
    // 6. escapeHTML
    // =========================================================================
    console.group('6. escapeHTML()');
    if (window.escapeHTML) {
        assertEqual(escapeHTML('<script>'),     '&lt;script&gt;',   'escapes angle brackets');
        assertEqual(escapeHTML('"hello"'),      '&quot;hello&quot;','escapes double quotes');
        assertEqual(escapeHTML("it's"),         'it&#039;s',        'escapes single quotes');
        assertEqual(escapeHTML('a & b'),        'a &amp; b',        'escapes ampersand');
        assertEqual(escapeHTML(''),             '',                 'empty string returns empty');
        assertEqual(escapeHTML(null),           '',                 'null returns empty string');
        assertEqual(escapeHTML(undefined),      '',                 'undefined returns empty string');

        // XSS vector
        const xss = escapeHTML('<img src=x onerror=alert(1)>');
        assert(!xss.includes('<img'),                               'XSS img tag neutralised');
        assert(!xss.includes('onerror'),                            'XSS onerror attribute neutralised');
    }
    console.groupEnd();

    // =========================================================================
    // 7. sanitizeText
    // =========================================================================
    console.group('7. sanitizeText()');
    if (window.sanitizeText) {
        assertEqual(sanitizeText('Hello'),          'Hello',   'clean text unchanged');
        assertEqual(sanitizeText('  Hello  '),      'Hello',   'trims whitespace');
        assertEqual(sanitizeText('<b>bold</b>'),    'bbold/b', 'strips angle brackets');
        assertEqual(sanitizeText(''),               '',        'empty string returns empty');
        assertEqual(sanitizeText(null),             '',        'null returns empty string');
        assertEqual(sanitizeText(undefined),        '',        'undefined returns empty string');
        assertEqual(sanitizeText(42),               '',        'non-string returns empty string');
    }
    console.groupEnd();

    // =========================================================================
    // 8. debounce
    // =========================================================================
    console.group('8. debounce()');
    if (window.debounce) {
        assert(typeof debounce(() => {}, 100) === 'function',     'debounce returns a function');

        // Rapid calls should not execute immediately
        let callCount = 0;
        const debouncedFn = debounce(() => callCount++, 50);
        debouncedFn();
        debouncedFn();
        debouncedFn();
        assertEqual(callCount, 0, 'debounced fn not called synchronously after rapid calls');

        // After the delay, it should have been called exactly once
        await new Promise(resolve => setTimeout(resolve, 100));
        assertEqual(callCount, 1, 'debounced fn called exactly once after delay');

        // A single call should also fire after the delay
        let single = 0;
        const once = debounce(() => single++, 30);
        once();
        await new Promise(resolve => setTimeout(resolve, 60));
        assertEqual(single, 1, 'single debounced call fires after delay');
    }
    console.groupEnd();

    // =========================================================================
    // 9. logEvent
    // =========================================================================
    console.group('9. logEvent()');
    if (window.logEvent) {
        // Clear existing test entries
        sessionStorage.removeItem('appLogs');

        logEvent('unit_test_event', { source: 'tests.js' });
        const logs = JSON.parse(sessionStorage.getItem('appLogs') || '[]');
        const entry = logs.find(e => e.event === 'unit_test_event');

        assert(entry !== undefined,                                         'logEvent stores entry in sessionStorage');
        assert(typeof entry.timestamp === 'string',                         'entry has timestamp string');
        assert(entry.source === 'tests.js',                                 'entry includes custom data');
        assert(entry.timestamp.includes('T'),                               'timestamp is ISO format');

        // Test the 50-entry cap
        for (let i = 0; i < 55; i++) logEvent('flood_event', { i });
        const logsAfter = JSON.parse(sessionStorage.getItem('appLogs') || '[]');
        assert(logsAfter.length <= 50, 'sessionStorage capped at 50 entries');
    }
    console.groupEnd();

    // =========================================================================
    // 10. findConstituency (uses electionData — wait for it if needed)
    // =========================================================================
    console.group('10. findConstituency()');
    if (window.findConstituency) {
        // Ensure electionData is available (fallback is synchronous)
        if (!window.electionData) {
            window.electionData = window.fallbackData;
        }

        const res1 = findConstituency('bangalore');
        assert(res1 !== null,                        '"bangalore" alias resolves to a constituency');
        assert(res1 && res1.name === 'Bengaluru Urban', '"bangalore" maps to Bengaluru Urban');

        const res2 = findConstituency('mysore');
        assert(res2 !== null,                        '"mysore" alias resolves');
        assert(res2 && res2.name === 'Mysuru',       '"mysore" maps to Mysuru');

        const res3 = findConstituency('zzznomatch999');
        assert(res3 === null,                        'unknown string returns null');

        const res4 = findConstituency('');
        assert(res4 === null,                        'empty string returns null');

        const res5 = findConstituency(null);
        assert(res5 === null,                        'null returns null gracefully');

        const res6 = findConstituency('Shivamogga');
        assert(res6 !== null,                        'exact name (mixed case) resolves');

        const res7 = findConstituency('hubli');
        assert(res7 !== null,                        '"hubli" alias resolves to Hubballi-Dharwad');
        assert(res7 && res7.name === 'Hubballi-Dharwad', '"hubli" maps correctly');
    }
    console.groupEnd();

    // =========================================================================
    // 11. findFAQAnswer
    // =========================================================================
    console.group('11. findFAQAnswer()');
    if (window.findFAQAnswer) {
        const r1 = findFAQAnswer('what does an mla do?');
        assert(r1 !== null,                              'MLA question matches FAQ');
        assert(r1 && typeof r1.answer === 'string',      'FAQ result has answer string');
        assert(r1 && r1.answer.length > 0,               'FAQ answer is non-empty');

        const r2 = findFAQAnswer('what is nota');
        assert(r2 !== null,                              'NOTA question matches FAQ');

        const r3 = findFAQAnswer('how to register to vote');
        assert(r3 !== null,                              'registration question matches FAQ');

        const r4 = findFAQAnswer('xyzzy-no-match-xyz');
        assert(r4 === null,                              'unrecognised question returns null');

        const r5 = findFAQAnswer('');
        assert(r5 === null,                              'empty question returns null');

        const r6 = findFAQAnswer(null);
        assert(r6 === null,                              'null question returns null gracefully');

        // Longer keyword match should win over shorter
        const r7 = findFAQAnswer('what is voter id epic card');
        assert(r7 !== null,                              'voter ID question matches FAQ');
    }
    console.groupEnd();

    // =========================================================================
    // 12. askGemini — input validation (no real API call)
    // =========================================================================
    console.group('12. askGemini() — input validation only (no live call)');
    if (window.askGemini) {
        assert(typeof askGemini === 'function',                         'askGemini is a function');
        assert(askGemini.constructor.name === 'AsyncFunction',          'askGemini is async');

        await assertThrows(() => askGemini(''),        'askGemini throws on empty string');
        await assertThrows(() => askGemini(null),      'askGemini throws on null');
        await assertThrows(() => askGemini('   '),     'askGemini throws on whitespace-only');
        await assertThrows(() => askGemini(undefined), 'askGemini throws on undefined');
    }
    console.groupEnd();

    // =========================================================================
    // 13. saveUserData — mock / simulation mode
    // =========================================================================
    console.group('13. saveUserData() — simulation mode');
    if (window.saveUserData) {
        // Valid data
        try {
            const r = await saveUserData({
                name: 'TestUser', score: 80,
                constituency: 'mysuru', votingMethod: 'in-person', registered: 'yes'
            });
            assert(r !== undefined,          'saveUserData returns a result');
            if (r && r.simulated) {
                assert(r.simulated === true, 'simulation mode flag is true');
                assert(r.payload && typeof r.payload.savedAt === 'string',
                       'simulated payload includes savedAt timestamp');
            }
        } catch (e) {
            assert(false, `saveUserData threw unexpectedly: ${e.message}`);
        }

        // Empty object — should not crash
        try {
            const r2 = await saveUserData({});
            assert(r2 !== undefined, 'saveUserData handles empty object without throwing');
        } catch (e) {
            assert(false, `saveUserData crashed on empty object: ${e.message}`);
        }

        // Missing individual fields — should not crash
        try {
            const r3 = await saveUserData({ name: 'Partial' });
            assert(r3 !== undefined, 'saveUserData handles partial object without throwing');
        } catch (e) {
            assert(false, `saveUserData crashed on partial object: ${e.message}`);
        }
    }
    console.groupEnd();

    // =========================================================================
    // 14. createSpinner
    // =========================================================================
    console.group('14. createSpinner()');
    if (window.createSpinner) {
        const html = createSpinner('Loading...');
        assert(typeof html === 'string',                  'createSpinner returns a string');
        assert(html.includes('spinner'),                  'output contains spinner class');
        assert(html.includes('Loading...'),               'output contains the label text');
        assert(html.includes('role="status"'),            'output has role="status" for a11y');

        // XSS safety of label
        const xssHtml = createSpinner('<script>alert(1)</script>');
        assert(!xssHtml.includes('<script>'),             'createSpinner escapes XSS in label');
    }
    console.groupEnd();

    // =========================================================================
    // 15. showToast — DOM smoke test
    // =========================================================================
    console.group('15. showToast() — DOM smoke test');
    if (window.showToast && typeof document !== 'undefined') {
        showToast('Test notification', 'success', 500);
        const toast = document.getElementById('toast-notification');
        assert(toast !== null,                           'showToast creates a DOM element');
        assert(toast.textContent === 'Test notification','toast has correct text');
        assert(toast.classList.contains('toast-success'),'toast has correct type class');

        // Calling again replaces the old toast (no duplicates)
        showToast('Second toast', 'info', 500);
        const toasts = document.querySelectorAll('#toast-notification');
        assert(toasts.length === 1, 'calling showToast twice does not create duplicate elements');
    }
    console.groupEnd();

    // =========================================================================
    // 16. fallbackData integrity
    // =========================================================================
    console.group('16. fallbackData structural integrity');
    if (window.fallbackData) {
        assert(typeof fallbackData.electionInfo === 'object',          'has electionInfo');
        assert(typeof fallbackData.constituencies === 'object',        'has constituencies');
        assert(typeof fallbackData.education === 'object',             'has education section');
        assert(Array.isArray(fallbackData.education.steps),            'education.steps is an array');
        assert(fallbackData.education.steps.length > 0,                'education.steps is non-empty');

        const timeline = fallbackData.electionInfo.timeline;
        assert(typeof timeline.registrationDeadline === 'string',      'registrationDeadline is a string');
        assert(typeof timeline.electionDay === 'string',               'electionDay is a string');
        assert(!isNaN(new Date(timeline.registrationDeadline).getTime()), 'registrationDeadline is a valid date');
        assert(!isNaN(new Date(timeline.electionDay).getTime()),          'electionDay is a valid date');

        const keys = Object.keys(fallbackData.constituencies);
        assert(keys.length >= 10, 'at least 10 constituencies defined');

        // Every constituency must have candidates
        keys.forEach(key => {
            const c = fallbackData.constituencies[key];
            assert(Array.isArray(c.candidates) && c.candidates.length > 0,
                `constituency "${key}" has at least one candidate`);
            assert(typeof c.pollingLocation === 'string' && c.pollingLocation.length > 0,
                `constituency "${key}" has a polling location`);
        });
    }
    console.groupEnd();

    // =========================================================================
    // Summary
    // =========================================================================
    const total = passed + failed;
    const icon = failed === 0 ? '\u2705' : '\u26a0\ufe0f';
    console.log(`\n\uD83D\uDCCA Results: ${passed}/${total} passed ${failed > 0 ? `, ${failed} FAILED` : icon}`);
    console.groupEnd();

    // Expose for automation / CI
    window.__testResults = { passed, failed, total };

    if (window.logEvent) {
        logEvent('unit_tests_complete', { passed, failed, total });
    }
})();
