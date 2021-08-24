const path =require('path')
module.exports = {
    mode:'none',
    entry:'./src/index.js',        //相对路径  "./"   不能省略
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}