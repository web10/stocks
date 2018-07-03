<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense >
        <template v-for="item in menuItems">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              :to="item.link"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">App Template</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <v-btn icon>
          <v-icon>person</v-icon>
        </v-btn>
        <span>Profile</span>
      </v-tooltip>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>settings</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>chat_bubble</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>help</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>lock_open</v-icon>
      </v-btn>
    </v-toolbar>
    <main class="mt-5">
  <router-view class="mt-5"></router-view>
</main>
<v-spacer></v-spacer>
<v-footer app class="pa-3 blue center" dark>
  <div>&copy; {{ new Date().getFullYear() }}</div>
</v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      menuItems: [
        { icon: 'contacts', text: 'Home', name: 'home', link: '/home' },
        { icon: 'content_copy', text: 'Page 1', name: 'page1', link: '/Page1' },
        { icon: 'content_copy', text: 'Page 2', name: 'page2', link: '/Page2' },
        { icon: 'content_copy', text: 'Page 3', name: 'page3', link: '/Page3' },
        { icon: 'content_copy', text: 'Page 4', name: 'page4', link: '/Page4' },
        { icon: 'content_copy', text: 'Page 5', name: 'page5', link: '/Page4' },
      ]
    }),
    props: {
      source: String
    }
  }
</script>

<style scoped>
  .border-red = { border-style: red 3px solid };
</style>
