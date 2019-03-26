import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home', // 命名路由
    alias: '/home_page', // 别名
    component: Home,
    props: route => ({
      food: route.query.food
    })
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'about') alert('从about页过来')
    //   else alert('这不是从about页过来')
    //   next()
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/about',
    name: 'about',
    alias: '/home_about', // 别名
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue')
    // props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 视图命名的用法
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/name',
    // redirect: '/' // 方式一
    // redirect: { // 方式二
    //   name: 'about'
    // }
    redirect: to => {
      // 方式三
      // 这里写逻辑
      console.log(to, 'to')
      // return {
      //   name: 'home'
      // }
      return '/'
    }
    // 如果是个对象可以直接返回
    // redirect: to => '/'
  },
  {
    // 默认匹配页面
    path: '*',
    component: () => import('@/views/error_404')
  }
]
export default routes
