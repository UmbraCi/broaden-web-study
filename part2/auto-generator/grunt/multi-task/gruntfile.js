module.exports = grunt => {
    grunt.initConfig({
        build:{
            options:{
                foo:"bar"
            },
            css:{
                options:{
                    foo:'baz'
                }
            },
            // css:"1",
            js:'2'
        }
    })
    grunt.registerMultiTask("build",function(){
        console.log(this.options().foo)
        console.log(`target: ${this.target},data:${this.data}` )
    })
}