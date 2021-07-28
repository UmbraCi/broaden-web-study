/**
 * gulp自带的文件写入流和读取流AIPsrc,dest
 * gulp转换css插件 gulp-clean-css(压缩)
 * gulp 重命名插件 gulp-rename
 */

const {src,dest} = require('gulp')
const cleanCss =  require('gulp-clean-css')
const rename = require('gulp-rename')

exports.default = ()=>{
    return src('src/*.css')
        .pipe(cleanCss())
        .pipe(rename({extname:'.min.css'}))
        .pipe(dest('dist'))
}