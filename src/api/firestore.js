import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBU4J482fHbFhq6GEqPIVDrkwxY4sscVIM',
  authDomain: 'othello-f359a.firebaseapp.com',
  databaseURL: 'https://othello-f359a.firebaseio.com',
  projectId: 'othello-f359a',
  storageBucket: 'othello-f359a.appspot.com',
  messagingSenderId: '888007103921'
}

firebase.initializeApp(config)

var db = firebase.firestore()

export default db
