export interface ITable{
    headers: Array<any>
    rows: Array<Rows>
}


export interface Rows{
    [key: string]: any
}