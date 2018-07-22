import firebase from 'firebase';
export default {
    state:{
        user:null
    },
    mutations:{
        setUser(state,payload){
            state.user = payload;
        }
    },
    actions:{
       async signIn({commit},payload){
            return await firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
        },
        setUser({commit},payload){
            console.log(payload)
            let user = {
                email:payload.email
            }
            commit('setUser',user)
        },
        signOut({commit}){
            firebase.auth().signOut();
            commit('setUser',null);
        }
    }
}