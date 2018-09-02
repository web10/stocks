<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media height="200px">
          <v-layout column fill-height>
            <v-card-title>
              <H2> {{user.firstName}} {{user.lastName}} </H2>
            </v-card-title>
            <span class="ma-5, text-xs-center" >
              <img src="@/assets/avatar.png" height="180px" width="180px">
            </span>
            <image-uploader
              :debug="1"
              :maxWidth="512"
              :quality="0.7"
              :autoRotate=true
              outputFormat="verbose"
              :preview=false
              :className="['fileinput', { 'fileinput--loaded' : hasImage }]"
              capture="environment"
              @input="setImage"
              @onUpload="startImageResize"
              @onComplete="endImageResize">
            </image-uploader>
          </v-layout>
        </v-card-media>

        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(650) 555-1234</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{user.email}}</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Located at</v-list-tile-title>
              <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Profile',
  computed: {
    user () {
      return this.$store.state.userStore.user
    }
  }
}
</script>
