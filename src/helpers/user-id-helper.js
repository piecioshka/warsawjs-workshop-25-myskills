import { v4 } from 'uuid';

import { STORAGE_USER_ID } from '../configs/user';
import LocalStorageHelper from './local-storage-helper';

class UserIdHelper {

    constructor(storage) {
        this.storage = storage;
    }

    async getUserId() {
        // Read from storage
        const restoredUserId = await this._fetchUserId();

        if (restoredUserId) {
            console.log('userId is restored');
            return restoredUserId;
        }

        // Generate
        return await this._generateUserId();
    }

    async _fetchUserId() {
        return await this.storage.read(STORAGE_USER_ID);
    }

    async _generateUserId() {
        console.log('userId is generated');
        const userId = v4();
        await this.storage.create(STORAGE_USER_ID, userId);
        return userId;
    }

    async isUserStore() {
        const userId = await this.storage.read(STORAGE_USER_ID);
        return (userId !== null);
    }

    async clearStoredUserId() {
        console.log('userId is destroy');
        await this.storage.remove(STORAGE_USER_ID);
    }
}

export default new UserIdHelper(LocalStorageHelper);
