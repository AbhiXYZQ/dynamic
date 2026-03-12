import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

const COLLECTION_NAME = "notices";

export const fetchNoticesFromDb = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching notices:", error);
    return [];
  }
};

export const addNoticeToDb = async (noticeData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), noticeData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding notice:", error);
    throw error;
  }
};

export const updateNoticeInDb = async (noticeId, updatedData) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, noticeId);
    await updateDoc(docRef, updatedData);
  } catch (error) {
    console.error("Error updating notice:", error);
    throw error;
  }
};

export const deleteNoticeFromDb = async (noticeId) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, noticeId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting notice:", error);
    throw error;
  }
};
