<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <h1 class='text-xs-center'>
          Stocks
        </h1>
        <h2 class='text-xs-center'>
        </h2>
        <p class='text-sx-left'>
          <template>
            <v-card>
              <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model='search'
                  append-icon='search'
                  label='Search'
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table :headers='headers' :items='stockList' :search='search' hide-actions class='elevation-1'>
                <template slot='items' slot-scope='props'>
                  <td>{{ props.item.symbol }}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.date }}</td>
                  <td>{{ props.item.isEnabled }}</td>
                  <td>{{ props.item.type }}</td>
                  <td>{{ props.item.iexId }}</td>
                </template>
                <v-alert v-slot:no-results :value='true' color='error' icon='warning'>
                  Your search for '{{ search }}' found no results.
                </v-alert>
              </v-data-table>
            </v-card>
          </template>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [],
        stockList: []
      }
    },
    created () {
      this.headers = [
        {text: 'Symbol', align: 'left', value: 'symbol'},
        {text: 'Name', value: 'name'},
        {text: 'Date (yyyy-mm-dd)', value: 'date'},
        {text: 'Enabled', value: 'isEnabled'},
        {text: 'Type', value: 'type'},
        {text: 'iexId', value: 'iexId'}
      ]
      this.fetchStocks()
    },
    methods: {
      fetchStocks () {
        this.$store.dispatch('getAllStock').then(list => {
          this.stockList = list
        })
      }
    }
  }
</script>

