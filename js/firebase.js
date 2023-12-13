const firebaseConfig = {
    apiKey: "AIzaSyC4pKOdDyLCplu5yIvs7YBdK4NWiHuWo7U",
    authDomain: "fir-demo-a9352.firebaseapp.com",
    projectId: "fir-demo-a9352",
    storageBucket: "fir-demo-a9352.appspot.com",
    messagingSenderId: "533286069858",
    appId: "1:533286069858:web:a836fa4fb2ab145e37d33b"
  };

  // Initialize Firebase
  firebaseConfig.initializeApp(firebaseConfig);

  const db= firebase.firestore();
  const auth = firebase.auth();