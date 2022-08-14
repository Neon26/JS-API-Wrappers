// You will build an ES6 module like we did in class today and utilize apisauce to create API wrappers for the https://cae-bootstore.herokuapp.com/  


// You should wrap the endpoints for:
// GET /login
// POST /user
// PUT /user
// DELETE /user
// GET /book

// Make a file the invokes all these API wrappers and logs their output to the console.
import { apiClientBasicAuth } from "./user";


const endpoint = '/login';

export const loginUser = async (email, password, canceToken) => {
    let error;
    let user;

    const response = await apiClientBasicAuth(email, password, canceToken).get(endpoint);
    if (response.ok) {
        user = response.data;
    } else if (response.problem) {
        error = response.problem;
    } else {
        error = response.error;
    }   
    return { user, error };
}