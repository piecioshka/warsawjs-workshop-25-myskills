import { v4 } from 'uuid';

import { STORAGE_USER_ID } from '../configs/storage';

// import HttpUsersStorageService from '../services/http-users-storage.service';
import LocalStorageService from '../services/local-storage.service';

class UserIdHelper {

    constructor(storage) {
        this.storage = storage;
    }

    async getUserId() {
        const restoredUserId = await this.storage.read(STORAGE_USER_ID);

        if (restoredUserId) {
            return restoredUserId;
        }

        return null;
    }

    async createUserId() {
        const userId = await this._generateUserId();
        await this.storage.create(STORAGE_USER_ID, userId);
        return userId;
    }

    async _generateUserId() {
        return v4();
    }

    async isUserIdCreated() {
        const userId = await this.storage.read(STORAGE_USER_ID);
        return (userId !== null);
    }

    async clearStoredUserId() {
        await this.storage.remove(STORAGE_USER_ID);
    }
}

// export default new UserIdHelper(HttpUsersStorageService);
export default new UserIdHelper(LocalStorageService);
