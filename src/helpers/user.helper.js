import HttpUsersStorageService from '../services/http-users-storage.service';

class UserHelper {

    constructor(storage) {
        this.storage = storage;
    }

    async createUser(userId) {
        console.log('UserHelper#saveAnswers');
        return await this.storage.create(userId);
    }

    async removeUser(userId) {
        return await this.storage.remove(userId);
    }
}

export default new UserHelper(HttpUsersStorageService);
// export default new AnswersHelper(LocalStorageService);
