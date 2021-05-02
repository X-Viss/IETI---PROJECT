import axios from 'axios';

const URL = 'http://localhost:8080/';
var token = window.sessionStorage.getItem("token");
var instance = axios.create({
    baseURL: URL,
    headers: { 'Authorization': 'Bearer ' + token}
});


export const get = (path, data, params) => {
    return new Promise((resolve, reject) => {
        instance.get(path, data, params)
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
                console.log(res)
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



export const jwtRequest = (user)=>{
    post("auth", user).then(data=>{
        console.log(data);
        window.sessionStorage.setItem("token", data.accessToken);
        localStorage.setItem("loggedIn", true);
        instance = axios.create({
            baseURL: URL,
            headers: { 'Authorization': 'Bearer ' + data.accessToken }
        });
    }).catch((err) =>{
        console.log(err);        
    })
}