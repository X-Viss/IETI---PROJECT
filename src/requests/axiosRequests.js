import axios from 'axios';


var instance = axios.create({
    baseURL: 'http://localhost:8080/',
});


export const get = (path, params) => {
    return new Promise((resolve, reject) => {
        instance.get(path, params)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}

export const post = (path, data, params) => {
    return new Promise((resolve, reject) => {
        instance.post(path, data, params)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}

export const put = (path, data, params) => {
    return new Promise((resolve, reject) => {
        instance.put(path, data, params)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}

export const deleteRequest = (path, data, params) => {
    return new Promise((resolve, reject) => {
        instance.delete(path, data, params)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}