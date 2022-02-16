<template>
    <div>
        <h1>Foo{{ msg }}</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import Component from 'vue-class-component';
//常规方式
// export default {
//     created:123
// }

//推荐：Options APIs
export default Vue.extend({
    name: 'Foo',
    data() {
        return {
            msg: 'Options APIs',
        };
    },
    // created(){

    // }
});

//Class APIs
// @Component
// export default class Foo extends Vue{
//     msg = "123"
// }
</script>
