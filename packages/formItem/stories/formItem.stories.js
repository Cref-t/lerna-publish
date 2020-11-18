import TlFormItem from '../'
import TlInput from '../../input'

export default {
  title:'TlFormItem',
  component:TlFormItem,
}

export const formItem = ()=>({
   components:{ TlFormItem,TlInput },
   template:`<tl-form-item label='用户名'>
               <tl-input v-model='user'></tl-input>
             </tl-form-item>`,
   data(){
     return{
       user:'用户名'
     }
   }
})
