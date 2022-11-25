export interface ITable{
    headers: Array<Headers>
    rows: Array<Rows>
}


export interface Rows{
    [key: string]: any
}
export interface Headers{
    title: string
    [key: string]: any
}