<template>
  <div>
    <input v-bind="$attrs" :type="type" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: "lgInput",
  inheritAttrs: false,
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
    },
  },
  methods: {
      handleInput(event){
          this.$emit('input',event.target.value)
          const findParent = parent =>{
              while(parent){
                  if(parent.$options.name == 'lgFormItem'){
                      break
                  }else{
                      parent = parent.$parent
                  }
              }
              return parent
          }
          const parent = findParent(this.$parent)
          if(parent){
              parent.$emit('validate')
          }
      }
  },
};
</script>