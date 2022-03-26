<template>
    <lg-form class="form" ref="form" :model="user" :rules="rules">
        <lg-form-item label="用户名" prop="username">
            <lg-input v-model="user.username"></lg-input>
        </lg-form-item>
        <lg-form-item label="密码" prop="password">
            <lg-input type="password" v-model="user.password"></lg-input>
        </lg-form-item>
        <lg-form-item label="用户名" prop="username">
            <lg-button type="primary" @click="login">登录</lg-button>
        </lg-form-item>
    </lg-form>
</template>

<script>
export default {
    
}
</script>