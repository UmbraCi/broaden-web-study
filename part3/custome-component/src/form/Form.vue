<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
    name:'lgForm',
    props:{
        model:{
            type:Object,
        },
        rules:{
            type:Object
        }
    }
}
</script>