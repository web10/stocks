import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Members/Intro'
import Stocks from '@/components/Members/Stocks'
import Partner from '@/components/Members/Partner'
import WatchList from '@/components/Members/WatchList'
import Robots from '@/components/Members/Robots'
import Subscriptions from '@/components/Members/Subscriptions'
import Profile from '@/components/Members/Profile'
import Alerts from '@/components/Members/Alerts'
import Settings from '@/components/Members/Settings'
import Messages from '@/components/Members/Messages'
import Help from '@/components/Members/Help'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Landing from '@/components/Landing'
import Admin from '@/components/Admin/Admin'
import Staff from '@/components/Admin/Staff'
import store from '../store'

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
  console.log('dd')
  if (store.state.userStore.user) {
    if (to.meta.adminRole) {
      if (store.state.userStore.user.role || store.state.userStore.user.email === 'admin@gmail.com') {
        next()
      } else {
        next(from.path)
      }
    } else {
      next()
    }
  } else {
    next('/')
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: Landing
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: ifAuthenticated,
      meta: {
        adminRole: true
      }
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff,
      beforeEnter: ifAuthenticated,
      meta: {
        adminRole: true
      }
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/partner',
      name: 'Partner',
      component: Partner,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/watchlist',
      name: 'WatchList',
      component: WatchList,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/robots',
      name: 'Robots',
      component: Robots,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/subscriptions',
      name: 'Subscriptions',
      component: Subscriptions,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: Alerts,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
