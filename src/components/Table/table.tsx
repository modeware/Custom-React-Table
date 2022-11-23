import { FC, useState, useEffect } from "react";
import { ITable } from "./tableInterface";
import { ITableProps } from './tablePropsInterface';

enum Direction {
    ASCENDING, //0
    DESCENDING, //1
    ORIGINAL//2
  }
   

const Table: FC<ITableProps> = ({tableData}) => {
    let [currentSortingOrder, setSortingOrder] = useState(Direction.ORIGINAL)
    let {headers, rows} = tableData;
    let [tableRows, setTableRows] = useState(rows || [])




    const sortRows = (key: string)=>{
        let sortedData = tableRows.sort((a: any, b: any)=>{
            debugger
            switch(currentSortingOrder){
                case Direction.ASCENDING || Direction.ORIGINAL:
                        if (a[key] > b[key]){
                            return -1
                        }else if (a[key] < b[key]){
                            return 1
                        }
                        else{
                            return 0
                        }
                 
                case Direction.DESCENDING:
                        if (a[key] > b[key]){
                            return 1
                        }else if (a[key] < b[key]){
                            return -1
                        }
                        else{
                            return 0
                        }

                default: 
                    return 0;
                
            }

        })
        if(currentSortingOrder === Direction.ORIGINAL || currentSortingOrder === Direction.ASCENDING){
            setTableRows(sortedData)
            setSortingOrder(Direction.DESCENDING)
        }
        else{
            setTableRows(sortedData)
            setSortingOrder(Direction.ORIGINAL)
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
                /*
                        render rows
                */
                <tr key={index}>
                    {
                            /*render cells*/
                            headers.map((header: any, index)=>{
                                return(<td key={index}>
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