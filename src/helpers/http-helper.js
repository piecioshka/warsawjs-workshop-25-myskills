export default {

    async create(url, body) {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json());
    },

    async update(url, body) {
        return await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json());
    },

    async read(url, key) {
        return await fetch(`${url}/${key}`, {
            method: 'get'
        }).then(res => res.json());
    },

    async remove(url, key) {
        return await fetch(`${url}/${key}`, {
            method: 'delete'
        }).then(res => res.json());
    }

};
