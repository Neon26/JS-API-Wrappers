import base64 from 'base-64';
import {create} from 'apisauce';

const base ="https://cae-bootstore.herokuapp.com/";

export const apiNoAuth = (CancelToken) => create({
    baseURL: base,
    CancelToken: CancelToken,
})

export const apiBasicAuth = (email, password,cancelToken) => create({
    baseURL: base,
    cancelToken: cancelToken,
    headers: {
        Authorization: 'Basic ' + base64.encode(email + ':' + password)
    }
})

export const apiTokenAuth = (token,cancelToken) => create({
    baseURL: base,
    cancelToken: cancelToken,
    headers: {
        Authorization: 'Bearer ' + token
    }
})