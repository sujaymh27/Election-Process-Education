/**
 * tests.js — Unit Tests for Election Process Education
 * Uses console.assert for lightweight, zero-dependency testing.
 * Run by opening the browser console after page load, or via Node.js.
 */

(async function runTests() {
    'use strict';

    let passed = 0;
    let failed = 0;

    function assert(condition, label) {
        if (condition) {
            console.log(`  ✅ PASS: ${label}`);
            passed++;
        } else {
            console.error(`  ❌ FAIL: ${label}`);
            failed++;
        }
    }

    console.group('🗳️ Election App — Unit Tests');

    // ── validateName ──────────────────────────────────────────────
    console.group('validateName()');
    assert(window.Validators !== undefined, 'Validators module exists');
    if (window.Validators) {
        assert(Validators.validateName('Ramesh').valid === true,   'valid name "Ramesh"');
        assert(Validators.validateName('').valid === false,        'empty name fails');
        assert(Validators.validateName('   ').valid === false,     'whitespace-only name fails');
        assert(Validators.validateName('123').valid === false,     'numeric name fails');
        assert(Validators.validateName('Raj@#').valid === false,   'special-char name fails');
        assert(Validators.validateName('Ab').valid === true,       'two-char name passes');
        assert(Validators.validateName('A').valid === false,       'single-char name fails');
        assert(Validators.validateName('Ravi Kumar').valid === true, 'name with space valid');
    }
    console.groupEnd();

    // ── validateAge ───────────────────────────────────────────────
    console.group('validateAge()');
    if (window.Validators) {
        assert(Validators.validateAge(25).valid === true,          'age 25 valid');
        assert(Validators.validateAge(18).valid === true,          'age 18 valid (boundary)');
        assert(Validators.validateAge(17).valid === true,          'age 17 is valid input (underage eligibility handled separately in UI)');
        assert(Validators.validateAge(0).valid === false,          'age 0 invalid');
        assert(Validators.validateAge(-1).valid === false,         'negative age invalid');
        assert(Validators.validateAge(101).valid === false,        'age 101 invalid (>100)');
        assert(Validators.validateAge(100).valid === true,         'age 100 valid (boundary)');
        assert(Validators.validateAge('abc').valid === false,      'non-numeric age invalid');
        assert(Validators.validateAge(NaN).valid === false,        'NaN age invalid');
    }
    console.groupEnd();

    // ── calculateScore ────────────────────────────────────────────
    console.group('calculateScore()');
    if (window.calculateScore) {
        assert(calculateScore({ name: '', age: null, registered: null, votingMethod: null, constituency: null }) === 0,
            'empty state = score 0');
        assert(calculateScore({ name: 'A', age: 25, registered: null, votingMethod: null, constituency: null }) === 20,
            'name + age = 20');
        assert(calculateScore({ name: 'A', age: 25, registered: 'yes', votingMethod: null, constituency: null }) === 50,
            'name + age + registered(yes) = 50');
        assert(calculateScore({ name: 'A', age: 25, registered: 'no', votingMethod: null, constituency: null }) === 30,
            'name + age + registered(no) = 30');
        assert(calculateScore({ name: 'A', age: 25, registered: 'yes', votingMethod: 'in-person', constituency: 'mysuru' }) === 100,
            'all fields = 100');
        assert(calculateScore({ name: 'A', age: 25, registered: 'yes', votingMethod: 'in-person', constituency: 'mysuru' }) <= 100,
            'score never exceeds 100');
    }
    console.groupEnd();

    // ── formatDate ────────────────────────────────────────────────
    console.group('formatDate()');
    if (window.formatDate) {
        assert(typeof formatDate('2026-05-25T00:00:00Z') === 'string', 'formatDate returns string');
        assert(formatDate('2026-05-25T00:00:00Z').includes('2026'),    'formatted date includes year');
        assert(formatDate('invalid-date') !== '',                      'invalid date returns fallback string');
        assert(formatDate(null) !== '',                                'null date returns fallback string');
        assert(formatDate(undefined) !== '',                           'undefined date returns fallback string');
    }
    console.groupEnd();

    // ── findConstituency ─────────────────────────────────────────
    console.group('findConstituency()');
    if (window.findConstituency) {
        const res1 = findConstituency('bangalore');
        assert(res1 !== null, '"bangalore" alias resolves to a constituency');
        assert(res1 && res1.name === 'Bengaluru Urban', '"bangalore" maps to Bengaluru Urban');

        const res2 = findConstituency('mysore');
        assert(res2 !== null, '"mysore" alias resolves');

        const res3 = findConstituency('zzznomatch999');
        assert(res3 === null, 'unknown string returns null (no auto-redirect)');

        const res4 = findConstituency('');
        assert(res4 === null, 'empty string returns null');
    }
    console.groupEnd();

    // ── escapeHTML ─────────────────────────────────────────────
    console.group('escapeHTML()');
    if (window.escapeHTML) {
        assert(escapeHTML('<script>') === '&lt;script&gt;',    'escapes angle brackets');
        assert(escapeHTML('"hello"') === '&quot;hello&quot;', 'escapes double quotes');
        assert(escapeHTML("it's")   === 'it&#039;s',          'escapes single quotes');
        assert(escapeHTML('a & b')  === 'a &amp; b',          'escapes ampersand');
        assert(escapeHTML('')       === '',                    'empty string returns empty');
        assert(escapeHTML(null)     === '',                    'null returns empty string');
        assert(escapeHTML(undefined)=== '',                    'undefined returns empty string');
    }
    console.groupEnd();

    // ── debounce ──────────────────────────────────────────────────
    console.group('debounce()');
    if (window.debounce) {
        assert(typeof debounce(() => {}, 100) === 'function', 'debounce returns a function');
        // Debounce timing test
        let callCount = 0;
        const debouncedFn = debounce(() => callCount++, 50);
        debouncedFn(); debouncedFn(); debouncedFn();
        assert(callCount === 0, 'debounced fn not called immediately (callCount=0)');
    }
    console.groupEnd();

    // ── logEvent ─────────────────────────────────────────────────
    console.group('logEvent()');
    if (window.logEvent) {
        const before = sessionStorage.getItem('appLogs');
        logEvent('test_event', { test: true });
        const after = JSON.parse(sessionStorage.getItem('appLogs') || '[]');
        const found = after.some(e => e.event === 'test_event');
        assert(found, 'logEvent stores entry in sessionStorage');
        const entry = after.find(e => e.event === 'test_event');
        assert(entry && typeof entry.timestamp === 'string', 'logEvent entry has timestamp');
    }
    console.groupEnd();

    // ── askGemini (mock — input validation only) ───────────────────────
    console.group('askGemini() — input validation tests (no real API call)');
    if (window.askGemini) {
        // Only test input validation — no real network call to avoid burning rate limits
        let caughtEmpty = false;
        try { await askGemini(''); } catch(e) { caughtEmpty = true; }
        assert(caughtEmpty, 'askGemini throws on empty question');

        let caughtNull = false;
        try { await askGemini(null); } catch(e) { caughtNull = true; }
        assert(caughtNull, 'askGemini throws on null input');

        let caughtWhitespace = false;
        try { await askGemini('   '); } catch(e) { caughtWhitespace = true; }
        assert(caughtWhitespace, 'askGemini throws on whitespace-only input');

        // Verify function signature is correct (no live call)
        assert(typeof askGemini === 'function', 'askGemini is a function');
        assert(askGemini.constructor.name === 'AsyncFunction', 'askGemini is async');
    }
    console.groupEnd();

    // ── saveUserData (mock) ───────────────────────────────────────
    console.group('saveUserData() — mock tests');
    if (window.saveUserData) {
        const mockData = { name: 'TestUser', score: 80, constituency: 'mysuru', votingMethod: 'in-person', registered: 'yes' };
        try {
            const result = await saveUserData(mockData);
            // In demo mode (no real Firebase), result should be { simulated: true }
            assert(result !== undefined, 'saveUserData returns a result (not undefined)');
            if (result && result.simulated) {
                assert(result.simulated === true, 'saveUserData simulation mode returns { simulated: true }');
            }
        } catch(e) {
            assert(false, `saveUserData threw unexpectedly: ${e.message}`);
        }

        // Test with missing fields — should not crash
        try {
            const result2 = await saveUserData({});
            assert(result2 !== undefined, 'saveUserData handles empty object without throwing');
        } catch(e) {
            assert(false, `saveUserData crashed on empty object: ${e.message}`);
        }
    }
    console.groupEnd();

    // ── Summary ───────────────────────────────────────────────────
    const total = passed + failed;
    console.log(`\n📊 Results: ${passed}/${total} tests passed${failed > 0 ? `, ${failed} FAILED` : ' ✅'}`);
    console.groupEnd();

    // Expose result for automation / CI
    window.__testResults = { passed, failed, total };
})();
