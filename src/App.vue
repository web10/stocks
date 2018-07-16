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
          <v-list-tile v-else :key="item.text" :to="item.link">
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
        <router-link to="/" style="cursor: pointer" class="hidden-sm-and-down" tag="span">
          App Template
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- dashboard buttons start -->
      <v-tooltip bottom v-for="item in dashItems" :key="item.name" >
        <v-btn icon slot="activator" :to="item.link">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        <span>{{ item.text }}</span>
      </v-tooltip>
      <v-btn color="primary" dark>Login</v-btn>

<!-- I want to incorporate Logging In Dialog to above button

      <v-dialog v-model="dialog" max-width="290">
          <v-btn slot="activator" color="primary" dark>Login</v-btn>
          <v-content>
            <v-container fluid fill-height>
              <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                      <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <v-form>
                        <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                        <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary">Login</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-content>
          </v-dialog>
 -->

    </v-toolbar>

    <main class="mt-5">
      <router-view class="mt-5"></router-view>
    </main>
    <v-spacer></v-spacer>
    <v-footer app class="blue darken-3 pa-3 " dark>
      <v-layout justify-center row wrap>
        <div>
          &copy; <strong>App Template</strong> {{ new Date().getFullYear() }}
        </div>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    menuItems: [
      { icon: 'contacts', text: 'Intro', name: 'intro', link: '/intro' },
      { icon: 'content_copy', text: 'Page 1', name: 'page1', link: '/page1' },
      { icon: 'content_copy', text: 'Page 2', name: 'page2', link: '/page2' },
      { icon: 'content_copy', text: 'Page 3', name: 'page3', link: '/page3' },
      { icon: 'content_copy', text: 'Page 4', name: 'page4', link: '/page4' },
      { icon: 'content_copy', text: 'Page 5', name: 'page5', link: '/page5' }
    ],
    dashItems: [
      { icon: 'person', text: 'Profile', name: 'profile', link: '/profile' },
      { icon: 'notifications', text: 'Alerts', name: 'alerts', link: '/alerts' },
      { icon: 'settings', text: 'Settings', name: 'settings', link: '/settings' },
      { icon: 'chat_bubble', text: 'Messages', name: 'messages', link: '/messages' },
      { icon: 'help', text: 'Help', name: 'help', link: '/help' }
    ]
  }),
  props: {
    source: String
  }
}
</script>

<style scoped>
.border-red {
  border-style: red 3px solid;
}
</style>
