<template>
  <div class="sign-up">
      <p>Let's create a new account!</p>
      <input v-model="email" type="text" placeholder="Email"><br>
      <input v-model="password" type="password" placeholder="Password"><br>
      <button @click="signUp">Sign up</button>
      <p>or go back to <router-link to="/login">login</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: ''
        }   
    },
    methods : {
        signUp() {
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(
                (user) => {
                    // this.$router.replace('home');
                    alert('Welcome ' + user )
                },
                (err) => {
                    alert('Oops, ' + err.message)
                }
            );
        }
    }
}
</script>

<style>

</style>