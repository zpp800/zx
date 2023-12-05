import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const a = 100
console.log(a)

const b = () => {
  console.log('hello')
}

b()
