import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/LoginComponent'
import ToDo from '@/components/todo/ToDoComponent'

Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: ToDo
    },
    //to catch all 404 routes. Redirect to login page.
    {
      path: '*',
      redirect: '/'
    }
  ]
})
