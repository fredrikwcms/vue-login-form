import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false


// Vue.use(firebase)

let app = '';

// My firebase config
const firebaseConfig = {

};

// Firebase init 
firebase.initializeApp(firebaseConfig);



firebase.auth().onAuthStateChanged(() => { if (!app) {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')  
}});

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
