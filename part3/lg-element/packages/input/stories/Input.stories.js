import LgInput from '..'

export default{
    title:'LgInput',
    component:LgInput
}

export const Text = ()=> ({
    components:{ LgInput },
    template:`<lg-input v-model="value" placeholder="请输入用户名"></lg-input>`,
    data() {
        return {
            value:'admin'
        }
    },
})

export const Password = ()=> ({
    components:{ LgInput },
    template:`<lg-input v-model="value" type="password" placeholder="请输入用户名"></lg-input>`,
    data() {
        return {
            value:'admin'
        }
    },
})