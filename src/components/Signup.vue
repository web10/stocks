<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout row>
                  <v-flex xs12>
                    <v-alert :value="error.msg" type="error">
                      {{error.msg}}
                  </v-alert>
                    <v-text-field name="email" label="Mail" v-model="email" type="email" :rules="emailRule"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="password" label="Password" v-model="password" type="password" :counter="6" :rules="passwordRule"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="confirmPassword" label="Confirm Password" v-model="confirmPassword" type="password" :rules="confirmPasswordRule"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn color="primary" @click="signUp()" :disabled="!valid">Sign Up</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'SignUp',
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      confirmPassword: '',
      error: {msg: ''},
      emailRule: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRule: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 6 characters'
      ],
      confirmPasswordRule: [
        v => !!v || 'Confirm Password is required',
        v => (v && v == this.password) || 'Confirm Password must be same'
      ]
    }
  },
  methods: {
    signUp () {
      if (this.valid) {
        this.$store.dispatch ('signUp', {email: this.email, password: this.password})
        .then ( user => {
          console.log('dd')
          this.$store.dispatch('setUser', user.user.user)
          this.$router.replace('/intro')
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
