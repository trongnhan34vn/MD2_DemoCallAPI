import * as usersService from "../API/usersService";
import * as actionType from "../redux/const/actionType";
import {all, takeLatest} from 'redux-saga/effects'
import * as usersSaga from "./usersSaga";

export const rootSaga = function*() {
    yield all(
        [
            takeLatest(actionType.GET_USER,usersSaga.getUser),
            takeLatest(actionType.POST_USER,usersSaga.postUser),
            takeLatest(actionType.DEL_USER,usersSaga.delUser),
            takeLatest(actionType.UPDATE_USER,usersSaga.updateUser),
        ]
    )
}