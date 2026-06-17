// ═══════════════════════════════════════════════════════════════════════
// Firebase — Authentication only.
// Per requirements: no Firestore, no Storage, no Analytics, no saved
// profile data. This module just wires up email/password auth and keeps
// the rest of the site informed when the session changes.
// ═══════════════════════════════════════════════════════════════════════
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJLwKUwKjre9exI6ON3iVgsNakofYE2EY",
  authDomain: "ispani-site.firebaseapp.com",
  projectId: "ispani-site",
  storageBucket: "ispani-site.firebasestorage.app",
  messagingSenderId: "699948368481",
  appId: "1:699948368481:web:26933afe641e09fc3e6020"
  // measurementId/Analytics intentionally omitted — Authentication only.
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exposed for the rest of the (non-module) site to call.
window.firebaseAuth = {
  auth,
  signUp:  (email, password) => createUserWithEmailAndPassword(auth, email, password),
  signIn:  (email, password) => signInWithEmailAndPassword(auth, email, password),
  logout:  () => signOut(auth),
  sendVerificationEmail: (user, actionCodeSettings) => sendEmailVerification(user, actionCodeSettings || undefined)
};

// Keep the existing nav UI (profile button, guest/user states, dashboard guard)
// in sync with the REAL Firebase session. Defined in js/app.js, which loads
// before this module executes.
onAuthStateChanged(auth, (user) => {
  window.firebaseUser = user || null;
  if (typeof window.onFirebaseAuthChanged === "function") {
    window.onFirebaseAuthChanged(user);
  }
});
