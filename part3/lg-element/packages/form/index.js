import Form from './src/form.vue';

Form.install = Vue =>{
    Vue.comments(Form.name,Form)
}

export default Form