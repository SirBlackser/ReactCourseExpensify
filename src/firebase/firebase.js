import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'water ',
//     note: 'pay',
//     amount: 500,
//     createdAt: 1000
// });


// database.ref('notes/-LASKneBkNEcNHgfR3JY').remove();

// database.ref('notes').push({
//     title: 'second ',
//     body: 'qdfqsdf'
// })

// const firebaseNotes = {
//     notes: {
//         qdskmlj: {
//             title: 'first',
//             body: 'note'
//         },
//         kjmlqf: {
//             title: 'Another',
//             body: 'kjfdsdskjmldfsklj'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'my note'
// }, {
//     id: '13',
//     title: 'Another',
//     body: 'kjfdsdskjmldfsklj'
// }];

// database.ref('notes').set(notes);

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500)

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('failed fetching', e);
//     });

// database.ref().set({
//     name: 'test testing',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Somewhere',
//         country: 'else'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data is removed');
//     }).catch((e) => {
//         console.log('Failed.', e);
//     });