import users from "../redux/reducers/users";
import { instance } from "./axios";

// Xây dựng các service để gọi API - xử lí bất đồng bộ (async - await)

export const GET_USER = async () => {
    let response = await instance.get('users')
    return response.data
}

export const POST_USER = async(newUser) => {
    await instance.post('users',newUser)
}

export const DEL_USER = async(delUser) => {
    console.log(delUser.id);
    await instance.delete(`users/${delUser.id}`)
}

export const UPDATE_USER = async(updateUser) => {
    await instance.put(`users/${updateUser.id}`, updateUser)
}