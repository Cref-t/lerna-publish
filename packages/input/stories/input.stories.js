import TlInput from '../src/input';

export default {
  title:'tl-input',
  component:TlInput,
}

export const text = ()=>({
    components: { TlInput },
    template: `<tl-input type='text' v-model='value'></tl-input>`,
    data(){
      return{
        value:'admin'
      }
    }
})

export const password = ()=>({
    components:{ TlInput },
    template:`<tl-input type='password' v-model='password'></tl-input>`,
    data(){
      return{
        password:123456
      }
    }
})
