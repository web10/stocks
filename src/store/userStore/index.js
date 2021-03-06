import firebase from 'firebase'
export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.role = payload.role
    }
  },
  actions: {
    async signIn ({commit}, payload) {
      let user = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      return user
    },
    /* signup using old database - feature disabled for now as well
    async signUp ({commit}, payload) {
      let user = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      var userId = firebase.auth().currentUser.uid
      firebase.database().ref('/user_details/' + userId).set({
        firstName: payload.firstName,
        lastName: payload.lastName,
        mail: payload.email,
        'role': 0,
        phoneNumber: '',
        location: '',
        picture: '',
        gender: ''
      }).then(snapshot => {
        return user
      })
    }, */
    setUser ({commit}, payload) {
      return new Promise((resolve, reject) => {
        if (payload) {
          let user = {
            email: payload.email
          }
          var userId = firebase.auth().currentUser.uid
          firebase.database().ref('/user_details/' + userId).once('value').then(snapshot => {
            let data = snapshot.val()
          //  user.role = payload.email === 'admin@gmail.com' ? 1 : data.role
            user.role = payload.email === 'admin@gmail.com' ? 1 : 0
            user.firstName = data.firstName
            user.lastName = data.lastName
            resolve('done')
            commit('setUser', user)
          })
        }
      })
    },
    getAllUse ({commit}, payload) {
      return new Promise((resolve, reject) => {
        firebase.database().ref('/user_details').once('value').then(snapshot => {
          let userList = []
          let value = snapshot.val()
          var user = firebase.auth().currentUser
          for (let key in value) {
            if (user.email !== value[key].email) {
              userList.push({id: key, ...value[key]})
            }
          }
          resolve(userList)
        })
      })
    },
    signOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  }
}
