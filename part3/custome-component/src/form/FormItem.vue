<template>
    <div>
        <label for="">{{label}}</label>
        <div>
            <slot></slot>
            <p v-if="errMessage">{{errMessage}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'lgFormItem',
    props:{
        label:{
            type:String,
        },
        prop:{
            type:String
        }
    },
    data() {
        return {
            errMessage:''
        }
    },
}
</script>