class Watcher{
    constructor(vm,key,cb){
        this.vm = vm
        this.key = key 
        //回调函数负责更新视图
        this.cb = cb

        //把当前的watcher对象记录到Dep的target中去
        Dep.target = this
        //触发get方法，在get方法中会调用addSub
        this.oldValue = vm[key]
        //防止重复添加
        Dep.target = null
    }
    //当数据发生变化的时候更新视图
    update(){
        let newValue = this.vm[this.key]
        if(newValue === this.oldValue){
            //数据没有更新则不更新视图
            return
        }
        this.oldValue = newValue
        this.cb(newValue)
    }
}