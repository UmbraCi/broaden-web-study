/**
 * grunt 的入口文件
 * 用于定义一些需要grunt自动执行的任务
 * 需要导出一个函数
 * 此函数接收一个grunt 的形参，内部提供一些创建任务时可以用到的API
 */
module.exports = grunt=>{
    //初始化值，后面可以用grunt.config获取
    grunt.initConfig({
        foo:"foo",
        bar:{
            barProp:"barProp"
        }
    })


    grunt.registerTask("getConfig",()=>{
        console.log(grunt.config("foo"))
        console.log(grunt.config("bar.barProp"))
        console.log(grunt.config("bar").barProp)
    })

    // grunt.registerTask('default',()=>{
    //     console.log("hello grunt")
    // })
    grunt.registerTask("foo",()=>{
        console.log("foo task")
    })
    grunt.registerTask("bar",()=>{
        console.log("bar task")
    })

    grunt.registerTask('default',['foo','bar'])

    //异步任务需要执行this.async()方法返回的函数代表异步任务完成
    //且这里因为要用到this,所以不能用箭头函数
    // grunt.registerTask('async-task',()=>{
    //     setTimeout(() => {
    //         console.log("async-task")
    //     }, 2000);
    // })

    grunt.registerTask('async-task',function(){
        let done = this.async()
        setTimeout(() => {
            console.log("async-task")
            done()
        }, 2000);
    })
}