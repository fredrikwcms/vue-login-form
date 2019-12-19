import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false


// Vue.use(firebase)

let app = '';

// My firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCRc5JmfDHpb2XMJ9DgCPcEJg-bgCX7ETo",
  authDomain: "vue-login-form-e5c97.firebaseapp.com",
  databaseURL: "https://vue-login-form-e5c97.firebaseio.com",
  projectId: "vue-login-form-e5c97",
  storageBucket: "vue-login-form-e5c97.appspot.com",
  messagingSenderId: "31962292954",
  appId: "1:31962292954:web:1f6e5483d57c4c95b27be3",
  measurementId: "G-4ZJ83SXCQT"
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
