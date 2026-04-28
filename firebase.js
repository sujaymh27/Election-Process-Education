'use strict';
// ─── firebase.js — Firebase Firestore Integration ────────────────────────────
// Replace these values with your actual Firebase project config.
// Get config at: https://console.firebase.google.com → Project Settings → Your apps
const FIREBASE_CONFIG = {
    apiKey:            'AIzaSyCnKRJQ9oIUIa8xQpWAOOY6pYV6PX9mI5k',
    authDomain:        'election-dac8d.firebaseapp.com',
    projectId:         'election-dac8d',
    storageBucket:     'election-dac8d.firebasestorage.app',
    messagingSenderId: '814727460962',
    appId:             '1:814727460962:web:e773b8d07b3e26fa7df93b',
    measurementId:     'G-RCX9DBGLDT'
};

const COLLECTION_NAME = 'election_users';
let _db = null;
let _initialized = false;

/**
 * Initialize Firebase app and Firestore once.
 * Returns true if successful, false if SDK is not loaded or config is placeholder.
 */
function initFirebase() {
    if (_initialized) return !!_db;
    _initialized = true;

    // Skip if Firebase SDK not loaded (CDN blocked, offline, etc.)
    if (typeof firebase === 'undefined') {
        console.warn('[Firebase] SDK not available. User data will be logged locally only.');
        return false;
    }
    // Skip if placeholder config detected
    if (FIREBASE_CONFIG.apiKey === 'YOUR_FIREBASE_API_KEY') {
        console.warn('[Firebase] Placeholder config detected. Skipping real initialization.');
        return false;
    }
    try {
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        _db = firebase.firestore();
        if (window.logEvent) logEvent('firebase_initialized');
        return true;
    } catch (err) {
        console.warn('[Firebase] Init failed:', err.message);
        return false;
    }
}

/**
 * Save user readiness data to Firestore.
 * Falls back to a console simulation if Firebase is unavailable.
 * @param {object} userData - { name, score, constituency, votingMethod }
 * @returns {Promise<object>} Firestore doc ref or simulation result
 */
async function saveUserData(userData) {
    const ready = initFirebase();
    const payload = {
        name:         sanitizeText(userData.name || ''),
        score:        Number(userData.score) || 0,
        constituency: userData.constituency || 'unknown',
        votingMethod: userData.votingMethod || 'unknown',
        registered:   userData.registered || 'unknown',
        savedAt:      new Date().toISOString()
    };

    if (!ready || !_db) {
        // Graceful simulation — still logs data for demo purposes
        console.log('[Firebase Simulation] Data saved locally:', payload);
        if (window.logEvent) logEvent('firebase_save_simulated', payload);
        return { simulated: true, payload };
    }

    try {
        const docRef = await _db.collection(COLLECTION_NAME).add({
            ...payload,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        if (window.logEvent) logEvent('firebase_save_success', { docId: docRef.id });
        return docRef;
    } catch (err) {
        console.warn('[Firebase] Save failed:', err.message);
        if (window.logEvent) logEvent('firebase_save_error', { error: err.message });
        return null;
    }
}

// Expose globally for script.js and tests.js
window.saveUserData  = saveUserData;
window.initFirebase  = initFirebase;
