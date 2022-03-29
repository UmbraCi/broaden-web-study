<template>
  <lg-form class="form" ref="form" :model="user" :rules="rules">
    <lg-form-item label="用户名" prop="username">
      <lg-input v-model="user.username" placeholder="请输入用户名"></lg-input>
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
import LgForm from "./form/Form.vue";
import lgFormItem from "./form/FormItem";
import LgInput from "./form/Input";
import lgButton from "./form/Button";
export default {
  components: {
    LgForm,
    lgFormItem,
    LgInput,
    lgButton,
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { type: "string", required: true, message: "Name is required" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: {
          type: "string",
          required: true,
          message: "password is required",
        },
      },
    };
  },
  methods: {
    login() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>