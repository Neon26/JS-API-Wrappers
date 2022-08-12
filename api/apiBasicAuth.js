// You will build an ES6 module like we did in class today and utilize apisauce to create API wrappers for the https://cae-bootstore.herokuapp.com/  


// You should wrap the endpoints for:
// GET /login
// POST /user
// PUT /user
// DELETE /user
// GET /book

// Make a file the invokes all these API wrappers and logs their output to the console.
import { apiClientBasicAuth } from "./user";


const endpoint = '/api/login';

const getUser = async (email, password, CancelToken) => {
    let error;
    let user;

    const response = await apiClientBasicAuth(email, password, CancelToken).get(endpoint);
    if (response.ok) {
        user = response.data;
    } else if ( response.status === 401 ) {
        error = 'Invalid email or password';
    } else {
        error = 'Something went wrong';
    }
    return { user, error };
}

const getLogin = async (email, password, CancelToken) => {
    let error;
    let user;

    const response = await apiClientBasicAuth(email, password, CancelToken).get(endpoint);
    if (response.ok) {
        user = response.data;
    } else if ( response.status === 401 ) {
        error = 'Invalid email or password';
    } else {
        error = 'Something went wrong';
    }
    return { user, error };
}

const postUser = async (email, password, CancelToken) => {
    let error;
    let user;

    const response = await apiClientBasicAuth(email, password, CancelToken).post(endpoint, { email, password });
    if (response.ok) {
        user = response.data;
    } else if ( response.status === 401 ) {
        error = 'Invalid email or password';
    } else {
        error = 'Something went wrong';
    }
    return { user, error };
}

const putUser = async (token, email, password, CancelToken) => {
    let error;
    let user;

    const response = await apiClientBasicAuth(email, password, CancelToken).put(endpoint, { email, password });
    if (response.ok) {
        user = response.data;
    } else if ( response.status === 401 ) {
        error = 'Invalid email or password';
    } else {
        error = 'Something went wrong';
    }
    return { user, error };
}

const deleteUser = async (token, CancelToken) => {
    let error;
    let user;

    const response = await apiClientBasicAuth(token, CancelToken).delete(endpoint);
    if (response.ok) {
        user = response.data;
    } else if ( response.status === 401 ) {
        error = 'Invalid email or password';
    } else {
        error = 'Something went wrong';
    }
    return { user, error };
}

const apiBasicAuth = {
    getUser,
    getLogin,
    postUser,
    putUser,
    deleteUser
}

export default apiBasicAuth;