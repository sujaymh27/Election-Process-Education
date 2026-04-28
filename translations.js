'use strict';
// ─── translations.js — English & Kannada (ಕನ್ನಡ) i18n ───────────────────────
const TRANSLATIONS = {
    en: {
        appTitle: 'Interactive Election Assistant',
        appSubtitle: 'Understand timelines, steps, and your readiness to vote',
        disclaimer: '⚠️ This assistant uses demonstration data and simplified logic. Please verify official information from government sources like NVSP. Minor inaccuracies may occur.',
        langToggle: 'ಕನ್ನಡ',

        introTitle: 'Welcome to Your Election Guide',
        introDesc: "This assistant will guide you step-by-step through the election process. Let's start with your name.",
        labelName: 'Your First Name', namePlaceholder: 'e.g., Ramesh', btnContinue: 'Continue',

        ageTitle: 'Nice to meet you, {{name}}!',
        ageDesc: 'To give you the right information, please tell us your age.',
        labelAge: 'Your Age', agePlaceholder: 'e.g., 25',

        welcomeBackTitle: 'Welcome back, {{name}}!',
        welcomeBackDesc: "Let's continue your election preparation journey.",
        btnContinueJourney: 'Continue Journey', btnStartOver: 'Start Over',

        registrationTitle: '{{name}}, your next step is Voter Registration',
        registrationDesc: 'Are you currently registered to vote at your current address?',
        btnYes: 'Yes, I am registered',
        btnNo: 'No, I need to register',
        btnNotSure: "I'm not sure",

        votingMethodTitle: 'How do you plan to vote?',
        votingMethodDesc: '{{name}}, select your preferred voting method so we can guide you.',
        inPerson: '🏛️ In-Person Voting',
        inPersonDesc: 'The standard method in India — visit your designated polling station on election day with your Voter ID (EPIC card).',
        postalBallot: '📮 Postal Ballot',
        postalBallotDesc: 'Available only for: Service voters (armed forces, police), Senior citizens (85+), Persons with disabilities (40%+ disability). General voters are not eligible.',

        constituencyTitle: 'Find Your Constituency',
        constituencyDesc: '{{name}}, enter your city or constituency name to see the candidates.',
        constituencyHint: 'Try: Shivamogga, Bengaluru, or Mysuru',
        btnSearch: 'Search', btnViewDashboard: 'View My Dashboard',
        noMatchTitle: 'No constituency found matching',
        noMatchSuggestions: 'Please try: Shivamogga, Bengaluru, Mysuru, Mangaluru, Hubballi, Belagavi, Madikeri, Hassan',
        noMatchTip: 'Tip: Try alternate spellings (e.g., "Bangalore" for Bengaluru, "Mysore" for Mysuru).',

        timelineTitle: 'Election Timeline',
        checklistTitle: 'Your Readiness Checklist',
        pollingTitle: 'Polling Location',
        registrationDeadline: 'Registration Deadline', electionDay: 'Election Day',
        addToCalendar: 'Add to Google Calendar',
        readiness: 'Readiness',
        statusRegistered: 'Registration Status', regYes: 'Registered', regNo: 'Needs Action',
        votingMethodLabel: 'Voting Method', notSelected: 'Not selected',
        constituencyLabel: 'Constituency',
        nextStepMsg: '{{name}}, your next step: Prepare your Voter ID for election day.',
        inPersonPlan: 'You plan to vote in person.',
        postalPlan: 'You plan to vote via postal ballot.',
        btnFinalReset: 'Start Over',

        aiTitle: '🤖 Ask AI About Elections',
        aiDesc: '{{name}}, have a question about elections or voting? Ask our AI powered by Google Gemini.',
        aiHint: 'Try: "What does an MLA do?", "How do I register to vote?", "What is NOTA?"',
        labelQuestion: 'Your Question', questionPlaceholder: 'e.g., What is the role of ECI?', btnAskAI: 'Ask AI',

        errNameEmpty: 'Please enter your name to continue.',
        errNameInvalid: 'Name should only contain letters. Please remove any numbers or special characters.',
        errNameShort: 'Name must be at least 2 characters.',
        errAgeInvalid: 'Please enter a valid age (numbers only).',
        errAgeWhole: 'Age must be a whole number.',
        errAgeNegative: 'Age cannot be zero or negative. Please enter a valid age.',
        errAgeHigh: 'Age seems too high (over 100). Please double-check your input.',
        errConstituencyEmpty: 'Please enter a city or constituency name to search.',
        errAIEmpty: 'Please enter a question before asking.',
    },

    kn: {
        appTitle: 'ಸಂವಾದಾತ್ಮಕ ಚುನಾವಣಾ ಸಹಾಯಕ',
        appSubtitle: 'ಸಮಯರೇಖೆ, ಹಂತಗಳು ಮತ್ತು ಮತದಾನದ ಸಿದ್ಧತೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ',
        disclaimer: '⚠️ ಈ ಸಹಾಯಕ ಪ್ರದರ್ಶನ ದತ್ತಾಂಶವನ್ನು ಬಳಸುತ್ತದೆ. ಅಧಿಕೃತ ಮಾಹಿತಿಗಾಗಿ NVSP ಅಥವಾ ಸರ್ಕಾರಿ ಮೂಲಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
        langToggle: 'English',

        introTitle: 'ನಿಮ್ಮ ಚುನಾವಣಾ ಮಾರ್ಗದರ್ಶಿಗೆ ಸ್ವಾಗತ',
        introDesc: 'ಈ ಸಹಾಯಕ ನಿಮ್ಮನ್ನು ಚುನಾವಣಾ ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ಹೆಜ್ಜೆ-ಹೆಜ್ಜೆಯಾಗಿ ಮಾರ್ಗದರ್ಶಿಸುತ್ತದೆ. ನಿಮ್ಮ ಹೆಸರಿನಿಂದ ಪ್ರಾರಂಭಿಸೋಣ.',
        labelName: 'ನಿಮ್ಮ ಹೆಸರು', namePlaceholder: 'ಉದಾ: ರಮೇಶ್', btnContinue: 'ಮುಂದುವರಿಸಿ',

        ageTitle: '{{name}}, ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಸಂತೋಷವಾಯಿತು!',
        ageDesc: 'ಸರಿಯಾದ ಮಾಹಿತಿ ನೀಡಲು ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ತಿಳಿಸಿ.',
        labelAge: 'ನಿಮ್ಮ ವಯಸ್ಸು', agePlaceholder: 'ಉದಾ: 25',

        welcomeBackTitle: '{{name}}, ಮತ್ತೆ ಸ್ವಾಗತ!',
        welcomeBackDesc: 'ನಿಮ್ಮ ಚುನಾವಣಾ ತಯಾರಿ ಮುಂದುವರಿಸೋಣ.',
        btnContinueJourney: 'ಮುಂದುವರಿಸಿ', btnStartOver: 'ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ',

        registrationTitle: '{{name}}, ನಿಮ್ಮ ಮುಂದಿನ ಹಂತ: ಮತದಾರ ನೋಂದಣಿ',
        registrationDesc: 'ನೀವು ಈಗಾಗಲೇ ನಿಮ್ಮ ವಿಳಾಸದಲ್ಲಿ ಮತದಾರರಾಗಿ ನೋಂದಾಯಿಸಿದ್ದೀರಾ?',
        btnYes: 'ಹೌದು, ನೋಂದಾಯಿಸಿದ್ದೇನೆ',
        btnNo: 'ಇಲ್ಲ, ನೋಂದಾಯಿಸಬೇಕಿದೆ',
        btnNotSure: 'ನನಗೆ ಖಚಿತವಿಲ್ಲ',

        votingMethodTitle: 'ನೀವು ಹೇಗೆ ಮತ ಹಾಕಲು ಯೋಜಿಸುತ್ತೀರಿ?',
        votingMethodDesc: '{{name}}, ನಿಮ್ಮ ಮತದಾನ ವಿಧಾನ ಆಯ್ಕೆಮಾಡಿ.',
        inPerson: '🏛️ ಮತಗಟ್ಟೆಯಲ್ಲಿ ಮತದಾನ',
        inPersonDesc: 'ಭಾರತದಲ್ಲಿ ಮುಖ್ಯ ವಿಧಾನ — ಚುನಾವಣಾ ದಿನ ನಿಮ್ಮ EPIC ಕಾರ್ಡ್‌ನೊಂದಿಗೆ ಮತಗಟ್ಟೆಗೆ ಭೇಟಿ ನೀಡಿ.',
        postalBallot: '📮 ಅಂಚೆ ಮತಪತ್ರ',
        postalBallotDesc: 'ಕೇವಲ ಅರ್ಹ ವರ್ಗಗಳಿಗೆ: ಸೇನಾ ಸಿಬ್ಬಂದಿ, 85+ ಹಿರಿಯ ನಾಗರಿಕರು, 40%+ ವಿಕಲಚೇತನರು. ಸಾಮಾನ್ಯ ಮತದಾರರಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ.',

        constituencyTitle: 'ನಿಮ್ಮ ಕ್ಷೇತ್ರ ಹುಡುಕಿ',
        constituencyDesc: '{{name}}, ಅಭ್ಯರ್ಥಿಗಳನ್ನು ನೋಡಲು ನಿಮ್ಮ ನಗರ ಅಥವಾ ಕ್ಷೇತ್ರದ ಹೆಸರು ನಮೂದಿಸಿ.',
        constituencyHint: 'ಪ್ರಯತ್ನಿಸಿ: ಶಿವಮೊಗ್ಗ, ಬೆಂಗಳೂರು, ಅಥವಾ ಮೈಸೂರು',
        btnSearch: 'ಹುಡುಕು', btnViewDashboard: 'ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನೋಡಿ',
        noMatchTitle: 'ಹೊಂದಾಣಿಕೆ ಕ್ಷೇತ್ರ ಕಂಡುಬಂದಿಲ್ಲ',
        noMatchSuggestions: 'ಪ್ರಯತ್ನಿಸಿ: ಶಿವಮೊಗ್ಗ, ಬೆಂಗಳೂರು, ಮೈಸೂರು, ಮಂಗಳೂರು, ಹುಬ್ಬಳ್ಳಿ, ಬೆಳಗಾವಿ',
        noMatchTip: 'ಸುಳಿವು: ಪರ್ಯಾಯ ಕಾಗುಣಿತ ಪ್ರಯತ್ನಿಸಿ (ಉದಾ: "Bangalore" ಬೆಂಗಳೂರಿಗೆ).',

        timelineTitle: 'ಚುನಾವಣಾ ಸಮಯರೇಖೆ',
        checklistTitle: 'ನಿಮ್ಮ ಸಿದ್ಧತಾ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ',
        pollingTitle: 'ಮತಗಟ್ಟೆ ಸ್ಥಳ',
        registrationDeadline: 'ನೋಂದಣಿ ಗಡುವು', electionDay: 'ಚುನಾವಣಾ ದಿನ',
        addToCalendar: 'Google ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ',
        readiness: 'ಸಿದ್ಧತೆ',
        statusRegistered: 'ನೋಂದಣಿ ಸ್ಥಿತಿ', regYes: 'ನೋಂದಾಯಿಸಿದ್ದೇನೆ', regNo: 'ಕ್ರಮ ಅಗತ್ಯ',
        votingMethodLabel: 'ಮತದಾನ ವಿಧಾನ', notSelected: 'ಆಯ್ಕೆಯಾಗಿಲ್ಲ',
        constituencyLabel: 'ಕ್ಷೇತ್ರ',
        nextStepMsg: '{{name}}, ನಿಮ್ಮ ಮುಂದಿನ ಹಂತ: ಚುನಾವಣಾ ದಿನ ನಿಮ್ಮ ಮತದಾರ ಗುರುತು ಚೀಟಿ ತಯಾರಿಸಿ.',
        inPersonPlan: 'ನೀವು ಮತಗಟ್ಟೆಯಲ್ಲಿ ಮತ ಹಾಕಲು ಯೋಜಿಸಿದ್ದೀರಿ.',
        postalPlan: 'ನೀವು ಅಂಚೆ ಮತಪತ್ರದ ಮೂಲಕ ಮತ ಹಾಕಲು ಯೋಜಿಸಿದ್ದೀರಿ.',
        btnFinalReset: 'ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ',

        aiTitle: '🤖 ಚುನಾವಣೆ ಬಗ್ಗೆ AI ಕೇಳಿ',
        aiDesc: '{{name}}, ಚುನಾವಣೆ ಬಗ್ಗೆ ಪ್ರಶ್ನೆ ಇದೆಯೇ? Google Gemini AI ಕೇಳಿ.',
        aiHint: 'ಪ್ರಯತ್ನಿಸಿ: "MLA ಏನು ಮಾಡುತ್ತಾರೆ?", "ಮತ ಹೇಗೆ ನೋಂದಾಯಿಸಬೇಕು?", "NOTA ಎಂದರೇನು?"',
        labelQuestion: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆ', questionPlaceholder: 'ಉದಾ: ECI ಪಾತ್ರ ಏನು?', btnAskAI: 'AI ಕೇಳಿ',

        errNameEmpty: 'ಮುಂದುವರಿಯಲು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.',
        errNameInvalid: 'ಹೆಸರಿನಲ್ಲಿ ಕೇವಲ ಅಕ್ಷರಗಳು ಇರಬೇಕು.',
        errNameShort: 'ಹೆಸರು ಕನಿಷ್ಠ 2 ಅಕ್ಷರಗಳಿರಬೇಕು.',
        errAgeInvalid: 'ದಯವಿಟ್ಟು ಮಾನ್ಯ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ.',
        errAgeWhole: 'ವಯಸ್ಸು ಪೂರ್ಣ ಸಂಖ್ಯೆ ಆಗಿರಬೇಕು.',
        errAgeNegative: 'ವಯಸ್ಸು ಶೂನ್ಯ ಅಥವಾ ಋಣಾತ್ಮಕ ಆಗಿರಬಾರದು.',
        errAgeHigh: 'ವಯಸ್ಸು 100 ಮೇಲೆ ಇದೆ. ದಯವಿಟ್ಟು ಪರಿಶೀಲಿಸಿ.',
        errConstituencyEmpty: 'ಕ್ಷೇತ್ರದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.',
        errAIEmpty: 'ಪ್ರಶ್ನೆ ಕೇಳುವ ಮೊದಲು ಅದನ್ನು ನಮೂದಿಸಿ.',
    }
};

// Active language (persisted in localStorage)
let _currentLang = localStorage.getItem('electionLang') || 'en';

/** Get translated string, replacing {{var}} placeholders */
function t(key, vars = {}) {
    let str = (TRANSLATIONS[_currentLang] && TRANSLATIONS[_currentLang][key])
        || TRANSLATIONS.en[key]
        || key;
    for (const [k, v] of Object.entries(vars)) {
        str = str.replace(new RegExp(`{{${k}}}`, 'g'), v);
    }
    return str;
}

/** Switch language and re-render the app */
function setLanguage(lang) {
    _currentLang = lang;
    localStorage.setItem('electionLang', lang);
    document.documentElement.lang = lang === 'kn' ? 'kn' : 'en';

    // Update static header elements without full page reload
    const h1 = document.querySelector('.app-header h1');
    const sub = document.querySelector('.app-header .subtitle');
    const disc = document.querySelector('.disclaimer-note');
    const btn = document.getElementById('langToggleBtn');
    if (h1)   h1.textContent  = t('appTitle');
    if (sub)  sub.textContent = t('appSubtitle');
    if (disc) disc.textContent = t('disclaimer');
    if (btn)  btn.textContent  = t('langToggle');

    // Re-render dynamic content
    if (window.renderCurrentStep) window.renderCurrentStep();
    logEvent('language_changed', { lang });
}

function getCurrentLang() { return _currentLang; }

// Expose for script.js, tests.js, and evaluators
window.t              = t;
window.setLanguage    = setLanguage;
window.getCurrentLang = getCurrentLang;
window.TRANSLATIONS   = TRANSLATIONS;
