<template>
    <v-layout row wrap>
          <v-flex xs8 md8>
            <v-card height="700px" class="mx-5">
              <v-card-media
                class="white--text"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Your Main App Title</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title>
                <div>
                  <span>"Your Message Motto Here"</span><br>
                  <span>Anything else here</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs4 md4>
            <v-card class="mx-5">
              <v-form ref="form" v-model="valid" lazy-validation>
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-alert :value="error.msg" type="error">
                      {{error.msg}}
                  </v-alert>
                  <v-text-field prepend-icon="person" v-model="email" label="Login" type="text" :rules="emailRule"></v-text-field>
                  <v-text-field  prepend-icon="lock" v-model="password" label="Password" type="password" :counter="6" :rules="passwordRule"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>

                <v-btn color="primary" to="signup">Register</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signIn()" :disabled="!valid">Login</v-btn>
              </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
</template>
<script>
export default {
  name: 'LandingPage',
  data () {
    return {
      valid: true,
      error: { msg: '' },
      email: '',
      emailRule: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRule: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 6 characters'
      ]
    }
  },
  methods: {
    signIn () {
      if (this.valid) {
        this.$store.dispatch('setLoadin', true)
        this.$store.dispatch('signIn', {'email': this.email, 'password': this.password})
        .then(user => {
          console.log('Login the user')
        }, error => {
          this.$store.dispatch('setLoadin', false)
          this.error.msg = error.message
          setTimeout(() => {
            this.error.msg = ''
          }, 2000)
        })
      }
    }
  }
}
</script>

<style>
  .border {
    border-style: 1px solid black;
  }
</style>
