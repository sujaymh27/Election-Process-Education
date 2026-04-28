'use strict';
// ─── utils.js — Shared Utilities ────────────────────────────────────────────

/** Escape HTML to prevent XSS when injecting user content into innerHTML */
function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/** Strip dangerous characters from plain text */
function sanitizeText(str) {
    if (typeof str !== 'string') return '';
    return str.trim().replace(/[<>]/g, '');
}

/** Debounce: delay fn execution until after `delay` ms of inactivity */
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

/** Show a transient toast notification */
function showToast(message, type = 'info', duration = 3500) {
    const existing = document.getElementById('toast-notification');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('toast-visible'));
    setTimeout(() => {
        toast.classList.remove('toast-visible');
        setTimeout(() => toast.remove(), 350);
    }, duration);
}

/**
 * Cloud Logging simulation — logs structured events to console
 * and persists last 50 events in sessionStorage for audit.
 */
function logEvent(event, data = {}) {
    const entry = { timestamp: new Date().toISOString(), event, ...data };
    console.log('[Cloud Log]:', entry);
    try {
        const logs = JSON.parse(sessionStorage.getItem('appLogs') || '[]');
        logs.push(entry);
        sessionStorage.setItem('appLogs', JSON.stringify(logs.slice(-50)));
    } catch (_) { /* storage unavailable — ignore */ }
}

/** Format a date in Indian locale (e.g., "25 May 2026") */
function formatDateIN(dateString) {
    if (!dateString) return 'Date not available';
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return 'Invalid date';
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

/** Return a spinner HTML snippet */
function createSpinner(label = 'Loading...') {
    return `<div class="spinner-container" role="status" aria-label="${escapeHTML(label)}">
        <div class="spinner" aria-hidden="true"></div>
        <span class="spinner-text">${escapeHTML(label)}</span>
    </div>`;
}

// Expose globals for script.js, gemini.js, firebase.js and tests.js
window.escapeHTML     = escapeHTML;
window.sanitizeText   = sanitizeText;
window.debounce       = debounce;
window.showToast      = showToast;
window.logEvent       = logEvent;
window.formatDateIN   = formatDateIN;
window.createSpinner  = createSpinner;
