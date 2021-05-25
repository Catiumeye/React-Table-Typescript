export enum UserActions {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

type FetchUsersAction = {
    type: typeof UserActions.FETCH_USERS
}
type FetchUsersSuccessAction = {
    type: typeof UserActions.FETCH_USERS_SUCCESS
    payload: Array<object>
}
type FetchUsersErrorAction = {
    type: typeof UserActions.FETCH_USERS_ERROR
}
export type UserItem = {
    calories: number,
    carbs: number,
    fat: number,
    id: number,
    iron: number,
    product: string,
    protein: number
}
export type UserActionType = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
export interface IState {
    users: Array<UserItem | []>
    loading: boolean
    error: boolean
}