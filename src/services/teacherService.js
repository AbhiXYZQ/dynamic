import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

const TEACHERS_COLLECTION = "teachers";

export async function fetchTeachers() {
  const snapshot = await getDocs(collection(db, TEACHERS_COLLECTION));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function addTeacher(teacher) {
  const docRef = await addDoc(collection(db, TEACHERS_COLLECTION), {
    ...teacher,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateTeacher(id, updates) {
  await updateDoc(doc(db, TEACHERS_COLLECTION, id), {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteTeacher(id) {
  await deleteDoc(doc(db, TEACHERS_COLLECTION, id));
}

export async function getTeacher(id) {
  const docSnap = await getDoc(doc(db, TEACHERS_COLLECTION, id));
  return docSnap.exists() ? { id, ...docSnap.data() } : null;
}
