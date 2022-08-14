import { apiNoAuth, apiTokenAuth } from "./user";

const endpoint = "/api/book";

 const getBooks = async (CancelToken) => {
    let error;
    let books;

    const response = await apiNoAuth(CancelToken).get(endpoint);
    if (response.ok) {
        books = response.data;
    } else {
        error = "Something went wrong";
    }
    return { books, error };
}

const post = async (token, book, CancelToken) => {
    let error;
    let book;

    const response = await apiTokenAuth(token, CancelToken).post(endpoint, book);
    if (response.ok) {
        book = response.data;
    } else {
        error = "Something went wrong";
    }
    return { book, error };
}

const put = async (token, id, book, CancelToken) => {
    let error;
    let book;

    const response = await apiTokenAuth(token, CancelToken).put(endpoint + "/" + id, book);
    if (response.ok) {
        book = response.data;
    } else {
        error = "Something went wrong";
    }
    return { book, error };
}

const deleteBook = async (token, id, CancelToken) => {
    let error;
    let book;

    const response = await apiClientTokenAuth(token, CancelToken).delete(endpoint + "/" + id);
    if (response.ok) {
        book = response.data;
    } else {
        error = "Something went wrong";
    }
    return { book, error };
}

const apiBook = {
    getBooks,
    post,
    put,
    deleteBook
}

export default apiBook;