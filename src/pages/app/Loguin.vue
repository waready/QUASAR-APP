<template>
    <q-page class="flex flex-center">
        <q-card class="my-card shadow-24 doc-inset-shadow">
        <div class="q-pa-md my-card">
            <div class="q-gutter-y-md column" style="">
                <div class="q-pa-md">
                    <q-parallax :height="220" :speed="0">
                        <template v-slot:media>
                            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                        </template>
                        <h3 class="text-green">LOGIN</h3>
                    </q-parallax>
                </div>
                <q-form @submit="firebaseLogin"  class="q-gutter-y-md column">
                    <q-input color="teal" outlined  v-model="form.email" label="email"  clearable>
                        <template v-slot:prepend>
                        <q-icon name="" />
                        </template>
                        <template v-slot:append>
                            <q-icon name="account_box" />
                        </template>
                    </q-input>
                    <q-input type="password" color="teal" outlined  v-model="form.password" label="password"  clearable>
                        <template v-slot:prepend>
                        <q-icon name="" />
                        </template>
                        <template v-slot:append>
                        <q-avatar>
                            <q-icon name="vpn_key" />
                        </q-avatar>
                        </template>
                    </q-input>
                    <q-btn color="secondary" type="submit"  icon-right="navigation" label="Loguin" />
                </q-form>
            </div>
        </div>
        </q-card>

    </q-page>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data () {
    return {
       form: {
        email: 'antony@mail.com',
        password: '1234679',
      },
      error: '',

      readonly: false,
      disable: false
    }
  },
    methods:{
     firebaseLogin(){
       this.error = ''
       if(this.form.email && this.form.password){
         return firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(()=>{
          this.$router.push('entro/mlwe2ia0x5rlmtsp')
          console.warn('ingresaste a firebase.......')
        }).catch(err=>{
          this.error = err.message
        })
       }
       else {
         this.error = "Todos los campos son requeridos"
       }
       
    },
  }
}
</script>
<style>

</style>