import Button from './src/button.vue';

Button.install = Vue =>{
    Vue.comments(Button.name,Button)
}

export default Button