const isObject = val => val !==null && typeof val === 'object';
const convert = target => isObject(target) ? reactive(target) : target;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (target, key)=> hasOwnProperty.call(target, key);

export function reactive(target){
    if(!isObject(target))    return target
    const handler = {
        get(target, key, receiver){
            //收集依赖
            console.log('get',key)
            const result = Reflect.get(target, key, receiver)
            //递归调用
            return convert(result)
        },
        set(target, key, value, receiver){
            const oldValue = Reflect.get(target, key, receiver)
            let result = true
            if(oldValue !== value){
                //新旧值不相同
                result = Reflect.set(target, key, value, receiver)
                //触发更新
                console.log('set',key,value)
            }
            return result
        },
        deleteProperty(target, key){
            const hadKey = hasOwn(target, key)
            const result = Reflect.deleteProperty(target, key)
            if(hadKey && result){
                //触发更新
                console.log('delete',key)
            }
            return result
        }
    }
    return new Proxy(target, handler)
}