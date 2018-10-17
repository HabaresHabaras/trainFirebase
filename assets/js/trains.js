var config = {
    apiKey: "AIzaSyDdo5cJjkblG0NydLKToJsa1zQpR8PmEWw",
    authDomain: "trainschedule-d5b68.firebaseapp.com",
    databaseURL: "https://trainschedule-d5b68.firebaseio.com",
    projectId: "trainschedule-d5b68",
    storageBucket: "trainschedule-d5b68.appspot.com",
    messagingSenderId: "742932940756"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  
  
  // Initialize Data as a Global Variable (so it can be accessed in the 1 Minute Refresh Function)
  var data;
  
  database.ref().on("value", function(snapshot) {
  
    // Collect updated Firebase Data
    data = snapshot.val();
  
    // Update HTML Table on the DOM
    refreshTable();
  });
  