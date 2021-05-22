import React, {useEffect, useRef} from "react";
import {useTypedSelector} from "../../hooks/UseTypedSelector";
import {FetchUsers} from "../../store/action-creators/user";
import {useDispatch} from "react-redux";
import {UserItem} from "../../types/userReducerTypes";
import {log} from "util";

export const App: React.FC = () => {
    const dispatch = useDispatch();
    const {loading, error, users} = useTypedSelector(state => state.user)

    useEffect(() => {
        dispatch(FetchUsers());
        error && dispatch(FetchUsers())
    }, [error])
    return (
        <div>
            <ProductList />
        </div>
    )
}
const ProductList: React.FC = () => {
    const {users} = useTypedSelector(state => state.user);
    const ref = useRef(null);
    const renderItems = (arr: Array<UserItem>) => {
        const newList: Array<UserItem> = [];
        for (let i = 0; i < 10; i++) {
            newList.push(arr[i])
        }
        return newList;
    }
    return (
        <div ref={ref}>
            {renderItems(users).map(e => {
                return e && <div key={e.id}>{e.id} {e.product}</div>
            })}
        </div>
    )
}