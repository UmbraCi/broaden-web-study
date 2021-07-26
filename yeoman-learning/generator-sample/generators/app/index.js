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
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )

        //通过模板方式写入文件到目标目录

        // //模板文件路径
        // const tmpl = this.templatePath('foo.txt')
        // //输出目标路径
        // const output = this.destinationPath('foo.txt')
        // //模板文件上下文
        // const context = {title:'hello template',success:false,}
        // this.fs.copyTpl(tmpl,output,context)

        const tmpl = this.templatePath('bar.html')
        const output = this.destinationPath('bar.html')
        const context = this.answer
        this.fs.copyTpl(tmpl,output,context)
    }
}