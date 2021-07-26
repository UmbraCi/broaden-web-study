//入口文件


exports.foo = (done)=>{
    console.log('hello gulp')
    done()      //任务完成
}

// module.exports = {
//     foo : (done)=>{
//         console.log('hello gulp')
//         done()      //任务完成
//     }
// }

exports.default = done =>{
    console.log("default task")
    done()
}


const gulp = require('gulp')
//现在已经不推荐这么导出任务了
gulp.task('bar',done=>{
    console.log('bar task')
    done()
})