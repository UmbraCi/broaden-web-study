import LgButton from '../'

export default{
    title:'LgButton',
    component:LgButton
}

export const Button = ()=> ({
    components:{ LgButton },
    template:`<lg-button @click="handleClick">stories按钮</lg-button>`,
    data() {
        return {
            
        }
    },
    methods: {
        handleClick(){
            console.log('父组件接收到了这个emit')
        }
    },
})