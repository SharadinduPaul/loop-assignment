import { HeaderTypes, RowTypes } from "../types/tableDataTypes";

export const getAllFilterOptions = (data:RowTypes[], headers: HeaderTypes[]) => {
    const hashMap:any = {}

    headers.forEach(header => hashMap[header] = {})

    return new Promise((resolve, reject) => {
        try{
            data.forEach((row:any)=>{
                Object.keys(row).forEach((header)=>{
                    if( header !== 'id' && !hashMap[header][row[header]]){
                        hashMap[header][row[header]] = 1                        
                    }
                })
            })
            console.log(hashMap)
            resolve(hashMap)
        }catch(err){
            console.log(err)
            reject(err)
        }
    })
}