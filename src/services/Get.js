import axios from 'axios';
import { URL_API } from './Config';

const Get = (path) =>{
    const promise = new Promise((resolve,reject) => {
        axios.get(URL_API+path)
        .then((result) => {
            resolve(result.data);
        },
        (error) => {
            reject(error);
        })
    })
    return promise;
}

export default Get;