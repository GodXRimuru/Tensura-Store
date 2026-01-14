import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Query,
  DocumentData,
  QueryConstraint,
  Firestore,
} from 'firebase/firestore';
import { firebaseConfig } from './config';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Get Firestore instance
export const db: Firestore = getFirestore(app);

/**
 * Add or set a document
 */
export const setDocument = async (
  collectionName: string,
  docId: string,
  data: DocumentData
): Promise<void> => {
  try {
    await setDoc(doc(db, collectionName, docId), data);
  } catch (error) {
    console.error(`Error setting document in ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Get a single document
 */
export const getDocument = async (
  collectionName: string,
  docId: string
): Promise<DocumentData | null> => {
  try {
    const docSnap = await getDoc(doc(db, collectionName, docId));
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error(`Error getting document from ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Get all documents from a collection
 */
export const getDocuments = async (
  collectionName: string
): Promise<DocumentData[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.error(`Error getting documents from ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Query documents with constraints
 */
export const queryDocuments = async (
  collectionName: string,
  constraints: QueryConstraint[]
): Promise<DocumentData[]> => {
  try {
    const q: Query = query(collection(db, collectionName), ...constraints);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.error(`Error querying documents from ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Update a document
 */
export const updateDocument = async (
  collectionName: string,
  docId: string,
  data: Partial<DocumentData>
): Promise<void> => {
  try {
    await updateDoc(doc(db, collectionName, docId), data);
  } catch (error) {
    console.error(`Error updating document in ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Delete a document
 */
export const deleteDocument = async (
  collectionName: string,
  docId: string
): Promise<void> => {
  try {
    await deleteDoc(doc(db, collectionName, docId));
  } catch (error) {
    console.error(`Error deleting document from ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Helper: Query by field and value
 */
export const queryByField = async (
  collectionName: string,
  field: string,
  value: any
): Promise<DocumentData[]> => {
  return queryDocuments(collectionName, [where(field, '==', value)]);
};

/**
 * Helper: Get documents with ordering and limit
 */
export const getOrderedDocuments = async (
  collectionName: string,
  orderByField: string,
  direction: 'asc' | 'desc' = 'asc',
  limitCount?: number
): Promise<DocumentData[]> => {
  const constraints: QueryConstraint[] = [orderBy(orderByField, direction)];
  if (limitCount) {
    constraints.push(limit(limitCount));
  }
  return queryDocuments(collectionName, constraints);
};

export default db;
