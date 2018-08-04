<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap align-end>
        <v-flex xs12>
          <template>
            <v-data-table :headers="headers" :items="adminList" hide-actions class="elevation-1">
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.email }}</td>
                <td class="text-xs-left">
                  <v-btn color="primary" outline small v-if="props.item.role == '0'" @click="changeAdmin(props.item)">Make Admin</v-btn>
                  <v-btn color="primary" outline small v-if="props.item.role == '1'" @click="changeAdmin(props.item)">Remove Admin</v-btn>
                </td>
              </template>
            </v-data-table>
          </template>
        </v-flex>
      </v-layout>
      
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      headers: [],
      adminList: []
    }
  },
  created () {
    this.fetchUser()
    this.headers = [{text: 'Email Id', value: 'email', sortable: false},
              { text: 'Action', value: 'action', sortable: false }
    ]
  },
  methods: {
    fetchUser () {
      this.$store.dispatch('getAllUse').then(userlist => {
        this.adminList = userlist
      })
    },
    changeAdmin (user) {
      this.$store.dispatch('makeAdmin', user).then(updateduser => {
        this.fetchUser()
      }, error => {
        window.alert(error)
      })
    }
  }
}
</script>

