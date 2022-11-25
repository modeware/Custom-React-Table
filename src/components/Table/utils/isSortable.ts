export const isSortable = (key: string, keys: Array<string>) => {

    if(keys.includes(key)){
        return true
    }
    return false
}