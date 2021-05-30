import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/UseTypedSelector";
import {FetchUsers} from "../../store/action-creators/user";
import {useDispatch} from "react-redux";
import {ProductList} from "../ProductList/ProductList";

export const App: React.FC = () => {
    const dispatch = useDispatch();
    const {loading, error, users} = useTypedSelector(state => state.user)

    useEffect(() => {
        dispatch(FetchUsers());
        error && dispatch(FetchUsers())
    }, [dispatch, error])

    return (
        <div>
            <ProductList users={users}/>
        </div>
    )
}
