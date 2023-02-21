import * as actionType from "../const/actionType";

const initState = []

const users = (state = initState, action) => {
    switch (action.type) {
        case actionType.SUCCESS:
            return [...action.payload]
        default:
            return state
    }
}

export default users