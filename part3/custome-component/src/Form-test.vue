<template>
    <lg-form class="form" ref="form" :model="user" :rules="rules">
        <lg-form-item label="用户名" prop="username">
            <lg-input v-model="user.username"></lg-input>
        </lg-form-item>
        <lg-form-item label="密码" prop="password">
            <lg-input type="password" v-model="user.password"></lg-input>
        </lg-form-item>
        <lg-form-item>
            <lg-button type="primary" @click="login">登录</lg-button>
        </lg-form-item>
    </lg-form>
</template>

<script>
import LgForm from './form/Form.vue'
import lgFormItem from './form/FormItem'
import LgInput from './form/Input'
import lgButton from './form/Button'
export default {
    components:{
        LgForm,
        lgFormItem,
        LgInput,
        lgButton
    },
    data() {
        return {
            user:{
                username:'',
                password:''
            },
            rules:{},
        }
    },
    methods: {
        login(){}
    },
}
</script>