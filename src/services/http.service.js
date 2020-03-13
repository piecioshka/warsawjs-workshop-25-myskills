export default {

    async create(url, body) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return response.json();
    },

    async update(url, body) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return response.json();
    },

    async read(url, key) {
        const response = await fetch(`${url}/${key}`, {
            method: 'GET'
        });
        return response.json();
    },

    async remove(url, key) {
        const response = await fetch(`${url}/${key}`, {
            method: 'DELETE'
        });
        return response.json();
    }

};
