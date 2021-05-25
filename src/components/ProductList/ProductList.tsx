import React, {useEffect, useMemo, useState} from "react";
// import {useTypedSelector} from "../../hooks/UseTypedSelector";
import {UserItem} from "../../types/userReducerTypes";
import pageStyles from "../../styles/pagination.module.css";
import DeleteIcon from "@material-ui/icons/Delete";

interface IProductList {
    users: Array<UserItem>
}

export const ProductList: React.FC<IProductList> = ({users}) => {
    const [quantityItems, setQuantityItems] = useState<number>(20);
    const [quantityPages, setQuantityPages] = useState<number | null>(null);
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const [renderTo, setRenderTo] = useState<number>(20);

    useEffect(() => {
        setQuantityPages(() => users.length/quantityItems)
    }, [users])
    
    const tabsRender = (list: Array<UserItem>) => {
        return renderItems(users, renderTo - quantityItems, renderTo)
    }

    const renderItems = (arr: Array<UserItem>, from: number, to: number) => {
        const newList: Array<UserItem> = [];
        for (from; from < to; from++) {
            newList.push(arr[from])
        }
        return newList;
    }

    const switchTab = (e: any) => {
        const clickPage = Number(e.target.lastChild.data)
        setRenderTo(quantityItems*selectedPage)
        setSelectedPage(() => clickPage)
    }

    const vdv = useMemo(() => tabsRender(users), [users, renderItems])
    return (
        <div>
            <ul className={pageStyles.paginationUl}>
                <li className={pageStyles.paginationLi} onClick={(e) => switchTab(e)}>
                    {selectedPage-2 <= 0 ? 1 : selectedPage-2}</li>
                <li className={pageStyles.paginationLi} onClick={(e) => switchTab(e)}>
                    {selectedPage-1 <= 0 ? 1 : selectedPage-1}</li>
                <li className={pageStyles.paginationLi} onClick={(e) => switchTab(e)}>{selectedPage}</li>
                <li className={pageStyles.paginationLi} onClick={(e) => switchTab(e)}>{selectedPage+1}</li>
                <li className={pageStyles.paginationLi} onClick={(e) => switchTab(e)}>{selectedPage+2}</li>
            </ul>
            {vdv.map(e => {
                return e && <div key={e.id} className='vdv'>{e.id} {e.product} <DeleteIcon htmlColor='cyan' /></div>
            })}
        </div>
    )
}