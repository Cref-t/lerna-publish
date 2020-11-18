<template>
  <div>
     <label>{{label}}</label>
     <slot></slot>
     <div v-if="errorMessage">{{errorMessage}}</div>
  </div>
</template>

<script>
import asyncValidator from 'async-validator'
export default {
    name:'TlFromItem',
    data(){
      return{
        errorMessage:""
      }
    },
    props:{
      label:{
        type:String,
      },
      prop:{
        type:String,
      },
    },
    inject:['form'],
    mounted(){
      this.$on('validator',()=>{
          this.validate()
      })
    },
    methods:{
      validate(){
         if(!this.prop) return;
         const value = this.form.user[this.prop];
         const rule = this.form.rules[this.prop];

         const descriptor = {[this.prop]:rule};
         const validator = new asyncValidator(descriptor)

         validator.validate({[this.prop]:value},(err,fields) => {
           if(err){
             console.log(err)
             this.errorMessage = err[0].message
             console.log(fields)
           }
           else{
             this.errorMessage = ''
           }
         });
      }
    }
}
</script>

<style>

</style>
