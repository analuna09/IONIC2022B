import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

////////////////////////////////////////////////////////////////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcCyieyymIn-caumzXdHIkpetQVYQQcuk",
  authDomain: "practica3loginaplp.firebaseapp.com",
  databaseURL: "https://practica3loginaplp-default-rtdb.firebaseio.com",
  projectId: "practica3loginaplp",
  storageBucket: "practica3loginaplp.appspot.com",
  messagingSenderId: "586305414187",
  appId: "1:586305414187:web:946c1134ea0caf0ae2b66e",
  measurementId: "G-YK1EN707TP"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
////////////////////////////////////////////////////////////////////////////////////////////

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appfirebase);
  
router.isReady().then(() => {
  app.mount('#app');
});