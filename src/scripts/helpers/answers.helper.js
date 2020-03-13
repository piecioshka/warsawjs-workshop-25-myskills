import HttpUsersStorageService from '../services/http-users-storage.service';
// import LocalStorageService from '../services/local-storage.service';

class AnswersHelper {

    constructor(storage) {
        this.storage = storage;
    }

    async getByUserId(userId) {
        console.log('AnswersHelper#getByUserId');
        const EMPTY_RESPONSE = {};
        try {
            const user = await this.storage.read(userId);
            return user && user.answers
                ? user.answers
                : EMPTY_RESPONSE;
        } catch (err) {
            return EMPTY_RESPONSE;
        }
    }

    async updateAnswers(userId, answers) {
        console.log('AnswersHelper#updateAnswers');
        return await this.storage.update(userId, { answers });
    }

}

export default new AnswersHelper(HttpUsersStorageService);
// export default new AnswersHelper(LocalStorageService);
