<template>
    <v-layout row wrap justify-center="">
          <v-flex xs12 md12>
            <v-card class="border">
              <h4 class="ma-2 pa-2"> Marketing Message </h4>
            </v-card>
          </v-flex>
          <v-flex xs4 md4>
            <v-card class="elevation-12">
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
                <v-spacer></v-spacer>
                <v-btn color="primary" to="signup">Got to Signup</v-btn>
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
        this.$store.dispatch('signIn', {'email': this.email, 'password': this.password})
        .then (user => {
          this.$store.dispatch('setUser', user.user.user)
        }, error => {
          this.error.msg = error.message
          var that = this
          setTimeout(function () {
            that.error.msg = ''
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
