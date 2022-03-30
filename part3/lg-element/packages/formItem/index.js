import FormItem from './src/FormItem.vue';

FormItem.install = Vue =>{
    Vue.comments(FormItem.name,FormItem)
}

export default FormItem