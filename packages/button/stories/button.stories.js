import TlButton from '../src/button'

export default {
  title:'tl-button',
  component:TlButton,
}

export const primaryButton = ()=>({
   components:{ TlButton },
   template:`<tl-button>测试</tl-button>`
})
