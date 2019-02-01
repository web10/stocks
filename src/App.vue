<template>
  <v-app id="inspire" dark>

    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
      width="200"
      v-if="auth"
      class="grey darken-3"
      mobile-break-point="900"
    >
      <v-list dense class="removepaddings">
        <div v-for="item in menuItems" >
        <!-- remove this item heading layout? -->
      <v-layout
        v-if="item.heading"
        :key="item.heading"
        row
        align-center

      >
      </v-layout>

          <v-list-tile
            v-else
            :key="item.text"
            :to="item.link"
            class="grey darken-3 yellow--text">
            <v-list-tile-action>
              <v-icon class="yellow--text">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </v-list >
    </v-navigation-drawer>

    <v-toolbar
      color="black"
      class="yellow--text"
      dark
      app
      clipped-left
      v-if="user"
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon class="yellow--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon >
        <router-link to="/" style="cursor: pointer" class="hidden-sm-and-down" tag="span">
          StockTrader
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- dashboard buttons start -->
      <v-tooltip bottom v-for="item in adminItems" :key="item.name" v-if="user && user.role == '1'">
        <v-btn icon slot="activator" :to="item.link" v-if="auth == item.auth" >
          <v-icon class="yellow--text">{{ item.icon }}</v-icon>
        </v-btn>
        <span>{{ item.text }}</span>
      </v-tooltip>
      <v-tooltip bottom v-for="item in dashItems" :key="item.name" >
        <v-btn icon slot="activator" :to="item.link" v-if="auth == item.auth" >
          <v-icon class="yellow--text">{{ item.icon }}</v-icon>
        </v-btn>
        <span>{{ item.text }}</span>
      </v-tooltip>
      <span v-if="user">{{user.email}}</span>
      <v-btn color="red" dark v-if="auth" @click="signOut()">Logout</v-btn>
    </v-toolbar>

      <v-container fluid>
        <v-layout>
          <v-flex sm3 hidden-sm-and-down v-if="user">
          </v-flex>
          <v-flex sm12 lg11>
            <main>
              <div class="pa-3" v-if="user">top spacer</div>
              <router-view v-if="!loading"></router-view>
              <v-progress-circular indeterminate color="primary" style="margin-top: 10em;margin-left: 48em;" v-if="loading">
              </v-progress-circular>
            </main>
          </v-flex>
        </v-layout>
      </v-container>
    <v-spacer></v-spacer>

    <v-footer app class="black pa-3 yellow--text " dark v-if="user">
      <v-layout justify-center row wrap>
        <div>
          &copy; <strong>StockTrader</strong> {{ new Date().getFullYear() }}
        </div>
      </v-layout>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.state.loading
    },
    user () {
      return this.$store.state.userStore.user
    },
    auth () {
      let user = this.$store.state.userStore.user
      return !!user
    }
  },
  data: () => ({
    dialog: false,
    drawer: false,
    menuItems: [
      { icon: 'home', text: 'Intro', name: 'intro', link: '/intro' },
      { icon: 'star', text: 'Stocks', name: 'stocks', link: '/stocks' },
      { icon: 'trending_up', text: 'Watch List', name: 'watchlist', link: '/watchlist' },
      { icon: 'android', text: 'Robots', name: 'robots', link: '/robots' },
      { icon: 'check_circle', text: 'Subscriptions', name: 'subscriptions', link: '/subscriptions' },
      { icon: 'work', text: 'Partner', name: 'partner', link: '/partner' }

    ],
    dashItems: [
      { icon: 'person', text: 'Profile', name: 'profile', link: '/profile', auth: true },
      { icon: 'notifications', text: 'Alerts', name: 'alerts', link: '/alerts', auth: true },
      { icon: 'settings', text: 'Settings', name: 'settings', link: '/settings', auth: true },
      { icon: 'chat_bubble', text: 'Messages', name: 'messages', link: '/messages', auth: true },
      { icon: 'help', text: 'Help', name: 'help', link: '/help', auth: true }
    ],
    adminItems: [
      {icon: 'person_outline', text: 'Admin', name: 'admin', link: '/admin', auth: true},
      {icon: 'group', text: 'Staff', name: 'staff', link: '/staff', auth: true}
    ]
  }),
  props: {
    source: String
  },
  methods: {
    signOut () {
      this.$store.dispatch('signOut')
    }
  }
}
</script>

<style>
  .front {
    background-size: cover;
    background-image: url("../src/assets/bg-image.jpeg");
  }
  .redborder {
    border: 3px solid red;
  }

  .removepaddings {
    padding-top: 0px;
    padding-bottom: 0px;
  }

</style>
