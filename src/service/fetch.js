import cnf from '../confige/confige';

export const fetcher = (url, method = 'GET', body = {}) => {

    let options = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let token = window.localStorage.getItem('user')

    if(method.toLowerCase() !== 'get') {
        options.method = method
        options.body = JSON.stringify(body)
    }

    if(token) {
        options.headers.Authorization = 'Bearer ' + token
    }

    return fetch(cnf.apiUrl + url, options)
        .then(res => res.json())

}

export const uploadFetcher = (url, method = 'GET', body = {}) => {

    let options = {
        headers: {
        }
    }
    let token = window.localStorage.getItem('user')

    if(method.toLowerCase() !== 'get') {
        options.method = method
        options.body = body
    }

    if(token) {
        options.headers.Authorization = 'Bearer ' + token
    }

    return fetch(cnf.apiUrl + url, options)
        .then(res => res.json())

}