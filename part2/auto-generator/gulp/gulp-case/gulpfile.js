const {src,dest,parallel,series,watch} = require('gulp')

const del = require('del')

const browserSync = require('browser-sync')
const bs = browserSync.create()

//自动加载所有gulp前缀的插件
const loadPlugins = require('gulp-load-plugins')
const plugins = loadPlugins()

const data = {
    menus: [
      {
        name: 'Home',
        icon: 'aperture',
        link: 'index.html'
      },
      {
        name: 'Features',
        link: 'features.html'
      },
      {
        name: 'About',
        link: 'about.html'
      },
      {
        name: 'Contact',
        link: '#',
        children: [
          {
            name: 'Twitter',
            link: 'https://twitter.com/w_zce'
          },
          {
            name: 'About',
            link: 'https://weibo.com/zceme'
          },
          {
            name: 'divider'
          },
          {
            name: 'About',
            link: 'https://github.com/zce'
          }
        ]
      }
    ],
    pkg: require('./package.json'),
    date: new Date()
  }

const clean = ()=>{
    return del(['dist'])
}


const style = ()=>{
    return src('src/assets/styles/*.scss',{base:'src'})
        .pipe(plugins.sass({outputStyle:'expanded'}))                    
        .pipe(dest('dist'))
        .pipe(bs.reload({stream:true}))
}

const script = ()=>{
    return src('src/assets/scripts/*.js')
        .pipe(plugins.babel({presets:['@babel/preset-env']}))
        // .pipe(babel())
        .pipe(dest('dist'))
        .pipe(bs.reload({stream:true}))
}

const page = ()=>{
    return src('src/*.html',{base:'src'})
        .pipe(plugins.swig({data}))
        .pipe(dest('dist'))
        .pipe(bs.reload({stream:true}))
}

const image = ()=>{
    return src('src/assets/images/**',{base:'src'})
        .pipe(plugins.imagemin())
        .pipe(dest('dist'))
}

const font = ()=>{
    return src('src/assets/font/**',{base:'src'})
        .pipe(plugins.imagemin())
        .pipe(dest('dist'))
}

const extra = ()=>{
    return src('public/**',{base:'public'})
        .pipe(dest('dist'))
}

const serve = ()=>{
  watch('src/assets/styles/*.scss',style),
  watch('src/assets/scripts/*.js',script),
  watch('src/*.html',page),
  // watch('src/assets/images/**',image),
  // watch('src/assets/font/**',font),
  // watch('public/**',extra),

  watch([
    'src/assets/images/**',
    'src/assets/font/**',
    'public/**'
  ] , bs.reload)


  bs.init({
    notify:false,
    // files:'dist/**',
    server:{
      baseDir:['dist','src','public'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}


const useref = ()=>{
  return src('dist/*.html',{base:'dist'})
          .pipe(plugins.useref({searchPath : ['dist','.']}))
          .pipe(dest('dist'))
}

const compile = parallel(style,script,page)

const build = series(clean,parallel(compile,extra,image,font))

const develop = series(compile,serve)

module.exports = {
    clean,
    style,
    script,
    page,
    image,
    font,
    compile,
    build,
    serve,
    develop,
    useref
}