import createRouteMap from './create-route-map'


export default function createMatcher(routes){
    //把所有的路由规则解析到一个路由表中
    //pathList ->   ['/','/music',.....]
    //pathMao ->    {path:{component...}}
    const { pathList ,pathMap } = createRouteMap(routes)

    console.log(pathList ,pathMap)

    function match(){

    }

    function addRoutes(routes){
        createRouteMap(routes,pathList,pathMap)
    }
    return {
        match,
        addRoutes
    }
} 