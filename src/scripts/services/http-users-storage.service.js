import HttpService from "./http.service";

import { SERVER_USERS_URL } from '../configs/urls';

export default {

    create(userId, answers) {
        const body = Object.assign({ id: userId }, answers);
        return HttpService.create(SERVER_USERS_URL, body);
    },

    update(userId, answers) {
        return HttpService.update(`${SERVER_USERS_URL}/${userId}`, answers);
    },

    read(userId) {
        return HttpService.read(SERVER_USERS_URL, userId);
    },

    remove(userId) {
        return HttpService.remove(SERVER_USERS_URL, userId);
    }

};
