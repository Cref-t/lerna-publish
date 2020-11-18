import TlForm from '../'
import TlFormItem from '../../formItem/'
import TlInput from '../../input/'
import TlButton from '../../button/'

export default {
   title:'tl-form',
   component: TlForm,
}

export const ordinaryForm = ()=>({
   components: { TlForm,TlFormItem,TlInput,TlButton },
   template: ` <tl-form :model='user' :rules='rules'>
                 <tl-form-item label='用户名' prop='username'>
                   <tl-input :value='user.username' @input='user.username=$event'></tl-input>
                 </tl-form-item>
                 <tl-form-item label='密码' prop='password'>
                   <tl-input type='password' v-model=user.password></tl-input>
                 </tl-form-item>
                 <tl-form-item>
                   <tl-button>登录</tl-button>
                 </tl-form-item>
               </tl-form>`,
   provide(){
     return{
       form:this
     }
   },
   data(){
     return{
       user:{
          username:'',
          password:'',
       },
       rules:{
         username:{
           required:true,
           message:'用户名不能为空'
         },
         password:{
           min:6,
           message:'密码不能少于6位数字'
         }
       }
     }
   }
})
