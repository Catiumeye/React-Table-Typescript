import {Dispatch} from "redux";
import {UserActionType} from "../../types/userReducerTypes";
import {FetchUsersAction, FetchUsersErrorAction, FetchUsersSuccessAction,} from "../reducers/userReducer";
import {getProducts} from "../../service/request";


export const FetchUsers = () => {
    return async (dispatch: Dispatch<UserActionType>) => {
        try {
            const response = await getProducts()
            dispatch(FetchUsersAction())
            dispatch(FetchUsersSuccessAction(response))
        }
        catch (e) {
            dispatch(FetchUsersErrorAction())
        }
    }
}