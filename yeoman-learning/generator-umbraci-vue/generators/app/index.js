/**
 * 此文件为Generator的核心入口
 * 需要导出一个继承自 Yeoman Generator的类型
 * Yeoman Generator 在工作的时候会自动调用此类型中定义的一些生命周期方法
 * 我们在这些方法中可以通过调用父类舔狗吗和的一些工具方法实现一些功能，例如文件写入
 */

 const Generator = require('yeoman-generator')

 module.exports = class extends Generator{
     //yeoman在询问用户环节会调用这个方法
     //这个方法中科院调用父类的prompt()方法发出对用户的命令行询问
     prompting(){
         return this.prompt([
             {
                 type:'input',
                 name:'name',
                 message:'please input your project name',
                 default:this.appname,           //appname为项目生成目录名称
             }
         ]).then(answer=>{
             //answer => {name:'user input value'}
             this.answer = answer
         })
     }
     //Yeoman会在生成文件阶段自动调用这个钩子函数
     writing(){
         //把每个文件都通过模板转换到目标路径
         const templates = [
            '.eslintignore',
            '.eslintrc.js',
            '.gitignore',
            '.prettierrc',
            'babel.config.js',
            'jsconfig.json',
            'package.json',
            'README.md',
            'yarn.lock',
            '.vscode/settings.json',
            'public/favicon.ico',
            'public/index.html',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/App.vue',
            'src/main.js' 
         ]
         templates.forEach(item=>{
             this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answer
             )
         })
     }
 }