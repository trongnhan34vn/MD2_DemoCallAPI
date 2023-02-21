import students from "./students";
import users from "./users";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({users, students});