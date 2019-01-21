import Vue from 'vue'
import firebase from 'firebase/app'
import VueFire from 'vuefire'
import 'firebase/storage'
import 'firebase/firestore'

Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyAOXb5myQKEWO5B2q-clngE80JRDgQcRJw',
  authDomain: 'zs-game.firebaseapp.com',
  databaseURL: 'https://zs-game.firebaseio.com',
  projectId: 'zs-game',
  storageBucket: 'zs-game.appspot.com',
  messagingSenderId: '1039321490718'
})

export const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export const storage = firebase.storage()
