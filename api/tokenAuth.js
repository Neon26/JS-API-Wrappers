import { apiTokenAuth } from "./user";

const endpoint_user = '/user';

export const editUser = async (token, user, cancelToken) => {
    let error;
    let user;

    const response = await apiTokenAuth(token, cancelToken).put(endpoint_user, user);
    if (response.ok) {
        user = response.data;
    } else if (response.problem) {
        error = response.problem;
    } else {
        error = response.error;
    }
    return { user, error };
}

export const deleteUser = async (token, id, cancelToken) => {
    let error;
    let user;

    const response = await apiTokenAuth(token, cancelToken).delete(endpoint_user + "/" + id);
    if (response.ok) {
        user = response.data;
    } else if (response.problem) {
        error = response.problem;
    } else {
        error = response.error;
    }
    return { user, error };
}
