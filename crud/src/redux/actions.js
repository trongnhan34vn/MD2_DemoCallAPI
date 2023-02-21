import * as actionType from "./const/actionType";

export const actGetUser = () => {
    return (
        {
            type: actionType.GET_USER
        }
    )
}

export const actSuccess = (data) => { 
    return {
        type: actionType.SUCCESS,
        payload: data
    }
}

export const actCreateUser = (newUser) => {
    return {
        type: actionType.POST_USER,
        payload: newUser
    }
}

export const actDelUser = (student) => {
    return {
        type: actionType.DEL_USER,
        payload: student
    }
}

export const actUpdateUser = (student) => {
    return {
        type: actionType.UPDATE_USER,
        payload: student
    }
}

// export const all_act = (type, payload) => {
//   if (payload) {
//     return {
//         type,
//     }
//   } else {
//     return {
//         type, payload
//     }
//   }
// }