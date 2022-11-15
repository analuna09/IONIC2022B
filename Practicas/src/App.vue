<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created(){
  //manda a llamar ciclo de vida de app template
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "langelita18@gmail.com", "la123456456").then((userCredential)=>{
      const user = userCredential.user
    if(user == null){
        console.log("No Autenticado")
    }
    else 
    {
      console.log("Autenticado Correctamente ", user)
    }
    })
  }
});
</script>