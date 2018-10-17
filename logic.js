var config = {
        apiKey: "AIzaSyCizQS6XGNCXICsAhY3_fe6eX1zoGMOLbA",
        authDomain: "increaseclicker.firebaseapp.com",
        databaseURL: "https://increaseclicker.firebaseio.com",
        projectId: "increaseclicker",
        storageBucket: "increaseclicker.appspot.com",
        messagingSenderId: "287790126631"
      };
  firebase.initializeApp(config);

  firebase.database().ref().on("value", function(snapshot){
      console.log(snapshot.val());
  });