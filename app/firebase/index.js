import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyAgKCDHf_1RxCpdMyH9LhQGyqVG4q0eCGY",
      authDomain: "todo-app-b5b4c.firebaseapp.com",
      databaseURL: "https://todo-app-b5b4c.firebaseio.com",
      storageBucket: "todo-app-b5b4c.appspot.com",
      messagingSenderId: "17811821172"
    };
  firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
