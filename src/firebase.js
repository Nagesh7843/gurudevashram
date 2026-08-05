// Firebase helper (replace config with your project's values)
// Uses dynamic imports so the app doesn't fail when Firebase SDK is not installed.

const firebaseConfig = {
  apiKey: "REPLACE_WITH_API_KEY",
  authDomain: "REPLACE_WITH_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_PROJECT_ID",
  storageBucket: "REPLACE_WITH_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_MESSAGING_ID",
  appId: "REPLACE_WITH_APP_ID"
};

let app = null;
let auth = null;
let db = null;
let enabled = false;

export async function initFirebase(config = {}) {
  const cfg = Object.keys(config).length ? config : firebaseConfig;
  if (!cfg.apiKey || cfg.apiKey.startsWith('REPLACE')) return false;
  try {
    const pkgApp = 'firebase' + '/app';
    const firebaseApp = await import(pkgApp);
    const { initializeApp } = firebaseApp;
    const pkgAuth = 'firebase' + '/auth';
    const authMod = await import(pkgAuth);
    const pkgFs = 'firebase' + '/firestore';
    const firestoreMod = await import(pkgFs);

    app = initializeApp(cfg);
    auth = authMod.getAuth(app);
    db = firestoreMod.getFirestore(app);
    enabled = true;
    return true;
  } catch (e) {
    console.warn('Firebase SDK not available or failed to initialize:', e.message || e);
    enabled = false;
    return false;
  }
}

export function isEnabled() {
  return enabled;
}

export async function signIn(email, password) {
  if (!enabled) throw new Error('Firebase not configured');
  const pkgAuth = 'firebase' + '/auth';
  const authMod = await import(pkgAuth);
  return authMod.signInWithEmailAndPassword(auth, email, password);
}

export async function signUp(email, password) {
  if (!enabled) throw new Error('Firebase not configured');
  const pkgAuth = 'firebase' + '/auth';
  const authMod = await import(pkgAuth);
  return authMod.createUserWithEmailAndPassword(auth, email, password);
}

export async function signOut() {
  if (!enabled) throw new Error('Firebase not configured');
  const pkgAuth = 'firebase' + '/auth';
  const authMod = await import(pkgAuth);
  return authMod.signOut(auth);
}

export async function addEventToFirestore(event) {
  if (!enabled) throw new Error('Firebase not configured');
  const pkgFs = 'firebase' + '/firestore';
  const firestoreMod = await import(pkgFs);
  const { collection, addDoc } = firestoreMod;
  const col = collection(db, 'events');
  return addDoc(col, { ...event, createdAt: new Date().toISOString() });
}

export async function fetchEventsFromFirestore() {
  if (!enabled) throw new Error('Firebase not configured');
  const pkgFs = 'firebase' + '/firestore';
  const firestoreMod = await import(pkgFs);
  const { collection, getDocs, query, orderBy } = firestoreMod;
  const col = collection(db, 'events');
  const q = query(col, orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function deleteEvent(id) {
  if (!enabled) throw new Error('Firebase not configured');
  const pkgFs = 'firebase' + '/firestore';
  const firestoreMod = await import(pkgFs);
  const { doc, deleteDoc } = firestoreMod;
  const dref = doc(db, 'events', id);
  return deleteDoc(dref);
}

export default {
  initFirebase,
  isEnabled,
  signIn,
  signUp,
  signOut,
  addEventToFirestore,
  fetchEventsFromFirestore,
  deleteEvent
};
