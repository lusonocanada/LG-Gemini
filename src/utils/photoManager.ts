// Utility to manage Diego's official photo with localStorage persistence and reactive sync
const STORAGE_KEY = 'diego_moraes_official_photo';
const EVENT_NAME = 'diego-photo-updated';

export function getStoredPhoto(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function saveStoredPhoto(dataUrl: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, dataUrl);
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (err) {
    console.warn('Could not save photo to localStorage:', err);
  }
}

export function removeStoredPhoto(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (err) {
    console.warn('Could not remove photo from localStorage:', err);
  }
}

export function subscribeToPhotoUpdates(callback: (photo: string | null) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  
  const handler = () => {
    callback(getStoredPhoto());
  };
  
  window.addEventListener(EVENT_NAME, handler);
  window.addEventListener('storage', handler);
  
  return () => {
    window.removeEventListener(EVENT_NAME, handler);
    window.removeEventListener('storage', handler);
  };
}
