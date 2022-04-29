const fs = require('fs')

const EventsEmitter = require('events')

const Queue = require('./linkedList')

class MyWriteStream extends EventsEmitter{
    constructor(path,options = {}){
        super()
        this.path = path
        this.flags = options.flags || 'w'
        this.mode = options.mode || 438
        this.autoClose = options.autoClose || true
        this.start = options.start || 0
        this.encoding = options.encoding || 'utf8'
        this.highWaterMark = options.highWaterMark || 16*1024

        this.writeOffset = this.start
        this.writing = false
        this.writeLen = 0       //当前累计写入量
        this.needDrain = false
        this.cache = new Queue()

        this.open()
    }
    open(){
        console.log('open')
        fs.open(this.path,this.flags,(err,fd)=>{
            if(err){
                this.emit('error',err)
            }
            //正常打开文件
            this.fd = fd
            this.emit('open',fd)
        })
    }
    write(chunk,encoding,cb){
        chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)

        this.writeLen += chunk.length
        console.log(this.writeLen) 
        let flag = this.writeLen < this.highWaterMark

        this.needDrain = !flag

        if(this.writing){
            //当前正在执行写入，所以内容应该排队
            this.cache.enQueue({chunk,encoding,cb})
            console.log("排队")
        }else{
            //当前不是正在写入    那么就执行写入
            this.writing = true
            this._write(chunk,encoding,()=>{
                cb()
                //清空排队的内容
                this._clearBuffer()
            })
        }

        return flag
        
    }
    _write(chunk,encoding,cb){
        if(typeof this.fd !== 'number'){
            return this.once('open',()=>{
                return this._write(chunk,encoding,cb)
            })
        }
        console.log('fd:---------------------'+this.fd)
        fs.write(this.fd,chunk,this.start,chunk.length,this.writeOffset,(err,written)=>{
            console.log("写入文件成功")
            this.writeOffset += written
            this.writeLen -= written
            cb && cb()
        })
    }
    _clearBuffer(){
        let data = this.cache.deQueue()
        // console.log(data)
        if(data){
            this._write(data.element.chunk,data.element.encoding,()=>{
                data.element.cb && data.element.cb()
                this._clearBuffer()
            })
        }else{
            if(this.needDrain){
                this.needDrain = false
                this.emit('drain')
            }
        }
    }
}

const ws = new MyWriteStream('f9.txt',{
    highWaterMark:2
})

ws.on('open',(fd)=>{
    console.log('open------->',fd)
})

let flag = ws.write('1','utf8',()=>{
    console.log('write1')
})

// console.log(flag)

flag =  ws.write('10','utf8',()=>{
    console.log('write10')
})

flag =  ws.write('教育机构','utf8',()=>{
    console.log('write教育机构')
})


ws.on('drain',()=>{
    console.log('drain')
})
// console.log(flag)
