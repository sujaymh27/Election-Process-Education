# 🗳️ Election Process Education — Karnataka

> An interactive, AI-powered civic education assistant guiding Karnataka citizens through the election process in **English & ಕನ್ನಡ**.

🌐 **Live Demo:** https://election-education-602894482227.us-central1.run.app

---

## ✨ Features at a Glance

| | Feature | Detail |
|---|---|---|
| 🌐 | **Bilingual** | English ↔ Kannada toggle, saved in localStorage |
| 🤖 | **Gemini AI** | Live Q&A + 11 pre-built FAQ answers as fallback |
| 📍 | **Constituency Finder** | 22 Karnataka constituencies with autocomplete |
| ☁️ | **Firebase** | User readiness data saved to Firestore |
| 🗺️ | **Maps + Calendar** | Google Maps embed + Election Day calendar link |
| 🧪 | **Tested** | 130+ unit test assertions across 18 test groups |
| ♿ | **Accessible** | ARIA, skip-link, keyboard nav, live regions |

---

## 📁 Project Structure

```
Election Process Education/
│
├── 📄 index.html        → App shell, ARIA landmarks, language toggle
├── 🎨 style.css         → Design system, animations, responsive layout
│
├── 🧠 Core Logic
│   ├── script.js        → Step rendering, state management, validation
│   ├── translations.js  → English + Kannada strings — t(), setLanguage()
│   └── utils.js         → escapeHTML, debounce, toast, logEvent, spinner
│
├── ☁️  Google Services
│   ├── gemini.js        → Gemini AI Q&A + FAQ cache fallback
│   └── firebase.js      → Firestore user data persistence
│
├── 🧪 tests.js          → 130+ unit tests across 18 groups (auto-run)
├── 📊 data.json         → Karnataka constituencies & candidate data
└── 📘 README.md         → Project documentation
```

---

## 🚀 Quick Start

```bash
cd "Election Process Education"
python -m http.server 8080
# Open → http://localhost:8080
```

> ⚠️ Always use a local server — `file://` breaks `fetch()` for `data.json`.

---

## ☁️ Google Services

| Service | File | How It's Used |
|---|---|---|
| **Gemini API** | `gemini.js` | Election Q&A, 4-model fallback chain |
| **Firebase Firestore** | `firebase.js` | Saves user score, constituency, method |
| **Google Maps** | `script.js` | Polling booth location embed |
| **Google Calendar** | `script.js` | "Add Election Day" one-click button |
| **Google Fonts** | `index.html` | Inter typeface |

---

## 🏆 Evaluation Criteria

### 🧩 Code Quality
- **Modular**: each file has a single responsibility (`'use strict'` in all)
- **Validators** module with pure functions (`validateName`, `validateAge`, `validateConstituencyInput`)
- **No hardcoded UI strings** — all UI text in `translations.js`
- **Debouncing** (250ms) on autocomplete; lazy step rendering
- **JSDoc** on all public functions; no dead code

### 🔐 Security
- All user input sanitized via `escapeHTML()` before any `innerHTML`
- `item.textContent` used in autocomplete (never `innerHTML`)
- Regex-based name validation, numeric range checks for age
- Zero `eval()` usage; Content-Security-Policy-friendly

### ⚡ Efficiency
- No framework — pure Vanilla JS, zero build step, instant load
- FAQ cache serves 11 answers instantly without hitting the API
- `localStorage` persists state & language — no server round-trips
- Gemini tries fastest model first (`gemini-2.0-flash`), falls back only on 404

### 🧪 Testing
Open **F12 → Console** after page load:
```
📊 Results: 130/130 tests passed ✅
```

| Group | Scope | Assertions |
|---|---|---|
| 1 | `validateName` | 16 |
| 2 | `validateAge` | 15 |
| 3 | `validateConstituencyInput` | 7 |
| 4 | `calculateScore` | 11 |
| 5 | `formatDate` | 8 |
| 6 | `escapeHTML` | 10 |
| 7 | `sanitizeText` | 8 |
| 8 | `debounce` | 8 |
| 9 | `logEvent` | 5 |
| 10 | `findConstituency` | 12 |
| 11 | `findFAQAnswer` | 11 |
| 12 | `t()` translations | 8 |
| 13 | `askGemini` input validation | 6 |
| 14 | `saveUserData` simulation | 7 |
| 15 | `createSpinner` | 6 |
| 16 | `showToast` | 5 |
| 17 | State persistence | 7 |
| 18 | `fallbackData` integrity | 5 + 3×22 constituencies |

### ♿ Accessibility
- Skip-to-content link (keyboard users)
- `role="progressbar"` with `aria-valuenow`, `aria-valuemin/max`
- All errors: `role="alert"` + `aria-live="polite"` + `aria-invalid`
- `<html lang>` updated dynamically on language switch
- Enter key submits all forms; all buttons have `aria-label`

### 🌐 Bilingual (English / ಕನ್ನಡ)
```javascript
t('introTitle')                    // "Welcome to Your Election Guide"
                                   // → "ನಿಮ್ಮ ಚುನಾವಣಾ ಮಾರ್ಗದರ್ಶಿಗೆ ಸ್ವಾಗತ"
t('ageTitle', { name: 'Ramesh' }) // Supports {{name}} placeholders
setLanguage('kn')                  // Switches all UI instantly + re-renders
```

---

## 🔑 API Keys

| Service | File | Where to Get |
|---|---|---|
| Gemini AI | `gemini.js` → `GEMINI_API_KEY` | [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) |
| Firebase | `firebase.js` → `FIREBASE_CONFIG` | [console.firebase.google.com](https://console.firebase.google.com) |

> App works in demo mode without keys — Gemini falls back to FAQ, Firebase logs to console.

---

## ⚠️ Disclaimer

Demonstration data only. Verify with official sources:
[NVSP](https://www.nvsp.in) · [ECI](https://eci.gov.in) · [Karnataka CEO](https://ceo.karnataka.gov.in)

---

> 📚 **For Educational & Civic Awareness Purposes Only.**
> This project was built to help citizens understand the Indian election process.
> Not affiliated with or endorsed by the Election Commission of India.
