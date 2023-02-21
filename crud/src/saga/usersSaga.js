import * as usersService from "../API/usersService";
import * as actionType from "../redux/const/actionType";
import { call, put } from "@redux-saga/core/effects";
import { actSuccess } from "../redux/actions";

export const getUser = function* () {
    try {
        let listStudent = yield call(usersService.GET_USER)
        yield put(actSuccess(listStudent))
    } catch (error) {

    }
}

export const postUser = function* (action) {
    try {
        // Thêm mới
        yield call(usersService.POST_USER, action.payload)
        // Sau khi thêm mới thành công -> gọi getUsers
        yield getUser()
    } catch (error) {

    }

}

export const delUser = function* (action) {
    try {
        yield call(usersService.DEL_USER, action.payload)
        yield getUser()
    } catch (error) {
        
    }
}

export const updateUser = function* (action) {
    try {
        yield call(usersService.UPDATE_USER, action.payload)
        yield getUser()
    } catch (error) {
        
    }
}

// export const deleteUser = function* () {
//     try {
//         let listStudent = yield call(usersService.DEL_USER)
//         yield put(all_act(actionType.SUCCESS ,listStudent))
//     } catch (error) {

//     }
// }


