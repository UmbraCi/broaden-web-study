const {series,parallel} = require('gulp')

const task1 = done=>{
    console.log('task1 done')
    done()
}

const task2 = done=>{
    console.log('task2 done')
    done()
}

const task3 = done=>{
    console.log('task3 done')
    done()
}

exports.foo = series(task1,task2,task3)

exports.bar = parallel(task1,task2,task3)