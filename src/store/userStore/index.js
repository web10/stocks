import firebase from 'firebase'
export default {
    state: {
      user: null,
      admin: null
    },
    mutations: {
      setUser ( state, payload ) {
        state.user = payload
      },
      setAdmin( state, payload ) {
        state.admin = superadmin
      }
    },
    actions: {
      async signIn({commit},payload){
        return await firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
      },
      async signUp({commit},payload){
        console.log("sign")
        return await firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
      },
      setUser({commit},payload){
        console.log(payload)
        let user = {
          email:payload.email
        }
        commit('setUser',user)
      },
      signOut({commit}){
        firebase.auth().signOut()
        commit('setUser',null)
      }
    }
}
