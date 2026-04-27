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

// State Management
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
        electionData = await response.json();
    } catch (error) {
        console.warn("Using fallback data. If you are opening this file locally, this is expected.");
        electionData = fallbackData;
    }
    loadState();
    renderCurrentStep();
}

// State Persistence
function saveState() {
    // Don't save if under 18 (as per privacy/flow)
    if (userState.age && userState.age < 18) return;
    localStorage.setItem('electionUserState', JSON.stringify(userState));
    updateScore();
}

function loadState() {
    const saved = localStorage.getItem('electionUserState');
    if (saved) {
        userState = JSON.parse(saved);
        if(userState.name) {
            userState.currentStep = 'welcome_back';
        }
    }
}

function clearState() {
    localStorage.removeItem('electionUserState');
    userState = { name: '', age: null, registered: null, votingMethod: null, constituency: null, score: 0, currentStep: 'intro' };
    progressContainer.style.display = 'none';
    renderCurrentStep();
}

// Core Render Logic
function renderCurrentStep() {
    appContent.innerHTML = ''; // Clear current
    
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
    let score = 0;
    if (userState.name) score += 10;
    if (userState.age >= 18) score += 10;
    if (userState.registered === 'yes') score += 30;
    else if (userState.registered !== null) score += 10;
    if (userState.votingMethod) score += 25;
    if (userState.constituency) score += 25;
    
    userState.score = Math.min(100, score);
    
    if (userState.currentStep !== 'intro' && userState.currentStep !== 'age' && userState.currentStep !== 'underage') {
        progressContainer.style.display = 'block';
        progressFill.style.width = `${userState.score}%`;
        progressText.innerText = `Readiness: ${userState.score}%`;
        
        if (userState.score < 40) progressFill.style.backgroundColor = 'var(--danger-color)';
        else if (userState.score < 80) progressFill.style.backgroundColor = 'var(--accent-color)';
        else progressFill.style.backgroundColor = 'var(--secondary-color)';
    } else {
        progressContainer.style.display = 'none';
    }
}

// Step Renders
function renderIntro() {
    const card = createCard('Welcome to Your Election Guide');
    card.innerHTML += `
        <p>This assistant will guide you step-by-step through the election process. Let's start with your name.</p>
        <div class="input-group">
            <label for="userName">Your First Name</label>
            <input type="text" id="userName" placeholder="e.g., Ramesh" autocomplete="given-name">
        </div>
        <button id="btnNext" aria-label="Next step">Continue</button>
    `;
    appContent.appendChild(card);
    
    document.getElementById('btnNext').addEventListener('click', () => {
        const name = document.getElementById('userName').value.trim();
        if (name) {
            userState.name = name;
            userState.currentStep = 'age';
            saveState();
            renderCurrentStep();
        } else {
            alert("Please enter your name to continue.");
        }
    });
}

function renderWelcomeBack() {
    const card = createCard(`Welcome back, ${userState.name}!`);
    card.innerHTML += `
        <p>Let's continue your election preparation journey.</p>
        <div class="btn-group">
            <button id="btnContinue">Continue Journey</button>
            <button id="btnRestart" class="outline">Start Over</button>
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
    const card = createCard(`Nice to meet you, ${userState.name}!`);
    card.innerHTML += `
        <p>To give you the right information, please tell us your age.</p>
        <div class="input-group">
            <label for="userAge">Your Age</label>
            <input type="number" id="userAge" placeholder="e.g., 25" min="1" max="120">
        </div>
        <button id="btnNext">Continue</button>
    `;
    appContent.appendChild(card);
    
    document.getElementById('btnNext').addEventListener('click', () => {
        const age = parseInt(document.getElementById('userAge').value, 10);
        if (age && age > 0) {
            userState.age = age;
            if (age < 18) {
                userState.currentStep = 'underage';
            } else {
                userState.currentStep = 'registration';
                saveState();
            }
            renderCurrentStep();
        } else {
            alert("Please enter a valid age.");
        }
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
    const card = createCard(`${userState.name}, your next step is Voter Registration`);
    card.innerHTML += `
        <p>Are you currently registered to vote at your current address?</p>
        <div class="btn-group">
            <button id="btnYes">Yes, I am registered</button>
            <button id="btnNo" class="secondary">No, I need to register</button>
            <button id="btnNotSure" class="outline">I'm not sure</button>
        </div>
    `;
    appContent.appendChild(card);
    
    document.getElementById('btnYes').addEventListener('click', () => {
        userState.registered = 'yes';
        userState.currentStep = 'voting_method';
        saveState();
        renderCurrentStep();
    });
    
    document.getElementById('btnNo').addEventListener('click', () => {
        userState.registered = 'no';
        userState.currentStep = 'registration_info';
        saveState();
        renderCurrentStep();
    });
    
    document.getElementById('btnNotSure').addEventListener('click', () => {
        userState.registered = 'notsure';
        userState.currentStep = 'registration_info';
        saveState();
        renderCurrentStep();
    });
}

function renderRegistrationInfo() {
    const card = createCard('Registration Information');
    
    // Calculate urgency
    const deadline = new Date(electionData.electionInfo.timeline.registrationDeadline);
    const today = new Date('2026-05-05'); // Simulated current date for demo purposes
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
    const card = createCard('How do you plan to vote?');
    card.innerHTML += `
        <p>${userState.name}, select your preferred voting method so we can guide you.</p>
        <div class="btn-group" style="flex-direction: column;">
            <button class="method-btn" data-method="in-person">
                <strong>In-Person Voting</strong>
            </button>
            <button class="method-btn" data-method="mail">
                <strong>Postal Ballot</strong>
                <span class="helper-text">Postal ballot is available only for specific eligible categories.</span>
            </button>
        </div>
    `;
    appContent.appendChild(card);
    
    document.querySelectorAll('.method-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const el = e.target.closest('button');
            userState.votingMethod = el.getAttribute('data-method');
            userState.currentStep = 'constituency';
            saveState();
            renderCurrentStep();
        });
    });
}

function renderConstituency() {
    updateScore();
    const card = createCard('Find Your Constituency');
    card.innerHTML += `
        <p>${userState.name}, enter your city or constituency name to see the candidates.</p>
        <p style="font-size: 0.9em; color: var(--text-light);">Try: Shivamogga, Bengaluru, or Mysuru</p>
        <div class="input-group" style="position: relative;">
            <input type="text" id="constituencyInput" placeholder="Enter constituency name" autocomplete="off">
            <div id="autocompleteList" class="autocomplete-items"></div>
        </div>
        <button id="btnSearch">Search</button>
        <div id="searchResults" style="margin-top: 1rem;"></div>
    `;
    appContent.appendChild(card);
    
    const input = document.getElementById('constituencyInput');
    const autocompleteList = document.getElementById('autocompleteList');

    input.addEventListener('input', function() {
        const val = this.value.toLowerCase();
        autocompleteList.innerHTML = '';
        if (!val) { return false; }
        
        for (const [key, data] of Object.entries(electionData.constituencies)) {
            // Check if any alias or name starts with the input value
            let match = false;
            let displayStr = data.name;

            if (data.name.toLowerCase().startsWith(val)) {
                 match = true;
            } else if (data.aliases) {
                 for(let alias of data.aliases) {
                     if(alias.toLowerCase().startsWith(val)) {
                         match = true;
                         displayStr = data.name + " (" + alias + ")";
                         break;
                     }
                 }
            }

            if (match) {
                const item = document.createElement('div');
                item.innerHTML = `<strong>${displayStr.substr(0, val.length)}</strong>${displayStr.substr(val.length)}`;
                item.addEventListener('click', function() {
                    input.value = data.name;
                    autocompleteList.innerHTML = '';
                });
                autocompleteList.appendChild(item);
            }
        }
    });

    // Close autocomplete if clicked outside
    document.addEventListener('click', function (e) {
        if (e.target !== input && e.target !== autocompleteList) {
            autocompleteList.innerHTML = '';
        }
    });
    
    document.getElementById('btnSearch').addEventListener('click', () => {
        const input = document.getElementById('constituencyInput').value.trim().toLowerCase();
        const resultsContainer = document.getElementById('searchResults');
        
        if (!input) {
            resultsContainer.innerHTML = '<p class="urgency-red">Please enter a location.</p>';
            return;
        }
        
        let match = null;
        let matchKey = null;
        
        // Alias and partial matching
        for (const [key, data] of Object.entries(electionData.constituencies)) {
            const isMatch = (data.aliases || []).some(alias => alias.includes(input) || input.includes(alias)) || key.includes(input);
            if (isMatch) {
                match = data;
                matchKey = key;
                break;
            }
        }
        
        if (match) {
            userState.constituency = matchKey;
            
            let candidatesHtml = match.candidates.map(c => `
                <div class="candidate-card">
                    <h4>${c.name}</h4>
                    <p>Focus: ${c.focus}</p>
                </div>
            `).join('');
            
            resultsContainer.innerHTML = `
                <h3>Found: ${match.name}</h3>
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
                <button id="btnFinish" style="margin-top: 1rem;">View My Dashboard</button>
            `;
            
            document.getElementById('btnFinish').addEventListener('click', () => {
                userState.currentStep = 'dashboard';
                saveState();
                renderCurrentStep();
            });
        } else {
            // Show closest / fallback
            resultsContainer.innerHTML = `
                <p>No exact match found for "${input}". Showing default: Bengaluru Urban</p>
            `;
            userState.constituency = 'bengaluru urban';
            setTimeout(() => {
                userState.currentStep = 'dashboard';
                saveState();
                renderCurrentStep();
            }, 2000);
        }
    });
}

function renderDashboard() {
    updateScore();
    appContent.innerHTML = ''; // Clear container
    
    // Timeline Card
    const timelineCard = createCard('Election Timeline');
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
    
    // Add to Calendar Button (simulated URL)
    const eventTitle = encodeURIComponent("Election Day!");
    const eventDetails = encodeURIComponent("Don't forget to vote.");
    const eventDate = "20260525T000000Z/20260525T235959Z";
    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${eventDate}&details=${eventDetails}`;
    
    timelineHtml += `
        <a href="${calUrl}" target="_blank" style="text-decoration: none;">
            <button class="secondary">Add to Google Calendar</button>
        </a>
    `;
    timelineCard.innerHTML += timelineHtml;
    appContent.appendChild(timelineCard);

    // Checklist Card
    const checklistCard = createCard('Your Readiness Checklist');
    checklistCard.innerHTML += `
        <p>${userState.name}, here is your current status:</p>
        <ul class="checklist">
            <li class="${userState.registered === 'yes' ? 'done' : 'pending'}">Registration Status: ${userState.registered === 'yes' ? 'Registered' : 'Needs Action'}</li>
            <li class="${userState.votingMethod ? 'done' : 'pending'}">Voting Method: ${userState.votingMethod || 'Not selected'}</li>
            <li class="${userState.constituency ? 'done' : 'pending'}">Constituency: ${userState.constituency ? electionData.constituencies[userState.constituency].name : 'Not selected'}</li>
        </ul>
    `;
    appContent.appendChild(checklistCard);

    // Next Steps & Location
    if (userState.constituency) {
        const cData = electionData.constituencies[userState.constituency];
        const locCard = createCard('Polling Location');
        
        let methodText = "";
        if(userState.votingMethod === 'in-person') methodText = "You plan to vote in person.";
        else methodText = "You plan to vote via postal ballot.";

        locCard.innerHTML += `
            <p><strong>${userState.name}, your next step:</strong> Prepare your Voter ID for election day.</p>
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
    
    // Start Over
    const resetCard = document.createElement('div');
    resetCard.style.textAlign = 'center';
    resetCard.style.marginTop = '2rem';
    resetCard.innerHTML = `<button id="btnFinalReset" class="outline">Start Over</button>`;
    appContent.appendChild(resetCard);
    document.getElementById('btnFinalReset').addEventListener('click', clearState);
}

// Helpers
function formatDate(dateString) {
    const d = new Date(dateString);
    if (isNaN(d)) return dateString;
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

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
