import Vue from 'vue'
import VueRouter  from 'vue-router'
Vue.use(VueRouter )

export default new VueRouter ({
  routes: [
    {
      path: '/',
      redirect: 'dynamic',
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: resolve => require(['../components/dynamic/dynamic'], resolve),
      meta: {
        keepAlive: true
      } ,
      children: [
             {
                path: '/dynamic/indexDetails',
                name: 'dynamicindexDetails',
                component: resolve => require(['../components/index/indexDetails.vue'], resolve),
                children: [
                  {
                        path: 'indexDetailsA/:id',
                        name: 'indexDetailsA',
                        component: resolve => require(['../components/index/indexDetailsA'], resolve),
                  }
              ]
              ,
              path: '/dynamic/dynamicAdd',
              name: 'dynamicAdd',
              component: resolve => require(['../components/dynamic/dynamicopOperation/dynamicAdd.vue'], resolve)
        },{
          path: '/dynamic/User',
          name:'User',
          component: resolve => require(['../components/home/user'], resolve),
         }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../components/index/index'], resolve),
      meta: {
        keepAlive: true
      } ,
      children: [
        {
              path: 'indexDetails',
              name: 'indexDetails',
              component: resolve => require(['../components/index/indexDetails.vue'], resolve),
              children: [
                {
                      path: 'indexDetailsA/:id',
                      name: 'indexDetailsA',
                      component: resolve => require(['../components/index/indexDetailsA'], resolve),
                }
              ]
        },{
              path: 'UserChat',
              name: 'UserChat',
              component: resolve => require(['../components/index/UserChat'], resolve),
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../components/home/home'], resolve),
      meta: {
        keepAlive: true
      }
      ,
      children: [
        {
              path: '/home/User',
              name:'User',
              component: resolve => require(['../components/home/user'], resolve),
        },
        {
          path: '/home/ceshi',
          name:'ceshi',
          component: resolve => require(['../components/home/ceshi'], resolve),
    }
      ]
    }
  ]
})
