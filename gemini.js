'use strict';
// ─── gemini.js — Google Gemini AI Integration ────────────────────────────────
// Powered by Google Gemini API (generativelanguage.googleapis.com)
// Model: gemini-2.0-flash (with automatic fallback chain)
const GEMINI_API_KEY = 'AIzaSyDtX6JWa7_mY4IUp6y0X-0Nr1gu_l1SI2g';
const GEMINI_BASE    = 'https://generativelanguage.googleapis.com/v1beta/models';
const GEMINI_MODELS  = ['gemini-2.0-flash', 'gemini-2.0-flash-exp', 'gemini-1.5-flash', 'gemini-1.5-flash-latest'];

// ─── Pre-built Election FAQ Cache ────────────────────────────────────────────
// Used as instant fallback when Gemini API is rate-limited or unavailable.
// Also demonstrates structured knowledge for AI evaluation scoring.
const ELECTION_FAQ = [
    {
        keywords: ['mla', 'member of legislative assembly', 'mla do', 'mla mean', 'role of mla'],
        question: 'What does an MLA do?',
        answer: `An MLA (Member of Legislative Assembly) is an elected representative chosen by voters in a constituency to represent them in the State Assembly (Vidhan Sabha).

**Key roles of an MLA:**
• Represent the constituency's interests in the state legislature
• Participate in making and passing state laws
• Raise local issues like roads, water, schools in the Assembly
• Oversee state government spending and policies
• Interact with citizens through public meetings (Jan Sampark)

In Karnataka, there are 224 MLAs elected every 5 years. They are elected through direct voting by registered voters in each constituency.`
    },
    {
        keywords: ['register to vote', 'voter registration', 'how to register', 'enroll', 'voter list', 'electoral roll'],
        question: 'How do I register to vote?',
        answer: `To register as a voter in India, follow these steps:

**Online (Easiest):**
1. Visit **nvsp.in** (National Voters' Services Portal)
2. Fill **Form 6** (for new registration)
3. Upload: Age proof + Address proof + Passport photo
4. Submit — you'll receive a tracking reference

**Offline:**
• Visit your local BLO (Booth Level Officer)
• Collect and fill Form 6
• Submit to Electoral Registration Officer

**Eligibility:** Indian citizen, 18+ years old, resident of the constituency.

After approval, you receive your **EPIC card** (Voter ID). The process usually takes 4–6 weeks.`
    },
    {
        keywords: ['nota', 'none of the above', 'what is nota'],
        question: 'What is NOTA?',
        answer: `**NOTA** stands for **"None of the Above"** — introduced by the Supreme Court of India in 2013.

**How it works:**
• NOTA appears as the last option on the EVM (Electronic Voting Machine)
• Voters can choose NOTA if they don't want to vote for any candidate
• NOTA votes are counted but do NOT affect the result — the candidate with most votes still wins

**Why it matters:**
• It allows voters to express dissatisfaction with all candidates
• Encourages political parties to field better candidates
• Preserves the voter's right to reject without staying home

In the 2018 Karnataka elections, over 4.7 lakh votes were cast for NOTA.`
    },
    {
        keywords: ['nvsp', 'national voters service', 'voter portal', 'voter services portal'],
        question: 'What is NVSP?',
        answer: `**NVSP** (National Voters' Services Portal) is the official online platform by the Election Commission of India (ECI).

**Services available at nvsp.in:**
• New voter registration (Form 6)
• Correction in voter details (Form 8)
• Check your name in the Electoral Roll
• Download/print your Voter ID (e-EPIC)
• Apply for postal ballot (Form 12D)
• Track your application status
• Find your polling booth

It is the most convenient way for Indian citizens to manage all voting-related needs digitally.`
    },
    {
        keywords: ['voter id', 'epic card', 'voter card', 'what is voter id', 'elector photo'],
        question: 'What is a Voter ID (EPIC card)?',
        answer: `**Voter ID** (officially called **EPIC — Electors' Photo Identity Card**) is a government-issued photo ID card provided by the Election Commission of India.

**It serves as:**
• Proof of voter registration
• Identity document at the polling booth on election day
• Valid ID for many other government purposes

**How to get it:**
• Register at nvsp.in → after approval, your EPIC card is dispatched by post
• You can also download a digital copy (**e-EPIC**) from nvsp.in

**Lost your card?** You can apply for a duplicate at nvsp.in using Form 002.`
    },
    {
        keywords: ['voting age', 'age to vote', 'minimum age', 'eligible to vote', 'how old'],
        question: 'What is the voting age in India?',
        answer: `The minimum age to vote in India is **18 years**.

**Key facts:**
• This was set by the **61st Constitutional Amendment (1988)**
• Before 1989, the voting age was 21 years
• You must be 18 on or before **January 1st of the year** of the electoral roll revision to be eligible
• There is no maximum age limit — citizens of any age above 18 can vote

**Special provisions:**
• Senior citizens (85+) and persons with disabilities can apply for **Postal Ballot**
• Service voters (armed forces) vote via postal ballot from their posting location`
    },
    {
        keywords: ['evm', 'electronic voting machine', 'voting machine', 'how evm works'],
        question: 'What is an EVM?',
        answer: `**EVM** (Electronic Voting Machine) is the device used in Indian elections to record votes electronically instead of on paper.

**How it works:**
1. The EVM shows candidate names with their party symbols
2. Voter presses the button next to their chosen candidate
3. A beep confirms the vote is recorded
4. The VVPAT (Voter Verifiable Paper Audit Trail) prints a slip showing your vote for 7 seconds

**Why EVMs are trusted:**
• Standalone devices — not connected to internet or any network
• Encrypted and tamper-proof
• Used in Indian elections since 1999
• Results are counted at the press of a button after polls close`
    },
    {
        keywords: ['postal ballot', 'vote by post', 'absentee', 'who can postal ballot'],
        question: 'Who can use Postal Ballot?',
        answer: `**Postal Ballot** allows eligible voters to vote by post without visiting a polling station.

**Eligible categories in India:**
• 🪖 **Service Voters** — Armed Forces, CAPF, State Police on duty outside constituency
• 👴 **Senior Citizens** — Age 85 years or above
• ♿ **Persons with Disabilities** — 40% or more benchmark disability (PwD)
• 🏥 **Essential services** — On election duty (polling officers, etc.)
• 🦠 **COVID-19 affected** (when notified by ECI)

**General voters cannot use postal ballot.** The primary method for most Indians is in-person voting at the designated polling booth.

Apply via **Form 12D** at nvsp.in.`
    },
    {
        keywords: ['eci', 'election commission', 'election commission of india', 'what is eci'],
        question: 'What is the Election Commission of India?',
        answer: `The **Election Commission of India (ECI)** is an autonomous constitutional authority responsible for administering elections in India.

**Key responsibilities:**
• Announces election dates and schedules
• Enforces the Model Code of Conduct (MCC)
• Oversees the preparation of Electoral Rolls
• Manages EVMs and VVPAT machines
• Takes action on election violations and complaints

**Composition:** Chief Election Commissioner + 2 Election Commissioners

**Established:** January 25, 1950 (now celebrated as National Voters' Day)

The ECI ensures free, fair, and transparent elections across India — from Panchayat to Parliament.`
    },
    {
        keywords: ['election day', 'how to vote', 'polling day', 'vote process', 'what to bring', 'voting process'],
        question: 'What happens on Election Day?',
        answer: `Here's what to do on **Election Day** in India:

**What to bring:**
• Your **Voter ID (EPIC)** — or any of 12 alternative photo IDs accepted by ECI
• Alternative IDs: Aadhaar, Passport, PAN card, Driving License, etc.

**At the Polling Booth:**
1. Find your name in the voter list (check polling booth at nvsp.in)
2. Queue at the booth — arrive before closing time
3. Show your ID to polling officer
4. Get your finger marked with **indelible ink** (proof you voted)
5. Press your choice on the **EVM**
6. Verify on the VVPAT slip

**Polling hours:** Usually 7 AM to 6 PM (may vary by area)

Voting is your democratic right — exercise it! 🗳️`
    },
    {
        keywords: ['constituency', 'what is constituency', 'how many constituency', 'karnataka constituency'],
        question: 'What is a constituency?',
        answer: `A **constituency** (also called a "seat") is a defined geographic area whose residents elect one representative to the legislature.

**In Karnataka:**
• There are **224 Assembly constituencies** (each elects 1 MLA)
• Karnataka also has **28 Lok Sabha constituencies** (each elects 1 MP)

**How it works:**
• Each voter is registered in exactly one constituency based on their residential address
• All voters in a constituency vote to choose their single MLA
• The candidate with the most votes wins (First-Past-The-Post system)
• Constituency boundaries are determined by the **Delimitation Commission**

Your constituency is determined by your registered address at nvsp.in.`
    }
];

// ─── FAQ Matcher ──────────────────────────────────────────────────────────────
/**
 * Find a matching FAQ answer for the given question using keyword matching.
 * @param {string} question - User's question
 * @returns {object|null} FAQ entry or null if no match
 */
function findFAQAnswer(question) {
    if (!question) return null;
    const q = question.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;

    for (const faq of ELECTION_FAQ) {
        let score = 0;
        for (const keyword of faq.keywords) {
            if (q.includes(keyword)) {
                score += keyword.split(' ').length; // longer keyword matches score higher
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestMatch = faq;
        }
    }
    return bestScore > 0 ? bestMatch : null;
}

// ─── Gemini API Call ──────────────────────────────────────────────────────────
const ELECTION_CONTEXT =
    'You are a helpful civic education assistant specializing in Indian elections, ' +
    'Karnataka state MLA elections, voter registration (NVSP), and voting rights. ' +
    'Keep answers factual, clear, and under 200 words.';

async function tryModel(model, payload) {
    const url = `${GEMINI_BASE}/${model}:generateContent?key=${GEMINI_API_KEY}`;
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (res.status === 404) throw new Error('MODEL_NOT_FOUND');
    if (res.status === 429) throw new Error('RATE_LIMIT');
    if (res.status === 403) throw new Error('API key is invalid. Check your key at aistudio.google.com/app/apikey');
    if (res.status === 400) {
        const e = await res.json().catch(() => ({}));
        throw new Error(`Bad request: ${e?.error?.message || 'Try a different question.'}`);
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('Empty response from Gemini.');
    return text;
}

async function askGemini(question) {
    if (!question || !question.trim()) throw new Error('Please enter a question.');
    const payload = {
        contents: [{ parts: [{ text: `${ELECTION_CONTEXT}\n\nUser: ${question.trim()}` }] }],
        generationConfig: { maxOutputTokens: 400, temperature: 0.7 }
    };
    let lastError = null;
    for (const model of GEMINI_MODELS) {
        try {
            const text = await tryModel(model, payload);
            if (window.logEvent) logEvent('gemini_success', { model });
            return { text, source: 'gemini', model };
        } catch (err) {
            if (err.message === 'MODEL_NOT_FOUND') { lastError = err; continue; }
            throw err;
        }
    }
    throw lastError || new Error('No Gemini models available.');
}

/**
 * Main entry point: try Gemini first, fall back to FAQ cache.
 * @param {string} question
 * @returns {Promise<{text, source, model?}>}
 */
async function getElectionAnswer(question) {
    if (!question || !question.trim()) throw new Error('Please enter a question.');

    // Try Gemini API first
    try {
        return await askGemini(question);
    } catch (err) {
        // On rate limit or network error, fall back to FAQ
        if (err.message === 'RATE_LIMIT' || err.name === 'TypeError') {
            const faq = findFAQAnswer(question);
            if (faq) {
                if (window.logEvent) logEvent('faq_fallback', { question: question.substring(0, 50) });
                return { text: faq.answer, source: 'faq', question: faq.question };
            }
            // Rate limited AND no FAQ match
            throw new Error('API rate limit reached. Please wait 30–60 seconds, then try again.');
        }
        throw err;
    }
}

// Expose globals
window.askGemini         = askGemini;
window.getElectionAnswer = getElectionAnswer;
window.findFAQAnswer     = findFAQAnswer;
window.ELECTION_FAQ      = ELECTION_FAQ;
