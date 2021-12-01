export default function createRoute(record,path){
    //匹配path匹配到的所有record
    const matched = []
    while(record){
        matched.unshift(record)
        record = record.parent
    }
    return {
        path,
        matched
    }
}