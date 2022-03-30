import Input from './src/input.vue';

Input.install = Vue =>{
    Vue.comments(Input.name,Input)
}

export default Input