import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  deleteObject,
  getBytes,
  getDownloadURL,
  listAll,
  StorageReference,
  Storage,
} from 'firebase/storage';
import { firebaseConfig } from './config';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Get Storage instance
export const storage: Storage = getStorage(app);

/**
 * Upload a file to Firebase Storage
 */
export const uploadFile = async (
  path: string,
  file: File
): Promise<string> => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

/**
 * Upload a string to Firebase Storage (e.g., JSON, text, or data URL)
 */
export const uploadString = async (
  path: string,
  data: string,
  format: 'raw' | 'base64' | 'base64url' | 'data_url' = 'raw'
): Promise<string> => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadString(storageRef, data, format);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading string:', error);
    throw error;
  }
};

/**
 * Get download URL for a file
 */
export const getFileUrl = async (path: string): Promise<string> => {
  try {
    const storageRef = ref(storage, path);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error getting file URL:', error);
    throw error;
  }
};

/**
 * Delete a file from Firebase Storage
 */
export const deleteFile = async (path: string): Promise<void> => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};

/**
 * Download file bytes
 */
export const downloadFile = async (path: string): Promise<ArrayBuffer> => {
  try {
    const storageRef = ref(storage, path);
    const bytes = await getBytes(storageRef);
    return bytes;
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
};

/**
 * List all files in a directory
 */
export const listFiles = async (path: string): Promise<StorageReference[]> => {
  try {
    const storageRef = ref(storage, path);
    const result = await listAll(storageRef);
    return result.items;
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
};

/**
 * List all subdirectories in a path
 */
export const listDirectories = async (path: string): Promise<StorageReference[]> => {
  try {
    const storageRef = ref(storage, path);
    const result = await listAll(storageRef);
    return result.prefixes;
  } catch (error) {
    console.error('Error listing directories:', error);
    throw error;
  }
};

/**
 * Create a storage reference
 */
export const createStorageRef = (path: string): StorageReference => {
  return ref(storage, path);
};

export default storage;
