import Vue from 'vue'
import App from './App.vue'
import VueBus from "vue-bus"
import VueRouter from 'vue-router'
import cLogin from './pages/login'
import cZhuce from './pages/zhuce'
import cPhone from './pages/phone'
import cBook from './pages/book'
import cFresh from './pages/fresh'
import cCart from './pages/cart'
import cClothes from './pages/clothes'
import cHome from "./pages/home"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import PhoneXQ from "./components/PhoneXQ"
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueBus)

const routes = [
  {
    path: "/login",component: cLogin,
  },
  {
    path: "/",component: cLogin,
  },
  {
    path: "/zhuce",component: cZhuce,
  },
  {
    path:"/home",
    component:cHome,
    children:[
      {path:"phone",
      component: cPhone,
    },
      {path:"clothes",
      component: cClothes,
    },
      {path:"book",
      component: cBook,
    },
      {path:"fresh",
      component:cFresh

    },
      {path:"cart",
      component: cCart,
    },
      {
        path: "detail/:id",
        component: PhoneXQ,
        props: true
      }
    ]
  }
]
const router = new VueRouter({
  mode:"history",
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
