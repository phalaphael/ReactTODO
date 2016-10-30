import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAgKCDHf_1RxCpdMyH9LhQGyqVG4q0eCGY",
    authDomain: "todo-app-b5b4c.firebaseapp.com",
    databaseURL: "https://todo-app-b5b4c.firebaseio.com",
    storageBucket: "todo-app-b5b4c.appspot.com",
    messagingSenderId: "17811821172"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '2.0'
    },
    isRunning: true,
    user: {
      name: 'Phalaphael',
      age: 40
    }
  });


// var notesRef = firebaseRef.child('notes');
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog'
// });
//
// console.log('Todo id', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=>{
  console.log('Child added', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
  text: 'Stop the clock'
});
var newTodoRef = todosRef.push({
  text: 'kick a stick'
});
