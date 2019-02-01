<template>
  <v-stepper v-model="e1" dark>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Welcome!</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Observe</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3">Follow</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 4" step="4">Subscribe</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 5" step="5">Trade</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 6" step="6">Partner</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="cardstyle" height="200px">
          <H1> Welcome to StockTrader A.I.</h1>
          <h4> Use Artificial Intelligence to Work for You! </h4>
          <P> It is now possible to use our computer servers to work for you, perhaps even earn you more money than you do at your job.</p>
          <p> Hopefully one day you will no longer have to go to work to earn a living.</p>
        </v-card>
        <v-btn color="yellow" light @click="e1 = 2" >  Continue </v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card  class="cardstyle"  height="200px"  >
          <H1> First, See What Is Possible</h1>
          <h4> See What Our Robots Can Do with the current market </h4>
          <p> Our robots have been hard at work analyzing the current stock market.  Each of them have a unique set of skill that it uses to analyze the markets with.  When they see patterns that meet their standards, they enter and exit the trades. </p>
          <p> Each trade is logged in the robot's trade history, whether it was a PROFIT or LOSS.</p>
          <p> Over time you can see which robot is doing well and which is not. </p>
        </v-card>
        <v-btn  color="yellow" light  @click="e1 = 3"  >  Continue </v-btn>
        <v-btn flat> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="cardstyle" height="200px">
          <H1> You Can Follow The Robots You Like</h1>
          <p>If you like a robot, you can follow it for free.  When you follow a robot, it will send you a text message or email whenever it exits a trade and updates you on it's total wins and losses. </p>
        </v-card>
        <v-btn color="yellow" light @click="e1 = 4"  >  Continue  </v-btn>
        <v-btn flat> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="cardstyle" height="200px" >
          <H1> Subscribe</h1>
          <p> If you subscribe to a robot, it will start sending you a text or email whenever it enters and exits a trade.</p>
          <p> Each robot will eventually have it's own subscription cost, depending on how well it is performing.  But in the beginning, they will all start out low at $5.00/month.</P>
          <p> You can subscribe to as many robots as you need, as you might want to take advantage of different market conditions, market sectors, or your account type (IRA, options, short-selling, etc.)</p>
        </v-card>
        <v-btn color="yellow" light @click="e1 = 5"> Continue </v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-card class="cardstyle" height="200px" >
          <H1> Trade </h1>
          <p> You can use any stock broker to place you trades if you want to trade along with your StockTrading A.I. robots </p>
          <p> If you want to trade from your phone, we recommend the ROBIN HOOD app for these advantages:</p>
            <li> Simple to use </li>
            <li> No minimum balance </li>
            <li> No minimum trade volume </li>
            <li> FREE trades - no transaction costs </li>

          <V-btn> Sign up for ROBIN HOOD Here </v-btn>
          </v-card>
        <v-btn color="yellow" light @click="e1 = 6"> Continue </v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="6">
        <v-card class="cardstyle" height="200px">
          <H1> Refer Your Friends and Earn Residual Income!</h1>
          <p> While your robots help you earn passive income (income that you do not have to go to work to earn)...</p>
          <p> Referring your friends to trade with you can earn you RESIDUAL INCOME!  We will pay you 50% commissions each and every month your referrals stay subscribed to each robot!</p>
          <p> Sign up to Partner with Us and get started </p>
        </v-card>
        <v-btn buttonstyle light @click="e1 = 1"> Continue </v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 0
      }
    }
  }
</script>

<style>
  .cardstyle {
    color: red;
    background: grey;
    border-style: black solid 1px;
    border-radius: 5px;
    padding: 10px;
  }

  .buttonstyle {
    background-color: yellow;

  }

  .h1 {
  color: red;
  }
</style>
