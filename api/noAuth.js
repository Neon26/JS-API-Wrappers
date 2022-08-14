// You will build an ES6 module like we did in class today and utilize apisauce to create API wrappers for the https://cae-bootstore.herokuapp.com/  


// You should wrap the endpoints for:
// GET /login
// POST /user
// PUT /user
// DELETE /user
// GET /book

// Make a file the invokes all these API wrappers and logs their output to the console.
import { apiNoAuth } from "./user";

const endpoint_user = '/user';
const endpoint_book = '/book';

export const registerUser = async (user, cancelToken) => {
    let error;
    let user;

    const response = await apiNoAuth(cancelToken).post(endpoint_user, user);
    if (response.ok) {
        user = response.data;
    } else if (response.problem) {
        error = response.problem;
    } else {
        error = response.error;
    }
    return { user, error };
}

export const loginUser = async (email, password, cancelToken) => {
    let error;
    let user;

    const response = await apiNoAuth(cancelToken).get(endpoint_user, { email, password });
    if (response.ok) {
        user = response.data;
    } else if (response.problem) {
        error = response.problem;
    } else {
        error = response.error;
    }
    return { user, error };
}

export const getBooks = async (cancelToken) => {
    let error;
    let books;

    const response = await apiNoAuth(cancelToken).get(endpoint_book);
    if (response.ok) {
        books = response.data;
    } else if (response.problem) {
        error = response.problem;
    } else {
        error = response.error;
    }
    return { books, error };
}