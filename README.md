# Election Process Education Assistant

## Overview
This project is an interactive, smart assistant designed to help users understand the election process, timelines, and steps to vote in an easy-to-follow way. It guides citizens through checking eligibility, finding registration details, selecting voting methods, researching local candidates, and preparing for election day.

## Chosen Vertical
**Election Process Education:** Helping citizens navigate the often confusing process of voting, encouraging higher voter turnout and informed decision-making.

## Approach and Logic
The application simulates a personalized, guided journey. Instead of presenting a wall of text, it asks contextual questions one at a time. The underlying logic uses a state-machine approach (`userState`) to determine the next step based on user input. For example:
- If a user inputs an age under 18, the logic diverges to an educational flow explaining what an MLA is, rather than pushing them through a voter registration flow they cannot complete.
- If a user is unregistered, urgency logic checks the remaining days until the deadline and flags the step with color-coded urgency indicators.

The entire UI is built with a Single Page Application (SPA) feel using Vanilla JavaScript for fast, dynamic DOM updates without page reloads.

## How the Solution Works
1. **State Management**: As the user answers questions (Name, Age, Registration Status, Constituency), their progress is saved locally using `localStorage`.
2. **Dynamic Rendering**: Based on the `userState.currentStep`, the JavaScript clears and redraws the main content area with the relevant form or information card.
3. **Data Fetching & Fallbacks**: The app fetches `data.json` containing mock election timelines, constituency data (towns/taluks of Karnataka), and candidate profiles. If the fetch fails (e.g., due to local file restrictions), it seamlessly falls back to a hardcoded data object.
4. **Interactive Dashboard**: Upon completion, a personalized dashboard is generated displaying a readiness checklist, a Google Calendar link for election day, and an embedded Google Map of their polling location.

## Google Services Integration
- **Google Maps**: Provides a visual representation of the user's specific polling location based on their chosen constituency using embedded map iframes.
- **Google Calendar**: Generates a dynamic template link allowing users to instantly add "Election Day" to their personal Google Calendar with a single click.

## Evaluation Criteria Alignment
* **Code Quality**: The project is built using modular Vanilla JS (`script.js`), cleanly separated CSS (`style.css`), and semantic HTML. The state management and rendering logic are separated into clear, readable functions.
* **Security**: The application relies entirely on client-side logic and `localStorage`. No sensitive personal identifiable information (PII) is transmitted to any external servers, ensuring a safe and responsible implementation.
* **Efficiency**: By avoiding heavy frontend frameworks (like React or Angular), the application maintains an extremely small footprint. Assets load instantly, and DOM updates are highly optimized.
* **Testing**: The application features fallback data mechanisms (for local testing without a web server) and robust input validation (e.g., preventing empty names or invalid ages).
* **Accessibility**: Uses semantic HTML, logical heading structures, clear color contrast, and inclusive features like tooltips (for the Readiness score) to ensure the UI is usable for everyone. 

## Assumptions Made
* The application currently uses static, demonstration data for Karnataka State Elections provided locally via `data.json`.
* Users are accessing the application via a modern web browser that supports ES6 JavaScript features, CSS Flexbox/Grid, and `localStorage`.
* The application assumes the device time is reasonably accurate to calculate registration deadline urgency.

## How to Run Locally
1. Clone or download the repository.
2. Open the folder in your terminal.
3. Start a local web server (required to fetch `data.json` due to CORS):
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
4. Open your browser and navigate to `http://localhost:8000`.
