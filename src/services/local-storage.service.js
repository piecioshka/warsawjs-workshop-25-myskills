export default {

    async create(key, value) {
        return await localStorage.setItem(key, JSON.stringify(value));
    },

    async update(key, value) {
        return await localStorage.setItem(key, JSON.stringify(value));
    },

    async read(key) {
        const data = await localStorage.getItem(key);
        try {
            return JSON.parse(data);
        } catch (err) {
            return data;
        }
    },

    async remove(key) {
        return await localStorage.removeItem(key);
    }

};
