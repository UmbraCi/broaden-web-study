/**
 * Task     处理异步任务
 */
const fs = require('fs')
const { task } = require('folktale/concurrency/task');
const { split, find } = require('lodash/fp')

function readFile(filename) {
    return task(resolver => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) resolver.reject(err)

            resolver.reject(data)
        })
    })
}

readFile('package.json')
    .map(split('\n'))
    .map(find(x => x.includes('version')))
    .run()
    .listen({
        onResolved: value => {
            console.log(value)
        },
        onRejected: err => {
            console.log(err)
        }
    })