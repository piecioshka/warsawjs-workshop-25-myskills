import { v4 } from 'uuid';

import { STORAGE_USER_ID } from '../configs/user';

export function getUserId() {
    // Read from storage
    const restoredUserId = restoreUserId();

    if (restoredUserId) {
        console.log('userId is restored');
        return restoredUserId;
    }

    // Generate
    return generateUserId();
}

function restoreUserId() {
    return localStorage.getItem(STORAGE_USER_ID);
}

function generateUserId() {
    console.log('userId is generated');
    const userId = v4();
    localStorage.setItem(STORAGE_USER_ID, userId);
    return userId;
}

export function isUserStore() {
    return localStorage.getItem(STORAGE_USER_ID) !== null;
}

export function clearStoredUserId() {
    console.log('userId is destroy');
    localStorage.removeItem(STORAGE_USER_ID);
}