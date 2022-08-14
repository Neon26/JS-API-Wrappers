import { registerUser } from "./noAuth";
import { getBooks } from "./noAuth";
import { loginUser } from "./noAuth";
import { editUser, } from "./tokenAuth";
import { deleteUser } from "./tokenAuth";
import { CancelToken} from "apisauce";

const register = async (CancelToken) => {
    const user = {
        email: "sh@gmail.com",
        password: "123",
        first_name: "Shaun",
        last_name: "Higgins",
    }
    const {error} = await registerUser(user, CancelToken);
    console.log(error? error: "Successfully registered user");
}

const login = async (CancelToken) => {
    let email = "sh@gmail.com";
    let password = "123";
    const {user, error} = await loginUser(email, password, CancelToken);
    console.log(error? error: "Successfully logged in user");
    console.log(user);
}

const edit = async (CancelToken) => {
    let userEdit = {
        last_name: "HakunaMatata"
    }
    const {error} = await editUser(userEdit, CancelToken);
    console.log(error? error: "Successfully edited user");
}

const deleteUser = async (CancelToken) => {
    const {error} = await deleteUser(CancelToken);
    console.log(error? error: "Successfully deleted user");
}

const getBooks = async (CancelToken) => {
    const {books, error} = await getBooks(CancelToken);
    console.log(error? error: "Successfully retrieved books");
    console.log(books);
}
