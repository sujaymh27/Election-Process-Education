'use strict';
// ─── script.js — Main Application Logic ─────────────────────────────────────

const fallbackData = {
  "electionInfo": {
    "location": "Karnataka, India",
    "type": "State Election (MLA)",
    "note": "Note: This is demonstration data",
    "timeline": {
      "registrationDeadline": "2026-05-10T00:00:00Z",
      "electionDay": "2026-05-25T00:00:00Z"
    }
  },
  "constituencies": {
    "shivamogga": {
      "name": "Shivamogga",
      "aliases": ["shimoga", "shivamogga", "shimo"],
      "candidates": [
        { "name": "Ravi Kumar", "focus": "Infrastructure & rural development" },
        { "name": "Anil Reddy", "focus": "Healthcare & public welfare" }
      ],
      "pollingLocation": "Shivamogga City Corporation"
    },
    "bengaluru urban": {
      "name": "Bengaluru Urban",
      "aliases": ["bangalore", "bengaluru", "blr"],
      "candidates": [
        { "name": "Priya Sharma", "focus": "Education & urban planning" },
        { "name": "Karthik Gowda", "focus": "Transport & smart city" }
      ],
      "pollingLocation": "BBMP Head Office, Bengaluru"
    },
    "mysuru": {
      "name": "Mysuru",
      "aliases": ["mysore", "mysuru", "mys"],
      "candidates": [
        { "name": "Sneha Iyer", "focus": "Tourism & culture" },
        { "name": "Manjunath Rao", "focus": "Agriculture & local economy" }
      ],
      "pollingLocation": "Mysuru City Corporation"
    },
    "hubballi-dharwad": {
      "name": "Hubballi-Dharwad",
      "aliases": ["hubli", "dharwad", "hubballi"],
      "candidates": [
        { "name": "Suresh Angadi", "focus": "Industrial growth" },
        { "name": "Deepa Patil", "focus": "Water management" }
      ],
      "pollingLocation": "HDMC Office, Hubballi"
    },
    "mangaluru": {
      "name": "Mangaluru",
      "aliases": ["mangalore", "mangaluru", "mlr"],
      "candidates": [
        { "name": "Vikram Shetty", "focus": "Coastal development & fisheries" },
        { "name": "Aisha Rahman", "focus": "Education & healthcare" }
      ],
      "pollingLocation": "Mangaluru City Corporation"
    },
    "belagavi": {
      "name": "Belagavi",
      "aliases": ["belgaum", "belagavi"],
      "candidates": [
        { "name": "Rajesh Kadam", "focus": "Agriculture & border development" },
        { "name": "Meena Deshpande", "focus": "Women empowerment" }
      ],
      "pollingLocation": "Belagavi City Corporation"
    },
    "kalaburagi": {
      "name": "Kalaburagi",
      "aliases": ["gulbarga", "kalaburagi"],
      "candidates": [
        { "name": "Mallikarjun", "focus": "Infrastructure & social justice" },
        { "name": "Vishwanath", "focus": "Youth employment" }
      ],
      "pollingLocation": "Kalaburagi City Corporation"
    },
    "davanagere": {
      "name": "Davanagere",
      "aliases": ["davangere", "davanagere"],
      "candidates": [
        { "name": "Shamanur", "focus": "Education & industrialization" },
        { "name": "Ramesh", "focus": "Farmer welfare" }
      ],
      "pollingLocation": "Davanagere City Corporation"
    },
    "ballari": {
      "name": "Ballari",
      "aliases": ["bellary", "ballari"],
      "candidates": [
        { "name": "Sriramulu", "focus": "Mining & regional development" },
        { "name": "Nagaraj", "focus": "Health & sanitation" }
      ],
      "pollingLocation": "Ballari City Corporation"
    },
    "tumakuru": {
      "name": "Tumakuru",
      "aliases": ["tumkur", "tumakuru"],
      "candidates": [
        { "name": "Parameshwara", "focus": "Education & smart city" },
        { "name": "Suresh", "focus": "Agriculture & water" }
      ],
      "pollingLocation": "Tumakuru City Corporation"
    },
    "udupi": {
      "name": "Udupi",
      "aliases": ["udupi", "oodupi"],
      "candidates": [
        { "name": "Madhwaraj", "focus": "Tourism & temple development" },
        { "name": "Shruthi", "focus": "Fishing community welfare" }
      ],
      "pollingLocation": "Udupi City Municipality"
    },
    "kundapura": {
      "name": "Kundapura",
      "aliases": ["kundapur"],
      "candidates": [
        { "name": "Halady", "focus": "Coastal regulation & agriculture" },
        { "name": "Pratap", "focus": "Fisheries development" }
      ],
      "pollingLocation": "Kundapura Taluk Office"
    },
    "karkala": {
      "name": "Karkala",
      "aliases": ["karkal"],
      "candidates": [
        { "name": "Sunil Kumar", "focus": "Culture & heritage tourism" },
        { "name": "Harsha", "focus": "Rural economy" }
      ],
      "pollingLocation": "Karkala Taluk Panchayat"
    },
    "sringeri": {
      "name": "Sringeri",
      "aliases": ["shringeri"],
      "candidates": [
        { "name": "Raje Gowda", "focus": "Areca nut farmers welfare" },
        { "name": "Venkatesh", "focus": "Eco-tourism & temple infrastructure" }
      ],
      "pollingLocation": "Sringeri Taluk Office"
    },
    "hassan": {
      "name": "Hassan",
      "aliases": ["hasan"],
      "candidates": [
        { "name": "Prajwal", "focus": "Agriculture & irrigation" },
        { "name": "Preetham", "focus": "City infrastructure" }
      ],
      "pollingLocation": "Hassan City Municipal Council"
    },
    "tiptur": {
      "name": "Tiptur",
      "aliases": ["tiptoour"],
      "candidates": [
        { "name": "Nagesh", "focus": "Coconut farmers support" },
        { "name": "Kiran", "focus": "Water supply" }
      ],
      "pollingLocation": "Tiptur Town Municipal Council"
    },
    "channapatna": {
      "name": "Channapatna",
      "aliases": ["chanapatna"],
      "candidates": [
        { "name": "Kumaraswamy", "focus": "Toy industry promotion" },
        { "name": "Yogeshwar", "focus": "Lake rejuvenation" }
      ],
      "pollingLocation": "Channapatna Taluk Panchayat"
    },
    "ramanagara": {
      "name": "Ramanagara",
      "aliases": ["ramanagar"],
      "candidates": [
        { "name": "Anitha", "focus": "Silk industry development" },
        { "name": "Iqbal", "focus": "Education & healthcare" }
      ],
      "pollingLocation": "Ramanagara City Municipal Council"
    },
    "bidar": {
      "name": "Bidar",
      "aliases": ["bidr"],
      "candidates": [
        { "name": "Rahim Khan", "focus": "Minority welfare & heritage" },
        { "name": "Suryakanth", "focus": "Industrial estate development" }
      ],
      "pollingLocation": "Bidar City Municipal Council"
    },
    "raichur": {
      "name": "Raichur",
      "aliases": ["rayachur"],
      "candidates": [
        { "name": "Shivaraj", "focus": "Thermal power & irrigation" },
        { "name": "Basanagouda", "focus": "Agriculture" }
      ],
      "pollingLocation": "Raichur City Municipal Council"
    },
    "koppal": {
      "name": "Koppal",
      "aliases": ["kopal"],
      "candidates": [
        { "name": "Raghavendra", "focus": "Rural infrastructure" },
        { "name": "Karadi", "focus": "Farmers welfare" }
      ],
      "pollingLocation": "Koppal City Municipal Council"
    },
    "hosapete": {
      "name": "Hosapete",
      "aliases": ["hospet"],
      "candidates": [
        { "name": "Anand Singh", "focus": "Tourism (Hampi) & mining" },
        { "name": "Gavali", "focus": "Employment generation" }
      ],
      "pollingLocation": "Hosapete City Municipal Council"
    },
    "madikeri": {
      "name": "Madikeri",
      "aliases": ["mercara", "coorg"],
      "candidates": [
        { "name": "Appachu", "focus": "Coffee planters welfare" },
        { "name": "Mantara", "focus": "Eco-tourism & disaster management" }
      ],
      "pollingLocation": "Madikeri City Municipal Council"
    }
  },
  "education": {
    "whatIsMLA": "MLA stands for Member of Legislative Assembly. They are elected by the public to represent a constituency in the state assembly.",
    "roleOfMLA": "The primary role of an MLA is to represent their constituents' grievances, draft and pass state laws, and oversee the state government's functioning.",
    "steps": [
      "Check your eligibility (Age 18+).",
      "Register to vote in your constituency.",
      "Research the candidates and their policies.",
      "Find your polling station.",
      "Cast your vote on election day."
    ]
  }
};

// ─── Central Validation Module ───────────────────────────────────────────────
const Validators = {
    /**
     * Validates a user-supplied name.
     * Rules: non-empty, min 2 chars, letters/spaces/hyphens only.
     */
    validateName(name) {
        if (typeof name !== 'string') return { valid: false, message: 'Name must be a string.' };
        const trimmed = name.trim();
        if (!trimmed) return { valid: false, message: 'Please enter your name to continue.' };
        if (trimmed.length < 2) return { valid: false, message: 'Name must be at least 2 characters.' };
        if (!/^[a-zA-Z\s\-'.]+$/.test(trimmed)) return { valid: false, message: 'Name should only contain letters. Please remove any numbers or special characters.' };
        return { valid: true, message: '' };
    },

    /**
     * Validates age input.
     * Rules: numeric, 1–100 (18+ for voting eligibility checked separately).
     */
    validateAge(value) {
        const age = Number(value);
        if (value === null || value === undefined || value === '' || isNaN(age)) {
            return { valid: false, message: 'Please enter a valid age (numbers only).' };
        }
        if (!Number.isInteger(age)) {
            return { valid: false, message: 'Age must be a whole number.' };
        }
        if (age <= 0) {
            return { valid: false, message: 'Age cannot be zero or negative. Please enter a valid age.' };
        }
        if (age > 100) {
            return { valid: false, message: 'Age seems too high (over 100). Please double-check your input.' };
        }
        return { valid: true, message: '' };
    },

    /**
     * Validates constituency search input.
     */
    validateConstituencyInput(input) {
        if (!input || !input.trim()) {
            return { valid: false, message: 'Please enter a city or constituency name to search.' };
        }
        return { valid: true, message: '' };
    }
};

// Expose Validators globally for tests.js
window.Validators = Validators;

// ─── Exposed Utilities for Testing ───────────────────────────────────────────
/**
 * Pure score calculation — exposed for unit testing.
 * @param {object} state - User state object
 * @returns {number} Score 0-100
 */
function calculateScore(state) {
    if (!state) return 0;
    let score = 0;
    if (state.name) score += 10;
    if (state.age >= 18) score += 10;
    if (state.registered === 'yes') score += 30;
    else if (state.registered !== null && state.registered !== undefined) score += 10;
    if (state.votingMethod) score += 25;
    if (state.constituency) score += 25;
    return Math.min(100, score);
}
window.calculateScore = calculateScore;

/**
 * Finds a constituency by name or alias (case-insensitive, partial).
 * Returns the constituency data object or null if not found.
 * @param {string} input
 * @returns {object|null}
 */
function findConstituency(input) {
    if (!input || !input.trim() || !electionData) return null;
    const query = input.trim().toLowerCase();
    for (const [key, data] of Object.entries(electionData.constituencies)) {
        const nameMatch = data.name.toLowerCase().includes(query) || key.includes(query);
        const aliasMatch = (data.aliases || []).some(alias => alias.toLowerCase().includes(query) || query.includes(alias.toLowerCase()));
        if (nameMatch || aliasMatch) {
            return { key, ...data };
        }
    }
    return null;
}
window.findConstituency = findConstituency;

// Expose fallbackData so tests.js can use it before init() runs
window.fallbackData = fallbackData;
let electionData = null;
let userState = {
    name: '',
    age: null,
    registered: null,
    votingMethod: null,
    constituency: null,
    score: 0,
    currentStep: 'intro'
};

// DOM Elements
const appContent = document.getElementById('app-content');
const progressContainer = document.getElementById('progress-container');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');

// Initialization
async function init() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error("Failed to load data");
        const parsed = await response.json();
        // Safety: ensure required fields exist
        if (!parsed || !parsed.constituencies || !parsed.electionInfo) {
            throw new Error('Data file is missing required fields.');
        }
        electionData = parsed;
    } catch (error) {
        console.warn('Using fallback data:', error.message);
        electionData = fallbackData;
    }
    // Expose for tests
    window.electionData = electionData;
    logEvent('app_initialized', { constituencies: Object.keys(electionData.constituencies).length });
    loadState();
    renderCurrentStep();
}

// ─── State Persistence ───────────────────────────────────────────────────────

/**
 * Persist current user state to localStorage.
 * Skips save for users under 18 to respect privacy.
 */
function saveState() {
    if (userState.age && userState.age < 18) return;
    try {
        localStorage.setItem('electionUserState', JSON.stringify(userState));
    } catch (e) {
        console.warn('[saveState] Could not persist state:', e.message);
    }
    updateScore();
}

/**
 * Restore user state from localStorage if available.
 * Falls back gracefully if storage is unavailable or data is corrupt.
 */
function loadState() {
    try {
        const saved = localStorage.getItem('electionUserState');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && typeof parsed === 'object') {
                userState = parsed;
                if (userState.name) {
                    userState.currentStep = 'welcome_back';
                }
            }
        }
    } catch (e) {
        console.warn('[loadState] Could not restore state:', e.message);
        localStorage.removeItem('electionUserState');
    }
}

/**
 * Reset all user state and re-render the intro step.
 */
function clearState() {
    try {
        localStorage.removeItem('electionUserState');
    } catch (e) {
        console.warn('[clearState] Could not clear storage:', e.message);
    }
    userState = { name: '', age: null, registered: null, votingMethod: null, constituency: null, score: 0, currentStep: 'intro' };
    progressContainer.style.display = 'none';
    renderCurrentStep();
}

// Core Render Logic
function renderCurrentStep() {
    appContent.innerHTML = ''; // Clear current
    window.scrollTo({ top: 0, behavior: 'instant' }); // Always start from top
    
    switch (userState.currentStep) {
        case 'intro':
            renderIntro();
            break;
        case 'welcome_back':
            renderWelcomeBack();
            break;
        case 'age':
            renderAge();
            break;
        case 'underage':
            renderUnderage();
            break;
        case 'registration':
            renderRegistration();
            break;
        case 'registration_info':
            renderRegistrationInfo();
            break;
        case 'voting_method':
            renderVotingMethod();
            break;
        case 'constituency':
            renderConstituency();
            break;
        case 'dashboard':
            renderDashboard();
            break;
        default:
            renderIntro();
    }
}

function updateScore() {
    userState.score = calculateScore(userState);
    
    const stepsWithProgress = ['registration', 'registration_info', 'voting_method', 'constituency', 'dashboard', 'welcome_back'];
    if (stepsWithProgress.includes(userState.currentStep)) {
        progressContainer.style.display = 'block';
        progressFill.style.width = `${userState.score}%`;
        progressText.innerText = `${t('readiness')}: ${userState.score}%`;
        progressFill.setAttribute('aria-valuenow', userState.score);
        
        if (userState.score < 40) progressFill.style.backgroundColor = 'var(--danger-color)';
        else if (userState.score < 80) progressFill.style.backgroundColor = 'var(--accent-color)';
        else progressFill.style.backgroundColor = 'var(--secondary-color)';
    } else {
        progressContainer.style.display = 'none';
    }
}

// Step Renders
function renderIntro() {
    const card = createCard(t('introTitle'));
    card.innerHTML += `
        <p>${t('introDesc')}</p>
        <div class="input-group">
            <label for="userName">${t('labelName')}</label>
            <input type="text" id="userName" placeholder="${t('namePlaceholder')}" autocomplete="given-name"
                aria-label="${t('labelName')}" aria-required="true">
            <span class="field-error" id="nameError" role="alert" aria-live="polite"></span>
        </div>
        <button id="btnNext" aria-label="${t('btnContinue')}">${t('btnContinue')}</button>
    `;
    appContent.appendChild(card);

    const nameInput = document.getElementById('userName');
    const nameError = document.getElementById('nameError');
    nameInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') document.getElementById('btnNext').click(); });

    document.getElementById('btnNext').addEventListener('click', () => {
        const result = Validators.validateName(nameInput.value);
        if (!result.valid) {
            nameError.textContent = result.message;
            nameInput.setAttribute('aria-invalid', 'true');
            nameInput.focus();
            return;
        }
        nameError.textContent = '';
        nameInput.removeAttribute('aria-invalid');
        userState.name = sanitizeText(nameInput.value);
        userState.currentStep = 'age';
        logEvent('step_name_complete', { nameLength: userState.name.length });
        saveState();
        renderCurrentStep();
    });
}

function renderWelcomeBack() {
    const card = createCard(t('welcomeBackTitle', { name: userState.name }));
    card.innerHTML += `
        <p>${t('welcomeBackDesc')}</p>
        <div class="btn-group">
            <button id="btnContinue">${t('btnContinueJourney')}</button>
            <button id="btnRestart" class="outline">${t('btnStartOver')}</button>
        </div>
    `;
    appContent.appendChild(card);
    updateScore();
    document.getElementById('btnContinue').addEventListener('click', () => {
        if(!userState.age) userState.currentStep = 'age';
        else if(userState.registered === null) userState.currentStep = 'registration';
        else if(userState.votingMethod === null) userState.currentStep = 'voting_method';
        else if(userState.constituency === null) userState.currentStep = 'constituency';
        else userState.currentStep = 'dashboard';
        renderCurrentStep();
    });
    document.getElementById('btnRestart').addEventListener('click', clearState);
}

function renderAge() {
    const card = createCard(t('ageTitle', { name: userState.name }));
    card.innerHTML += `
        <p>${t('ageDesc')}</p>
        <div class="input-group">
            <label for="userAge">${t('labelAge')}</label>
            <input type="number" id="userAge" placeholder="${t('agePlaceholder')}" min="1" max="100"
                aria-label="${t('labelAge')}" aria-required="true">
            <span class="field-error" id="ageError" role="alert" aria-live="polite"></span>
        </div>
        <button id="btnNext" aria-label="${t('btnContinue')}">${t('btnContinue')}</button>
    `;
    appContent.appendChild(card);

    const ageInput = document.getElementById('userAge');
    const ageError = document.getElementById('ageError');
    ageInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') document.getElementById('btnNext').click(); });

    document.getElementById('btnNext').addEventListener('click', () => {
        const rawVal = ageInput.value;
        const result = Validators.validateAge(rawVal === '' ? NaN : Number(rawVal));
        if (!result.valid) {
            ageError.textContent = result.message;
            ageInput.setAttribute('aria-invalid', 'true');
            ageInput.focus();
            return;
        }
        ageError.textContent = '';
        ageInput.removeAttribute('aria-invalid');
        const age = parseInt(rawVal, 10);
        userState.age = age;
        if (age < 18) {
            userState.currentStep = 'underage';
        } else {
            userState.currentStep = 'registration';
            saveState();
        }
        renderCurrentStep();
    });
}

function renderUnderage() {
    const card = createCard('Election Education');
    
    let html = `
        <p><strong>${userState.name}</strong>, you are not eligible to vote yet (minimum age is 18).</p>
        <p>However, it's great that you are learning! Here is a simple guide to understanding the election process.</p>
        
        <h3>What is an MLA?</h3>
        <p>${electionData.education.whatIsMLA}</p>
        
        <h3>Role of an MLA</h3>
        <p>${electionData.education.roleOfMLA}</p>
        
        <h3 style="margin-top: 1.5rem;">How Elections Work (The Steps)</h3>
        <ul style="margin-left: 1.5rem; margin-top: 0.5rem; color: var(--text-color);">
            ${electionData.education.steps.map(step => `<li>${step}</li>`).join('')}
        </ul>
        
        <h3 style="margin-top: 1.5rem;">Example Timeline</h3>
        <p>Here is how a timeline looks for a typical state election:</p>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 3px solid var(--primary-color);">
            <p><strong>Voter Registration Deadline:</strong> ${formatDate(electionData.electionInfo.timeline.registrationDeadline)}</p>
            <p><strong>Election Day (Voting):</strong> ${formatDate(electionData.electionInfo.timeline.electionDay)}</p>
        </div>
        
        <button id="btnRestart" class="outline" style="margin-top:1.5rem;">Start Over</button>
    `;
    
    card.innerHTML += html;
    appContent.appendChild(card);
    
    document.getElementById('btnRestart').addEventListener('click', clearState);
}

function renderRegistration() {
    updateScore();
    const card = createCard(t('registrationTitle', { name: userState.name }));
    card.innerHTML += `
        <p>${t('registrationDesc')}</p>
        <div class="btn-group">
            <button id="btnYes">${t('btnYes')}</button>
            <button id="btnNo" class="secondary">${t('btnNo')}</button>
            <button id="btnNotSure" class="outline">${t('btnNotSure')}</button>
        </div>
    `;
    appContent.appendChild(card);

    document.getElementById('btnYes').addEventListener('click', () => {
        userState.registered = 'yes'; userState.currentStep = 'voting_method';
        saveState(); renderCurrentStep();
    });
    document.getElementById('btnNo').addEventListener('click', () => {
        userState.registered = 'no'; userState.currentStep = 'registration_info';
        saveState(); renderCurrentStep();
    });
    document.getElementById('btnNotSure').addEventListener('click', () => {
        userState.registered = 'notsure'; userState.currentStep = 'registration_info';
        saveState(); renderCurrentStep();
    });
}

function renderRegistrationInfo() {
    const card = createCard('Registration Information');
    
    // Calculate urgency using real current date
    const deadline = new Date(electionData.electionInfo.timeline.registrationDeadline);
    const today = new Date(); // Dynamic — always uses real current date
    const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
    
    let urgencyClass = 'urgency-green';
    let warningHtml = '';
    if (daysLeft <= 5) {
        urgencyClass = 'urgency-red';
        warningHtml = `<p class="urgency-red">⚠️ Registration deadline is approaching soon.</p>`;
    } else if (daysLeft <= 7) {
        urgencyClass = 'urgency-yellow';
    }
    
    let text = userState.registered === 'notsure' 
        ? `<p>If you're not sure, you can check your status online at the NVSP portal.</p>`
        : `<p>You need to register to vote before the deadline!</p>`;
        
    card.innerHTML += `
        ${text}
        <p class="${urgencyClass}">Registration Deadline:<br>${formatDate(deadline)} (${daysLeft} days left)</p>
        ${warningHtml}
        
        <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--primary-color);">Steps:</h4>
        <ol class="step-list" style="margin-left: 0; padding-left: 0;">
            <li>Visit the National Voters' Services Portal (NVSP)</li>
            <li>Fill Form 6 for new registration</li>
            <li>Upload:
                <ul style="margin-left: 1.5rem; margin-top: 0.5rem; list-style-type: disc;">
                    <li>Address proof</li>
                    <li>Age proof</li>
                </ul>
            </li>
            <li>Submit the form</li>
        </ol>
        
        <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="http://www.nvsp.in" target="_blank" style="text-decoration: none;">
                <button class="secondary">Go to NVSP Portal</button>
            </a>
            <button id="btnNext" class="outline">I understand, continue</button>
        </div>
    `;
    appContent.appendChild(card);
    
    document.getElementById('btnNext').addEventListener('click', () => {
        userState.currentStep = 'voting_method';
        saveState();
        renderCurrentStep();
    });
}

function renderVotingMethod() {
    updateScore();
    const card = createCard(t('votingMethodTitle'));
    card.innerHTML += `
        <p>${t('votingMethodDesc', { name: escapeHTML(userState.name) })}</p>
        <div class="btn-group" style="flex-direction: column;" role="group" aria-label="Voting method options">
            <button class="method-btn" data-method="in-person" aria-label="${t('inPerson')}">
                <strong>${t('inPerson')}</strong>
                <span class="helper-text">${t('inPersonDesc')}</span>
            </button>
            <button class="method-btn" data-method="mail" aria-label="${t('postalBallot')}">
                <strong>${t('postalBallot')}</strong>
                <span class="helper-text">${t('postalBallotDesc')}</span>
            </button>
        </div>
    `;
    appContent.appendChild(card);

    document.querySelectorAll('.method-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const el = e.target.closest('button');
            if (!el) return;
            userState.votingMethod = el.getAttribute('data-method');
            userState.currentStep = 'constituency';
            saveState();
            renderCurrentStep();
        });
    });
}

function renderConstituency() {
    updateScore();
    const card = createCard(t('constituencyTitle'));
    card.innerHTML += `
        <p>${t('constituencyDesc', { name: escapeHTML(userState.name) })}</p>
        <p style="font-size: 0.9em; color: var(--text-light);">${t('constituencyHint')}</p>
        <div class="input-group" style="position: relative;">
            <input type="text" id="constituencyInput" placeholder="Enter constituency name" autocomplete="off">
            <div id="autocompleteList" class="autocomplete-items"></div>
        </div>
        <button id="btnSearch" aria-label="${t('btnSearch')}">${t('btnSearch')}</button>
        <div id="searchResults" style="margin-top: 1rem;"></div>
    `;
    appContent.appendChild(card);
    
    const input = document.getElementById('constituencyInput');
    const autocompleteList = document.getElementById('autocompleteList');

    // Debounced autocomplete — avoids excessive DOM updates on every keystroke
    const handleAutocomplete = debounce(function() {
        const val = input.value.toLowerCase();
        autocompleteList.innerHTML = '';
        if (!val) { return; }

        for (const [key, data] of Object.entries(electionData.constituencies)) {
            let match = false;
            let displayStr = data.name;
            if (data.name.toLowerCase().startsWith(val)) {
                match = true;
            } else if (data.aliases) {
                for (let alias of data.aliases) {
                    if (alias.toLowerCase().startsWith(val)) {
                        match = true;
                        displayStr = data.name + ' (' + alias + ')';
                        break;
                    }
                }
            }
            if (match) {
                const item = document.createElement('div');
                item.textContent = displayStr;
                item.setAttribute('role', 'option');
                item.addEventListener('click', function () {
                    input.value = data.name;
                    autocompleteList.innerHTML = '';
                });
                autocompleteList.appendChild(item);
            }
        }
    }, 250);

    input.addEventListener('input', handleAutocomplete);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') document.getElementById('btnSearch').click(); });

    // Autocomplete is handled by the debounced handler above.

    // Close autocomplete if clicked outside
    document.addEventListener('click', function (e) {
        if (e.target !== input && e.target !== autocompleteList) {
            autocompleteList.innerHTML = '';
        }
    });
    
    document.getElementById('btnSearch').addEventListener('click', () => {
        const rawInput = document.getElementById('constituencyInput').value.trim();
        const resultsContainer = document.getElementById('searchResults');

        // Validate input
        const inputCheck = Validators.validateConstituencyInput(rawInput);
        if (!inputCheck.valid) {
            resultsContainer.innerHTML = `<p class="field-error" role="alert">${inputCheck.message}</p>`;
            return;
        }

        const match = findConstituency(rawInput);

        if (match) {
            const { key, ...data } = match;
            userState.constituency = key;

            const candidatesHtml = (data.candidates || []).map(c => `
                <div class="candidate-card">
                    <h4>${c.name || 'Unknown Candidate'}</h4>
                    <p>Focus: ${c.focus || 'Not specified'}</p>
                </div>
            `).join('');

            resultsContainer.innerHTML = `
                <h3>Found: ${data.name}</h3>
                <div class="candidate-grid">
                    ${candidatesHtml}
                </div>
                <div style="margin-top: 1.5rem; background: #f0f7ff; padding: 1rem; border-radius: 8px;">
                    <h4>How to Choose Wisely</h4>
                    <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                        <li>Review their past work</li>
                        <li>Understand their policies</li>
                        <li>Check their experience</li>
                        <li>Consider public opinion</li>
                    </ul>
                    <p style="margin-top: 0.5rem; font-style: italic; font-size: 0.9em;">This information is provided to help you make your own informed decision.</p>
                </div>
                <button id="btnFinish" style="margin-top: 1rem;">${t('btnViewDashboard')}</button>
            `;
            saveState();
            document.getElementById('btnFinish').addEventListener('click', () => {
                userState.currentStep = 'dashboard';
                saveState();
                renderCurrentStep();
            });
        } else {
            // No match — show clear message, do NOT auto-redirect
            resultsContainer.innerHTML = `
                <div class="no-match-msg" role="alert">
                    <p>⚠️ ${t('noMatchTitle')}: <strong>"${escapeHTML(rawInput)}"</strong>.</p>
                    <p>${t('noMatchSuggestions')}.</p>
                    <p style="font-size:0.9em; color: var(--text-light);">${t('noMatchTip')}</p>
                </div>
            `;
        }
    });
}

function renderDashboard() {
    updateScore();
    appContent.innerHTML = ''; // Clear container
    
    // Timeline Card
    const timelineCard = createCard(t('timelineTitle'));
    let timelineHtml = `<p class="badge warning" style="margin-bottom: 1rem;">${electionData.electionInfo.note}</p>`;
    
    const dates = {
        reg: formatDate(electionData.electionInfo.timeline.registrationDeadline),
        election: formatDate(electionData.electionInfo.timeline.electionDay)
    };

    timelineHtml += `
        <div class="timeline-item">
            <strong>Registration Deadline:</strong><br>${dates.reg}
        </div>
        <div class="timeline-item" style="border-left-color: transparent;">
            <strong>Election Day:</strong><br>${dates.election}
        </div>
    `;
    
    // Add to Calendar Button — dates derived dynamically from election data
    const calEventTitle   = encodeURIComponent('Election Day - Vote for Karnataka!');
    const calEventDetails = encodeURIComponent("Don't forget to vote. Check nvsp.in for your polling booth.");
    const electionDayRaw  = electionData.electionInfo.timeline.electionDay;
    const calDate         = new Date(electionDayRaw);
    const pad = (n) => String(n).padStart(2, '0');
    const calDateStr = `${calDate.getUTCFullYear()}${pad(calDate.getUTCMonth() + 1)}${pad(calDate.getUTCDate())}`;
    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calEventTitle}&dates=${calDateStr}T000000Z/${calDateStr}T235959Z&details=${calEventDetails}`;
    
    timelineHtml += `
        <a href="${calUrl}" target="_blank" style="text-decoration: none;">
            <button class="secondary">${t('addToCalendar')}</button>
        </a>
    `;
    timelineCard.innerHTML += timelineHtml;
    appContent.appendChild(timelineCard);

    // Checklist Card
    const checklistCard = createCard(t('checklistTitle'));
    checklistCard.innerHTML += `
        <p>${escapeHTML(userState.name)}, here is your current status:</p>
        <ul class="checklist">
            <li class="${userState.registered === 'yes' ? 'done' : 'pending'}">${t('statusRegistered')}: ${userState.registered === 'yes' ? t('regYes') : t('regNo')}</li>
            <li class="${userState.votingMethod ? 'done' : 'pending'}">${t('votingMethodLabel')}: ${userState.votingMethod || t('notSelected')}</li>
            <li class="${userState.constituency ? 'done' : 'pending'}">${t('constituencyLabel')}: ${userState.constituency ? electionData.constituencies[userState.constituency].name : t('notSelected')}</li>
        </ul>
    `;
    appContent.appendChild(checklistCard);

    // Next Steps & Location
    if (userState.constituency) {
        const cData = electionData.constituencies[userState.constituency];
        const locCard = createCard(t('pollingTitle'));
        
        let methodText = userState.votingMethod === 'in-person' ? t('inPersonPlan') : t('postalPlan');

        locCard.innerHTML += `
            <p><strong>${t('nextStepMsg', { name: escapeHTML(userState.name) })}</strong></p>
            <p>${methodText}</p>
            <p>Your designated polling location is: <strong>${cData.pollingLocation}</strong></p>
            <div class="map-container">
                <iframe 
                    loading="lazy" 
                    allowfullscreen 
                    style="border:0;"
                    width="100%"
                    height="250"
                    src="https://maps.google.com/maps?q=${encodeURIComponent(cData.pollingLocation + ', Karnataka, India')}&output=embed">
                </iframe>
            </div>
        `;
        appContent.appendChild(locCard);
    }

    // ── Google Services Integration ──────────────────────────────
    saveUserData({
        name:         userState.name,
        score:        userState.score,
        constituency: userState.constituency,
        votingMethod: userState.votingMethod,
        registered:   userState.registered
    });

    // Render AI assistant section
    renderAISection();

    // Start Over — always last on the dashboard
    const resetCard = document.createElement('div');
    resetCard.style.textAlign = 'center';
    resetCard.style.marginTop = '2rem';
    resetCard.style.marginBottom = '1rem';
    resetCard.innerHTML = `<button id="btnFinalReset" class="outline" style="max-width:220px;">${t('btnFinalReset')}</button>`;
    appContent.appendChild(resetCard);
    document.getElementById('btnFinalReset').addEventListener('click', clearState);

    logEvent('dashboard_viewed', { score: userState.score, constituency: userState.constituency });
}

// ─── Gemini AI Section ───────────────────────────────────────────────────────
function renderAISection() {
    const card = createCard(t('aiTitle'));
    card.innerHTML += `
        <p>${t('aiDesc', { name: escapeHTML(userState.name) })}</p>
        <p style="font-size:0.88em;color:var(--text-light);">${t('aiHint')}</p>
        <div class="input-group">
            <label for="aiQuestion">${t('labelQuestion')}</label>
            <input type="text" id="aiQuestion" placeholder="${t('questionPlaceholder')}"
                aria-label="${t('labelQuestion')}" aria-required="true" maxlength="300">
            <span class="field-error" id="aiError" role="alert" aria-live="polite"></span>
        </div>
        <button id="btnAskAI" aria-label="${t('btnAskAI')}">
            <i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>&nbsp;${t('btnAskAI')}
        </button>
        <div id="aiResponse" style="margin-top:1.5rem;" aria-live="polite" aria-label="AI response area"></div>
    `;
    appContent.appendChild(card);

    const qInput  = document.getElementById('aiQuestion');
    const aiError = document.getElementById('aiError');
    const aiResp  = document.getElementById('aiResponse');
    const askBtn  = document.getElementById('btnAskAI');

    qInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') askBtn.click(); });

    askBtn.addEventListener('click', async () => {
        const question = qInput.value.trim();
        if (!question) {
            aiError.textContent = t('errAIEmpty');
            qInput.setAttribute('aria-invalid', 'true');
            qInput.focus();
            return;
        }
        aiError.textContent = '';
        qInput.removeAttribute('aria-invalid');

        askBtn.disabled = true;
        askBtn.setAttribute('aria-busy', 'true');
        aiResp.innerHTML = createSpinner('Asking Gemini AI...');
        logEvent('gemini_query', { question: question.substring(0, 60) });

        try {
            // getElectionAnswer: tries Gemini first, falls back to FAQ cache
            const result = await getElectionAnswer(question);

            // Convert basic markdown (**bold**, bullet •) to safe HTML
            const formatted = escapeHTML(result.text)
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/^(•|\-)\s+/gm, '&#8226; ')
                .replace(/\n\n/g, '</p><p>')
                .replace(/\n/g, '<br>');

            const isGemini = result.source === 'gemini';
            const badge = isGemini
                ? `<span class="ai-source-badge gemini-badge"><i class="fa-solid fa-robot" aria-hidden="true"></i> Gemini AI</span>`
                : `<span class="ai-source-badge faq-badge"><i class="fa-solid fa-book" aria-hidden="true"></i> Election FAQ</span>`;

            aiResp.innerHTML = `
                <div class="ai-response-box">
                    <div class="ai-response-header">
                        ${badge}
                        <strong>${isGemini ? 'AI Response' : 'Quick Answer'}</strong>
                    </div>
                    <div class="ai-response-text"><p>${formatted}</p></div>
                    <p class="ai-disclaimer">⚠️ Verify important details with <a href="https://www.nvsp.in" target="_blank" rel="noopener">NVSP</a> or <a href="https://eci.gov.in" target="_blank" rel="noopener">ECI</a>.</p>
                </div>`;
            logEvent(isGemini ? 'gemini_success' : 'faq_answer_shown');
        } catch (err) {
            const isRateLimit = err.message && err.message.toLowerCase().includes('rate limit');
            aiResp.innerHTML = `
                <div class="no-match-msg" role="alert">
                    <p>⚠️ ${escapeHTML(err.message || 'Could not get a response.')}</p>
                    <p style="font-size:0.9em;">${isRateLimit
                        ? 'Please wait 30–60 seconds and try again, or try one of: "What does an MLA do?", "What is NOTA?", "How to vote?"'
                        : 'Check your API key in <code>gemini.js</code> or try again later.'
                    }</p>
                </div>`;
            logEvent('gemini_error', { error: err.message });
        } finally {
            askBtn.disabled = false;
            askBtn.removeAttribute('aria-busy');
        }
    });
}

// ─── Helper Functions ────────────────────────────────────────────────────────

/**
 * Format an ISO date string into a human-readable Indian locale date.
 * @param {string|Date|null|undefined} dateString - ISO date or Date object
 * @returns {string} Formatted date (e.g. "25 May 2026") or a fallback message
 */
function formatDate(dateString) {
    if (dateString === null || dateString === undefined) return 'Date not available';
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return 'Invalid date';
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
// Expose for unit testing
window.formatDate   = formatDate;
window.electionData = null; // will be set after init()

function createCard(title) {
    const card = document.createElement('div');
    card.className = 'card';
    if (title) {
        card.innerHTML = `<h2>${title}</h2>`;
    }
    return card;
}

function showError(msg) {
    appContent.innerHTML = `
        <div class="card" style="border-left: 4px solid var(--danger-color);">
            <h2 style="color: var(--danger-color);">Oops!</h2>
            <p>${msg}</p>
            <p>Something went wrong, please try again</p>
            <button onclick="location.reload()">Reload Page</button>
        </div>
    `;
}

// Start
document.addEventListener('DOMContentLoaded', init);
