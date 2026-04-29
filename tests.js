/**
 * tests.js — Comprehensive Unit Tests for Election Process Education
 *
 * Coverage: Validators, calculateScore, findConstituency, formatDate,
 *           escapeHTML, sanitizeText, debounce, logEvent, showToast,
 *           findFAQAnswer, saveUserData, askGemini, translations (t),
 *           state persistence (saveState/loadState/clearState),
 *           fallbackData integrity, createSpinner.
 *
 * Results: Open F12 → Console after page load.
 * window.__testResults exposes { passed, failed, total } for automation.
 */

(async function runTests() {
    'use strict';

    // ── Mini Test Framework ───────────────────────────────────────────────────
    let passed = 0;
    let failed = 0;

    function assert(condition, label) {
        if (condition) { console.log(`  ✅ PASS: ${label}`); passed++; }
        else           { console.error(`  ❌ FAIL: ${label}`); failed++; }
    }

    function assertEqual(actual, expected, label) {
        assert(actual === expected,
            `${label} (expected: ${JSON.stringify(expected)}, got: ${JSON.stringify(actual)})`);
    }

    async function assertThrows(fn, label) {
        try { await fn(); console.error(`  ❌ FAIL: ${label} (expected throw)`); failed++; }
        catch (_) { console.log(`  ✅ PASS: ${label}`); passed++; }
    }

    console.group('🗳️ Election App — Unit Tests');

    // =========================================================================
    // 1. Validators.validateName
    // =========================================================================
    console.group('1. Validators.validateName()');
    assert(window.Validators !== undefined, 'Validators module exposed on window');
    if (window.Validators) {
        assert(Validators.validateName('Ramesh').valid,              'single-word name valid');
        assert(Validators.validateName('Ravi Kumar').valid,          'name with space valid');
        assert(Validators.validateName("O'Brien").valid,             'name with apostrophe valid');
        assert(Validators.validateName('Al').valid,                  '2-char minimum passes');
        assert(Validators.validateName('Priya-Sharma').valid,        'hyphenated name passes');
        assert(!Validators.validateName('A').valid,                  'single-char fails');
        assert(!Validators.validateName('').valid,                   'empty string fails');
        assert(!Validators.validateName('   ').valid,                'whitespace-only fails');
        assert(!Validators.validateName('123').valid,                'numeric-only fails');
        assert(!Validators.validateName('Raj@#').valid,              'special chars fail');
        assert(!Validators.validateName('R2D2').valid,               'alphanumeric fails');
        assert(!Validators.validateName(null).valid,                 'null fails gracefully');
        assert(!Validators.validateName(undefined).valid,            'undefined fails gracefully');
        assert(!Validators.validateName(42).valid,                   'number type fails gracefully');
        const bad = Validators.validateName('');
        assert(typeof bad.message === 'string' && bad.message.length > 0, 'invalid has non-empty message');
        const good = Validators.validateName('Test');
        assertEqual(good.message, '', 'valid has empty message');
    }
    console.groupEnd();

    // =========================================================================
    // 2. Validators.validateAge
    // =========================================================================
    console.group('2. Validators.validateAge()');
    if (window.Validators) {
        assert(Validators.validateAge(25).valid,    'age 25 valid');
        assert(Validators.validateAge(18).valid,    'age 18 boundary valid');
        assert(Validators.validateAge(17).valid,    'age 17 valid input (underage handled in UI)');
        assert(Validators.validateAge(1).valid,     'age 1 valid');
        assert(Validators.validateAge(100).valid,   'age 100 boundary valid');
        assert(!Validators.validateAge(0).valid,    'age 0 invalid');
        assert(!Validators.validateAge(-1).valid,   'negative age invalid');
        assert(!Validators.validateAge(101).valid,  'age > 100 invalid');
        assert(!Validators.validateAge(NaN).valid,  'NaN invalid');
        assert(!Validators.validateAge('abc').valid,'string invalid');
        assert(!Validators.validateAge('').valid,   'empty string invalid');
        assert(!Validators.validateAge(null).valid, 'null invalid');
        assert(!Validators.validateAge(undefined).valid, 'undefined invalid');
        assert(!Validators.validateAge(18.5).valid, 'float invalid');
        const negMsg = Validators.validateAge(-5);
        assert(typeof negMsg.message === 'string' && negMsg.message.length > 0, 'invalid age has message');
    }
    console.groupEnd();

    // =========================================================================
    // 3. Validators.validateConstituencyInput
    // =========================================================================
    console.group('3. Validators.validateConstituencyInput()');
    if (window.Validators) {
        assert(Validators.validateConstituencyInput('Mysuru').valid,     'valid input');
        assert(Validators.validateConstituencyInput('bangalore').valid,  'alias valid');
        assert(Validators.validateConstituencyInput('  ok  ').valid,     'padded input valid');
        assert(!Validators.validateConstituencyInput('').valid,          'empty fails');
        assert(!Validators.validateConstituencyInput('   ').valid,       'whitespace-only fails');
        assert(!Validators.validateConstituencyInput(null).valid,        'null fails');
        assert(!Validators.validateConstituencyInput(undefined).valid,   'undefined fails');
    }
    console.groupEnd();

    // =========================================================================
    // 4. calculateScore
    // =========================================================================
    console.group('4. calculateScore()');
    if (window.calculateScore) {
        assertEqual(calculateScore({ name: '', age: null, registered: null, votingMethod: null, constituency: null }), 0, 'empty state = 0');
        assertEqual(calculateScore({ name: 'A', age: 25, registered: null, votingMethod: null, constituency: null }), 20, 'name + adult age = 20');
        assertEqual(calculateScore({ name: 'A', age: 25, registered: 'yes', votingMethod: null, constituency: null }), 50, 'name + age + yes = 50');
        assertEqual(calculateScore({ name: 'A', age: 25, registered: 'no', votingMethod: null, constituency: null }), 30, 'registered no = 30');
        assertEqual(calculateScore({ name: 'A', age: 25, registered: 'notsure', votingMethod: null, constituency: null }), 30, 'notsure = 30');
        assertEqual(calculateScore({ name: 'A', age: 25, registered: 'yes', votingMethod: 'in-person', constituency: 'mysuru' }), 100, 'all fields = 100');
        assert(calculateScore({ name: 'A', age: 25, registered: 'yes', votingMethod: 'in-person', constituency: 'mysuru' }) <= 100, 'score capped at 100');
        assertEqual(calculateScore(null), 0, 'null state = 0');
        assertEqual(calculateScore(undefined), 0, 'undefined state = 0');
        assertEqual(calculateScore({ name: 'A', age: 15, registered: null, votingMethod: null, constituency: null }), 10, 'minor only gets name score');
        assertEqual(calculateScore({ name: '', age: 25, registered: null, votingMethod: null, constituency: null }), 10, 'no name, adult = 10');
    }
    console.groupEnd();

    // =========================================================================
    // 5. formatDate
    // =========================================================================
    console.group('5. formatDate()');
    if (window.formatDate) {
        assert(typeof formatDate('2026-05-25T00:00:00Z') === 'string', 'returns string');
        assert(formatDate('2026-05-25T00:00:00Z').includes('2026'),    'includes year');
        assert(formatDate('2026-05-25T00:00:00Z').includes('May'),     'includes month name');
        assertEqual(formatDate('invalid-date'), 'Invalid date',        'invalid ISO returns "Invalid date"');
        assertEqual(formatDate(null), 'Date not available',            'null returns fallback');
        assertEqual(formatDate(undefined), 'Date not available',       'undefined returns fallback');
        assert(formatDate('').includes('Invalid'),                     'empty string returns invalid');
        assert(formatDate(new Date('2026-01-01')).includes('2026'),    'Date object accepted');
    }
    console.groupEnd();

    // =========================================================================
    // 6. escapeHTML
    // =========================================================================
    console.group('6. escapeHTML()');
    if (window.escapeHTML) {
        assertEqual(escapeHTML('<script>'),   '&lt;script&gt;',   'escapes angle brackets');
        assertEqual(escapeHTML('"hello"'),    '&quot;hello&quot;','escapes double quotes');
        assertEqual(escapeHTML("it's"),       'it&#039;s',        'escapes single quotes');
        assertEqual(escapeHTML('a & b'),      'a &amp; b',        'escapes ampersand');
        assertEqual(escapeHTML(''),           '',                 'empty string returns empty');
        assertEqual(escapeHTML(null),         '',                 'null returns empty');
        assertEqual(escapeHTML(undefined),    '',                 'undefined returns empty');
        const xss = escapeHTML('<img src=x onerror=alert(1)>');
        assert(!xss.includes('<img'),         'XSS img tag neutralised');
        assert(!xss.includes('onerror'),      'XSS onerror neutralised');
        assertEqual(escapeHTML(42),           '42',              'number coerced to string');
    }
    console.groupEnd();

    // =========================================================================
    // 7. sanitizeText
    // =========================================================================
    console.group('7. sanitizeText()');
    if (window.sanitizeText) {
        assertEqual(sanitizeText('Hello'),       'Hello',   'clean text unchanged');
        assertEqual(sanitizeText('  Hello  '),   'Hello',   'trims whitespace');
        assertEqual(sanitizeText('<b>bold</b>'), 'bbold/b', 'strips angle brackets');
        assertEqual(sanitizeText(''),            '',        'empty string returns empty');
        assertEqual(sanitizeText(null),          '',        'null returns empty');
        assertEqual(sanitizeText(undefined),     '',        'undefined returns empty');
        assertEqual(sanitizeText(42),            '',        'non-string returns empty');
        assertEqual(sanitizeText('ok<script>'),  'okscript', 'partial tag stripped');
    }
    console.groupEnd();

    // =========================================================================
    // 8. debounce
    // =========================================================================
    console.group('8. debounce()');
    if (window.debounce) {
        assert(typeof debounce(() => {}, 100) === 'function', 'returns a function');
        let count = 0;
        const fn = debounce(() => count++, 50);
        fn(); fn(); fn();
        assertEqual(count, 0, 'not called synchronously after rapid calls');
        await new Promise(r => setTimeout(r, 100));
        assertEqual(count, 1, 'called exactly once after delay');
        let single = 0;
        const once = debounce(() => single++, 30);
        once();
        await new Promise(r => setTimeout(r, 70));
        assertEqual(single, 1, 'single call fires after delay');
        // Cancellation: rapid calls reset timer
        let reset = 0;
        const cancel = debounce(() => reset++, 80);
        cancel(); cancel(); cancel();
        await new Promise(r => setTimeout(r, 150));
        assertEqual(reset, 1, 'only one call despite rapid invocations');
    }
    console.groupEnd();

    // =========================================================================
    // 9. logEvent
    // =========================================================================
    console.group('9. logEvent()');
    if (window.logEvent) {
        sessionStorage.removeItem('appLogs');
        logEvent('unit_test_event', { source: 'tests.js' });
        const logs = JSON.parse(sessionStorage.getItem('appLogs') || '[]');
        const entry = logs.find(e => e.event === 'unit_test_event');
        assert(entry !== undefined,                       'stores entry in sessionStorage');
        assert(typeof entry.timestamp === 'string',       'entry has timestamp');
        assert(entry.source === 'tests.js',               'entry includes custom data');
        assert(entry.timestamp.includes('T'),             'timestamp is ISO format');
        for (let i = 0; i < 55; i++) logEvent('flood', { i });
        const logsAfter = JSON.parse(sessionStorage.getItem('appLogs') || '[]');
        assert(logsAfter.length <= 50,                    'capped at 50 entries');
    }
    console.groupEnd();

    // =========================================================================
    // 10. findConstituency
    // =========================================================================
    console.group('10. findConstituency()');
    if (window.findConstituency) {
        if (!window.electionData) window.electionData = window.fallbackData;
        const r1 = findConstituency('bangalore');
        assert(r1 !== null,                              '"bangalore" resolves');
        assert(r1 && r1.name === 'Bengaluru Urban',     '"bangalore" maps to Bengaluru Urban');
        const r2 = findConstituency('mysore');
        assert(r2 !== null,                              '"mysore" resolves');
        assert(r2 && r2.name === 'Mysuru',              '"mysore" maps to Mysuru');
        assert(findConstituency('zzznomatch999') === null, 'unknown returns null');
        assert(findConstituency('') === null,             'empty string returns null');
        assert(findConstituency(null) === null,           'null returns null');
        const r3 = findConstituency('Shivamogga');
        assert(r3 !== null,                              'exact name (mixed case) resolves');
        const r4 = findConstituency('hubli');
        assert(r4 !== null,                              '"hubli" alias resolves');
        assert(r4 && r4.name === 'Hubballi-Dharwad',    '"hubli" maps correctly');
        const r5 = findConstituency('mangalore');
        assert(r5 !== null,                              '"mangalore" alias resolves');
        const r6 = findConstituency('coorg');
        assert(r6 !== null,                              '"coorg" alias resolves to Madikeri');
    }
    console.groupEnd();

    // =========================================================================
    // 11. findFAQAnswer
    // =========================================================================
    console.group('11. findFAQAnswer()');
    if (window.findFAQAnswer) {
        const r1 = findFAQAnswer('what does an mla do?');
        assert(r1 !== null,                        'MLA question matches FAQ');
        assert(r1 && typeof r1.answer === 'string','FAQ result has answer string');
        assert(r1 && r1.answer.length > 0,         'FAQ answer non-empty');
        assert(findFAQAnswer('what is nota') !== null,           'NOTA matches FAQ');
        assert(findFAQAnswer('how to register to vote') !== null,'registration matches FAQ');
        assert(findFAQAnswer('what is evm') !== null,            'EVM matches FAQ');
        assert(findFAQAnswer('voter id epic card') !== null,     'voter ID matches FAQ');
        assert(findFAQAnswer('what is nvsp') !== null,           'NVSP matches FAQ');
        assert(findFAQAnswer('postal ballot') !== null,          'postal ballot matches FAQ');
        assert(findFAQAnswer('xyzzy-no-match-xyz') === null,     'unknown returns null');
        assert(findFAQAnswer('') === null,                       'empty returns null');
        assert(findFAQAnswer(null) === null,                     'null returns null');
    }
    console.groupEnd();

    // =========================================================================
    // 12. translations — t()
    // =========================================================================
    console.group('12. t() — translation function');
    if (window.t && window.TRANSLATIONS) {
        assertEqual(typeof t('introTitle'), 'string',             't() returns string');
        assert(t('introTitle').length > 0,                        'introTitle non-empty');
        assert(t('nonExistentKey123') === 'nonExistentKey123',    'missing key returns key as fallback');
        const r = t('ageTitle', { name: 'Ramesh' });
        assert(r.includes('Ramesh'),                              '{{name}} placeholder replaced');
        assert(!r.includes('{{name}}'),                           '{{name}} fully consumed');
        assert(typeof TRANSLATIONS.en === 'object',               'English translations loaded');
        assert(typeof TRANSLATIONS.kn === 'object',               'Kannada translations loaded');
        // Every English key must exist in Kannada
        const enKeys = Object.keys(TRANSLATIONS.en);
        const knKeys = Object.keys(TRANSLATIONS.kn);
        const missingInKn = enKeys.filter(k => !knKeys.includes(k));
        assert(missingInKn.length === 0,
            `All EN keys exist in KN (missing: ${missingInKn.join(', ') || 'none'})`);
        assert(typeof window.setLanguage === 'function',           'setLanguage exposed');
        assert(typeof window.getCurrentLang === 'function',        'getCurrentLang exposed');
        assertEqual(typeof getCurrentLang(), 'string',             'getCurrentLang returns string');
    }
    console.groupEnd();

    // =========================================================================
    // 13. askGemini — input validation only (no live API call)
    // =========================================================================
    console.group('13. askGemini() — input validation');
    if (window.askGemini) {
        assert(typeof askGemini === 'function',                'askGemini is a function');
        assert(askGemini.constructor.name === 'AsyncFunction', 'askGemini is async');
        await assertThrows(() => askGemini(''),        'throws on empty string');
        await assertThrows(() => askGemini(null),      'throws on null');
        await assertThrows(() => askGemini('   '),     'throws on whitespace-only');
        await assertThrows(() => askGemini(undefined), 'throws on undefined');
    }
    console.groupEnd();

    // =========================================================================
    // 14. saveUserData — simulation mode
    // =========================================================================
    console.group('14. saveUserData() — simulation');
    if (window.saveUserData) {
        try {
            const r = await saveUserData({ name: 'TestUser', score: 80, constituency: 'mysuru', votingMethod: 'in-person', registered: 'yes' });
            assert(r !== undefined, 'saveUserData returns a result');
            if (r && r.simulated) {
                assert(r.simulated === true, 'simulation flag is true');
                assert(r.payload && typeof r.payload.savedAt === 'string', 'payload has savedAt');
                assert(r.payload.name === 'TestUser', 'payload name matches');
                assert(r.payload.score === 80, 'payload score matches');
            }
        } catch (e) { assert(false, `saveUserData threw: ${e.message}`); }

        try {
            const r2 = await saveUserData({});
            assert(r2 !== undefined, 'handles empty object without throw');
        } catch (e) { assert(false, `saveUserData crashed on empty: ${e.message}`); }

        try {
            const r3 = await saveUserData({ name: 'Partial' });
            assert(r3 !== undefined, 'handles partial object without throw');
        } catch (e) { assert(false, `saveUserData crashed on partial: ${e.message}`); }
    }
    console.groupEnd();

    // =========================================================================
    // 15. createSpinner
    // =========================================================================
    console.group('15. createSpinner()');
    if (window.createSpinner) {
        const html = createSpinner('Loading...');
        assert(typeof html === 'string',          'returns string');
        assert(html.includes('spinner'),          'contains spinner class');
        assert(html.includes('Loading...'),       'contains label text');
        assert(html.includes('role="status"'),    'has role="status" for a11y');
        const xssHtml = createSpinner('<script>alert(1)</script>');
        assert(!xssHtml.includes('<script>'),     'XSS in label is escaped');
        const def = createSpinner();
        assert(typeof def === 'string',           'no-arg call returns string');
    }
    console.groupEnd();

    // =========================================================================
    // 16. showToast — DOM smoke test
    // =========================================================================
    console.group('16. showToast() — DOM smoke test');
    if (window.showToast && typeof document !== 'undefined') {
        showToast('Test notification', 'success', 500);
        const toast = document.getElementById('toast-notification');
        assert(toast !== null,                              'creates a DOM element');
        assert(toast.textContent === 'Test notification',  'correct text');
        assert(toast.classList.contains('toast-success'),  'correct type class');
        showToast('Second toast', 'info', 500);
        const toasts = document.querySelectorAll('#toast-notification');
        assert(toasts.length === 1, 'no duplicate elements on second call');
        showToast('Error test', 'error', 500);
        const errToast = document.getElementById('toast-notification');
        assert(errToast && errToast.classList.contains('toast-error'), 'error type class applied');
    }
    console.groupEnd();

    // =========================================================================
    // 17. State persistence — saveState / loadState / clearState
    // =========================================================================
    console.group('17. State persistence (saveState / loadState / clearState)');
    if (window.saveState && window.loadState && window.clearState) {
        // Ensure we can clear without error
        try { clearState(); assert(true, 'clearState runs without error'); }
        catch (e) { assert(false, `clearState threw: ${e.message}`); }
        assert(localStorage.getItem('electionUserState') === null, 'clearState removes key from storage');

        // saveState writes to storage (requires age >= 18)
        // We test indirectly via the global userState, but since it is module-scoped
        // we verify the API is at least callable without throwing.
        try { saveState(); assert(true, 'saveState runs without error'); }
        catch (e) { assert(false, `saveState threw: ${e.message}`); }

        // loadState reads back without error
        try { loadState(); assert(true, 'loadState runs without error'); }
        catch (e) { assert(false, `loadState threw: ${e.message}`); }

        // loadState handles corrupt JSON gracefully
        localStorage.setItem('electionUserState', '{{{invalid json');
        try { loadState(); assert(true, 'loadState handles corrupt JSON without throw'); }
        catch (e) { assert(false, `loadState threw on corrupt JSON: ${e.message}`); }
        // Storage entry should be cleaned up
        assert(localStorage.getItem('electionUserState') === null, 'corrupt state cleared from storage');
    } else {
        assert(false, 'saveState / loadState / clearState not exposed on window');
    }
    console.groupEnd();

    // =========================================================================
    // 18. fallbackData structural integrity
    // =========================================================================
    console.group('18. fallbackData structural integrity');
    if (window.fallbackData) {
        assert(typeof fallbackData.electionInfo === 'object',   'has electionInfo');
        assert(typeof fallbackData.constituencies === 'object', 'has constituencies');
        assert(typeof fallbackData.education === 'object',      'has education section');
        assert(Array.isArray(fallbackData.education.steps),     'education.steps is array');
        assert(fallbackData.education.steps.length > 0,         'education.steps non-empty');
        const tl = fallbackData.electionInfo.timeline;
        assert(typeof tl.registrationDeadline === 'string',     'registrationDeadline is string');
        assert(typeof tl.electionDay === 'string',              'electionDay is string');
        assert(!isNaN(new Date(tl.registrationDeadline).getTime()), 'registrationDeadline valid date');
        assert(!isNaN(new Date(tl.electionDay).getTime()),          'electionDay valid date');
        const keys = Object.keys(fallbackData.constituencies);
        assert(keys.length >= 10, 'at least 10 constituencies defined');
        keys.forEach(key => {
            const c = fallbackData.constituencies[key];
            assert(Array.isArray(c.candidates) && c.candidates.length > 0,
                `"${key}" has at least one candidate`);
            assert(typeof c.pollingLocation === 'string' && c.pollingLocation.length > 0,
                `"${key}" has a polling location`);
            assert(Array.isArray(c.aliases),
                `"${key}" has aliases array`);
        });
    }
    console.groupEnd();

    // =========================================================================
    // Summary
    // =========================================================================
    const total = passed + failed;
    const icon  = failed === 0 ? '✅' : '⚠️';
    console.log(`\n📊 Results: ${passed}/${total} passed ${failed > 0 ? `, ${failed} FAILED` : icon}`);
    console.groupEnd();

    window.__testResults = { passed, failed, total };

    if (window.logEvent) {
        logEvent('unit_tests_complete', { passed, failed, total });
    }
})();
