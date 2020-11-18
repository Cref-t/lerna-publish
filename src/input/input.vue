<template>
  <div>
    <input :type="type" :value="value" @input='handleInput' />
  </div>
</template>

<script>
export default {
    name:'TlInput',
    props:{
      type:{
        type:String,
        default:'text'
      },
      value:{

      }
    },
    methods:{
      handleInput(evt){
        this.$emit('input',evt.target.value);
        const findParent = parent =>{
            while(parent){
               if( parent.$options.name=='TlFromItem' ){
                   break;
                }
                parent = parent.$parent;
                findParent(parent);
            }
          return parent
        }
        const parent = findParent(this.$parent);
        if(parent){
           parent.$emit('validator');
        }
      }
    }
}
</script>

<style>

</style>
