<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            <div class="title"> {{meetup.title}} </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg',
            id: 'adfadf',
            title: 'Paris'
          },
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Tower_Bridge_London_Feb_2006.jpg',
            id: 'dfg',
            title: 'London'
          },
          { imageUrl: 'http://www.gangnamkoreanbbq.com/images/gangnam-01.jpg',
            id: 'aa',
            title: 'Gangnam'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgb(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20 px;
  }
  .jumbotron__image{
    width: 100%;
  }
</style>
