import HttpUsersStorageHelper from './http-users-storage-helper';
import LocalStorageHelper from './local-storage-helper';

class AnswersHelper {

    constructor(storage) {
        this.storage = storage;
    }

    async getByUserId(userId) {
        const EMPTY_RESPONSE = {};
        try {
            const user = await this.storage.read(userId);
            return user && user.answers
                ? user.answers
                : EMPTY_RESPONSE
        } catch (err) {
            return EMPTY_RESPONSE;
        }
    }

    async saveAnswers(userId, answers) {
        return await this.storage.create(userId, { answers });
    }

    async updateAnswers(userId, answers) {
        return await this.storage.update(userId, { answers });
    }

}

export default new AnswersHelper(HttpUsersStorageHelper);
// export default new AnswersHelper(LocalStorageHelper);
