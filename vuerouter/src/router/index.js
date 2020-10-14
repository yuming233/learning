import Vue from 'vue'
import VueRouter from 'vue-router'

// import HellowWorld from '../components/HelloWorld.vue'
// import About from '../components/About.vue'

// 路由懒加载
const Helloworld = () => import('../components/HelloWorld.vue')
const helloNew = () => import('../components/helloNew.vue')
const HelloMgs = () => import('../components/HelloMgs.vue')
const Profile = () => import('../components/Profile.vue')

const About = () => import('../components/About.vue')

Vue.use(VueRouter) // 通过Vue.use()插件,安装插件

// 创建一个router对象
const routes = [{ // 路由的默认路径
    path: '',
    // redirect重定向(默认首页) 
    redirect: '/hello'
  },
  {
    path: '/hello',
    component: Helloworld,
    meta: {
      title: '首页'
    },
    children: [{
        path: '', //子界面的重定向
        redirect: 'New' // 一定不要加/
      },
      {
        path: 'New',
        component: helloNew
      },
      {
        path: 'Mgs',
        component: HelloMgs
      }
    ]
  },
  {
    path: '/about/:abc',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/Profile',
    component: Profile,
    meta: {
      title: '文档'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'change'
})

router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  console.log(to);
  next() // 一定要调用next
})


// 将router对象传入到vue实例
export default router