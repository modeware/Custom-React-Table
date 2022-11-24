import { FC, useState } from "react";
import { ITableProps } from './tablePropsInterface';
import './table.css'

enum Direction {
    ASCENDING, //0
    DESCENDING, //1
    ORIGINAL//2
}
   
const Table: FC<ITableProps> = ({tableData, sortBy}) => {
    let [currentSortingOrder, setSortingOrder] = useState(Direction.ORIGINAL)
    let {headers, rows} = tableData;
    let [tableRows, setTableRows] = useState(rows || [])

    const getSortValues = (a : any, b: any, key: any) => {
        switch(currentSortingOrder){
            case Direction.ORIGINAL:
                if (a[key] > b[key]){
                    return -1
                }else if (a[key] < b[key]){
                    return 1
                }else{
                    return 0
                }
            case Direction.ASCENDING:
                    if (a[key] > b[key]){
                        return -1
                    }else if (a[key] < b[key]){
                        return 1
                    }else{
                        return 0
                    }
             
            case Direction.DESCENDING:
                    if (a[key] > b[key]){
                        return 1
                    }else if (a[key] < b[key]){
                        return -1
                    }else{
                        return 0
                    }
            default: 
                return 0;
    }
}

    const sortRows = (key: string)=>{
        if(!(sortBy.includes(key))){
            return
        }
        let sortedData = tableRows.sort((a: any, b: any)=>{
            return getSortValues(a, b, key);               
        })
        if(currentSortingOrder === Direction.ORIGINAL || currentSortingOrder === Direction.ASCENDING){
            setTableRows(sortedData)
            setSortingOrder(Direction.DESCENDING)
        }
        else{
            setTableRows(sortedData)
            setSortingOrder(Direction.ASCENDING)
        }       
    }

    return (
        <table>
            <thead>
            <tr>
                {
                    /*
                        render headers
                    */
                headers.map((header: any, index)=>{
                     return <th key={index} onClick={()=>sortRows(header.title)}>{header.title}</th>          
                })}
            </tr>
            </thead>
           <tbody> 
        {tableRows.map((row: any, index)=>{
            return (
                /*render rows*/
                <tr key={index}>
                    {
                        /*render cells*/
                        headers.map((header: any, index)=>{
                            return (<td key={index}>
                                        {row[header.title]}       
                                    </td>)
                            })
                        
                    }
                </tr>
            )
        })}
        </tbody>
    </table>)

}


export default Table;