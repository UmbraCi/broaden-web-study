import createRouteMap from './create-route-map'
import createRoute from './util/route'


export default function createMatcher(routes){
    //把所有的路由规则解析到一个路由表中
    //pathList ->   ['/','/music',.....]
    //pathMap ->    {path:{component...}}
    const { pathList ,pathMap } = createRouteMap(routes)

    // console.log(pathList ,pathMap)
    //根据路由地址匹配一个路由对象
    function match(path){
        const record = pathMap[path]
        if(record){
            return createRoute(record,path)
        }
        return createRoute(null,path)
    }
    //添加路由
    function addRoutes(routes){
        createRouteMap(routes,pathList,pathMap)
    }
    return {
        match,
        addRoutes
    }
} 