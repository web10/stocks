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
              <v-tabs fixed-tabs>
                <v-tab>Sign In</v-tab>
                <v-tab>Register</v-tab>
                <v-tab-item>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-card-text>
                      <v-form>
                        <v-alert :value="error.msg" type="error">
                          {{error.msg}}
                        </v-alert>
                        <v-text-field  prepend-icon="person" v-model="email" label="Email" type="text" :rules="emailRule"></v-text-field>
                        <v-text-field  prepend-icon="lock" v-model="password" label="Password" type="password" :counter="6" :rules="passwordRule"></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" to="signup">Register</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="signIn()" :disabled="!valid">Login</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-tab-item>
                <v-tab-item>
                  <v-card>
                    <v-card-text>
                      <v-container>
                        <!-- <v-form ref="form" v-model="valid" lazy-validation>
                        <v-layout row>
                          <v-flex xs12>
                            <v-alert :value="error.msg" type="error">
                              {{error.msg}}
                          </v-alert>
                            <v-text-field name="firstName" label="First Name" v-model="firstName" type="text"></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row>
                          <v-flex xs12>
                            <v-alert :value="error.msg" type="error">
                              {{error.msg}}
                          </v-alert>
                            <v-text-field name="lastName" label="Last Name" v-model="lastName" type="text"></v-text-field>
                          </v-flex>
                        </v-layout>
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
                        </v-form> -->
                        <sign-up/>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-flex>
        </v-layout>
</template>
<script>
import SignUp from './Signup'
export default {
  name: 'LandingPage',
  components: {
    'sign-up': SignUp
  },
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
    },
    signUp () {
      if (this.valid) {
        this.$store.dispatch('setLoadin', true)
        this.$store.dispatch('signUp', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password})
        .then(user => {
          console.log('Signup the user')
        }, error => {
          this.$store.dispatch('setLoadin', false)
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
