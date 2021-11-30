export default function createRouteMap(routes,oldPathList,oldPathMap){
    const pathList = oldPathList || []
    const pathMap =oldPathMap || {}
    //遍历解析所有路由规则
    routes.forEach(route => {
        addRouteRecord(route,pathList,pathMap)
    });


    return {
        pathList,
        pathMap
    }
}
//解析route  把解析好的规则放入 pathList,pathMap
function addRouteRecord(route,pathList,pathMap){
    const path = route.path
    const record = {
        path,
        component:route.component
    }
    //如果已经有则跳过
    if(!pathMap[path]){
        pathList.push(path)
        pathMap[path] = record
    }
    //如果有子路由
    if(route.children){
        route.children.forEach(childRoute=>{
            addRouteRecord(childRoute,pathList,pathMap)
        })
    }
}