import axios from 'axios';
import { apiUrl, expireCookies } from '../../config';
import { serviceType } from './api-type';

// private methods
const transformRequest = (data, headers) => {
    // Do whatever you want to transform the data
    headers['Content-Type'] = 'application/json;charset=utf-8'
    return JSON.stringify(data);
};

const validateStatus = (status) => { 
    return status >= 200 && status < 300;
};

const resolveApiInstance = (url) => {

    let baseURL = url + 'api/';
    let instrance = axios.create({
        baseURL: baseURL,
        headers: {
            time_stamp: new Date().getTime(),
        },
        transformRequest: [transformRequest],
        validateStatus: validateStatus

    });

    return instrance;
};

const resolveDefaultAxiosInstance = (type) => {
    switch (type) {
        case serviceType.book: {
            return resolveApiInstance(apiUrl)
        };
    }
};

export {resolveDefaultAxiosInstance};
