<template>
    <div class="login">
        <h3>Sign In</h3>
        <input v-model="email" placeholder="Email" type="text"><br>
        <input v-model="password" type="password" placeholder="Password"><br>
        <button @click="login">Login</button>
        <p>No account? <router-link to="/sign-up">Create one now!</router-link></p>
    </div>

</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
                data => {
                    data.user;
                    alert('Logged in')
                },
                (err) => {
                    alert(err.message)
                }
            );
            this.$router.replace('home');
        }
    }
}
</script>

<style>

</style>