import HttpHelper from "./http-helper";

import { SERVER_USERS_URL } from '../configs/urls';

export default {

    async create(userId, answers) {
        const body = Object.assign({ id: userId }, answers);
        return await HttpHelper.create(SERVER_USERS_URL, body);
    },

    async update(userId, answers) {
        return await HttpHelper.update(`${SERVER_USERS_URL}/${userId}`, answers);
    },

    async read(userId) {
        return await HttpHelper.read(SERVER_USERS_URL, userId);
    },

    async remove(userId) {
        return await HttpHelper.remove(SERVER_USERS_URL, userId);
    }

};
