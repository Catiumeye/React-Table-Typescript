import React, {useEffect, useState} from "react";
import {UserItem} from "../../types/userReducerTypes";
import './Pagination.scss';

interface IProductList {
    users: Array<UserItem>
}

export const ProductList: React.FC<IProductList> = ({users}) => {
    const [quantityItems, setQuantityItems] = useState<number>(20);
    const [quantityPages, setQuantityPages] = useState<number>(0);
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const [renderTo, setRenderTo] = useState<number>(20);

    useEffect(() => {
        setQuantityPages(() => users.length/quantityItems)
    }, [users])
    
    const renderItems = (arr: Array<UserItem>, from: number, to: number) => {
        const newList: Array<UserItem> = [];
        for (from; from < to; from++) {
            newList.push(arr[from])
        }
        return newList;
    }

    const switchTab = (e: any) => {
        const clickPage = Number(e.target.lastChild.data)
        setSelectedPage(() => clickPage)
        setRenderTo(() => quantityItems*clickPage)
        
    }

    return (
        <div className='container'>
            <ul className='pagination'>
                {selectedPage - 2 >= 1 && <li className='pagination__item' onClick={(e) => switchTab(e)}>{selectedPage-2}</li>}
                {selectedPage - 1 >= 1 && <li className='pagination__item' onClick={(e) => switchTab(e)}>{selectedPage-1}</li>}
                <li className='pagination__item pagination__item_selected' onClick={(e) => switchTab(e)}>{selectedPage}</li>
                {selectedPage < quantityPages && <li className='pagination__item' onClick={(e) => switchTab(e)}>{selectedPage+1}</li>}
                {selectedPage + 1 < quantityPages && <li className='pagination__item' onClick={(e) => switchTab(e)}>{selectedPage+2}</li>}
            </ul>
            <div>
                {renderItems(users, renderTo - quantityItems, renderTo).map(e => {
                return e && <div key={e.id}>{e.id} {e.product}</div>
            })}
            </div>
        </div>
    )
}