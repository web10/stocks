import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Intro from '@/components/Intro'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import Page5 from '@/components/Page5'
import Profile from '@/components/Profile'
import Alerts from '@/components/Alerts'
import Settings from '@/components/Settings'
import Messages from '@/components/Messages'
import Help from '@/components/Help'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Landing from '@/components/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/page4',
      name: 'Page4',
      component: Page4
    },
    {
      path: '/page5',
      name: 'Page5',
      component: Page5
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: Alerts
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/landing',
      name: 'Landing Page',
      component: Landing
    }
  ]
})
