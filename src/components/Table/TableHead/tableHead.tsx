import { FC } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';



interface IThead{
    headers: Array<any>
    sortRows: (any: any, ...args: any)=>any
    labelIcon?: any
    orderByKey?: string
    orderByDirection?: number
}

const HeaderLabel: FC<any> = ({headerTitle, icon, activeHeader, direction, ...props}) => {
    return (
        <div className="header-cell" {...props}>
                <span>{headerTitle}</span>
                <span className={`${headerTitle === activeHeader? 'is-active': 'is-not-active'}`}>
                    {(icon ? direction === 1 ? <AiOutlineArrowDown/> : <AiOutlineArrowUp/>  : null)}
                </span>

        </div>
    )
}

const TableHead: FC<IThead>= ({headers, sortRows, labelIcon, orderByKey, orderByDirection}) => {
    return (<thead>
        <tr>
        {headers.map((header)=>{
                return <th key={header.title}>
                            <HeaderLabel
                                headerTitle={header.title}
                                onClick={()=>sortRows(header.title)}
                                direction={orderByDirection}
                                activeHeader={orderByKey} 
                                icon={labelIcon}
                            />
                        </th>          
        })}
        </tr>
    </thead>)
}

export default TableHead;