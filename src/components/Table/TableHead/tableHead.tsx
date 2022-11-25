import { FC } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { isSortable } from './../utils/isSortable';



interface IThead{
    headers: Array<any>
    sortRows: (any: any, ...args: any)=>any
    showIcon?: boolean
    orderByKey?: string
    orderByDirection?: number
    sortBy?: Array<string>
}

const HeaderLabel: FC<any> = ({headerTitle, showIcon, activeHeader, direction, sortBy, ...props}) => {
    return (
        <div {...props}>
                <span className="header-cell">{headerTitle}</span>
                
                {
                isSortable(headerTitle, sortBy)? 
                <span className="header-cell">
               
                    <span className={`${headerTitle === activeHeader? 'is-active': 'is-not-active'}`}>
                        {(showIcon ? direction === 1 ? <AiOutlineArrowDown/> : <AiOutlineArrowUp/>  : null)}
                    </span>
                                
                </span>: null
                }
                

        </div>
    )
}

const TableHead: FC<IThead>= ({headers, sortRows, showIcon, orderByKey, orderByDirection, ...props}) => {
    return (<thead>
        <tr>
        {headers.map((header)=>{
                return <th key={header.title}>
                            <HeaderLabel
                                headerTitle={header.title}
                                onClick={()=>sortRows(header.title)}
                                direction={orderByDirection}
                                activeHeader={orderByKey} 
                                showIcon={showIcon}
                               {...props}
                            />
                        </th>          
        })}
        </tr>
    </thead>)
}

export default TableHead;