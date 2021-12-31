import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { codemirror } from 'vue-codemirror'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/darcula.css'
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css'

createApp(App).directive('highlight', function (el){
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightElement(block)
    })
}).use(store).use(router).mount('#app')
