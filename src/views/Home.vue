<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Some title</h1>
    <p>Here we could view content for our user</p>
    <h1>Hello {{currentUser}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'

export default {
  name: 'home',
  components: {
  },
  methods: {
    logout() {
      firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.replace('Login')
      })
    }
  },
  computed: {
    currentUser() {
      let currentUser = firebase.auth().currentUser
      return currentUser;
    }
  }
}
</script>
