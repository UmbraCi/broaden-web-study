const sass = require('sass')

const loadGruntTasks = require('load-grunt-tasks')

module.exports = grunt => {
    grunt.initConfig({
        clean:{
            // temp:'temp/*.txt'
            // temp:'temp/**'
        },
        sass:{
            options:{
                sourceMap:true,
                implementation:sass
            },
            main:{
                files:{
                    'dist/css/main.css':'src/scss/main.scss'
                }
            }
        },
        babel:{
            options:{
                sourceMap:true,
                presets:['@babel/preset-env']
            },
            main:{
                files:{
                    'dist/js/app.js':'src/js/app.js'
                }
            }
        },
        watch:{
            js:{
                files:['src/js/**'],
                tasks:['babel']
            },
            css:{
                files:['src/scss/**'],
                tasks:['sass']
            }
        }
    })
    // grunt.loadNpmTasks('grunt-contrib-clean')
    // grunt.loadNpmTasks('grunt-sass')
    loadGruntTasks(grunt)   //自动加载所有grunt插件中的任务

    grunt.registerTask('default',['sass','babel','watch'])
}