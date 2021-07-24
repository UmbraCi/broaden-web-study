#!/usr/bin/env node

//Node CLI应用入口文件必须要有这样的文件头
//如果Linux 或者 macOS系统下还需要修改此文件的读写权限为755
//具体就是通过chmod 755 cli.js实现修改

console.log('cli working')

/**
 * 脚手架的工作过程:
 * 1.通过命令行询问交互
 * 2.根据用户回答的结果生成文件
 */

const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')

inquirer.prompt([
    {
        type:'input',
        name:'name',
        message:'Project name?'
    }
]).then(answer=>{
    // console.log(answer)
    //根据用户回答的问题生成文件

    //模板目录
    const temlDir = path.join(__dirname,'templates')
    //目标目录
    const destDir = process.cwd()

    //将模板下面的文件全部转换到目标文件
    fs.readdir(temlDir,(err,files)=>{
        if(err) throw err

        files.forEach(item=>{
            console.log(item)
            //通过模板引擎渲染文件
            ejs.renderFile(path.join(temlDir,item),answer,(error,result)=>{
                if(err) throw error

                console.log(result)
                fs.writeFileSync(path.join(destDir,item),result)
            })
        })
    })
})

