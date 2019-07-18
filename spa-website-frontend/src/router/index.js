import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import NewRandom from '@/components/NewRandom'
import StoredRandom from '@/components/StoredRandom'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/new'
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/new',
      name: 'NewRandom',
      component: NewRandom
    },
    {
      path: '/stored',
      name: 'StoredRandom',
      component: StoredRandom
    }
  ]
})
