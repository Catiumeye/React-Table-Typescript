import {IState, UserActions, UserActionType, UserItem} from "../../types/userReducerTypes";

const initState: IState = {
    loading: false,
    error: false,
    users: []
}

export const userReducer = (state = initState, action: UserActionType) => {
    switch (action.type) {
        case UserActions.FETCH_USERS:
            return {...state, loading: true, error: false, users: state.users}
        case UserActions.FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case UserActions.FETCH_USERS_ERROR:
            return {...state, loading: false, error: true}
        default:
            return state
    }
}

export const FetchUsersAction = ():UserActionType => ({type: UserActions.FETCH_USERS})
export const FetchUsersErrorAction = ():UserActionType => ({type: UserActions.FETCH_USERS_ERROR})
export const FetchUsersSuccessAction = (payload: Array<UserItem>):UserActionType => ({
    type: UserActions.FETCH_USERS_SUCCESS,
    payload
})