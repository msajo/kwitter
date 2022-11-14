//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAGOc84MLPKToaiWuqWH2azUbh3dfP_YWw",
      authDomain: "kwitter-1f41e.firebaseapp.com",
      databaseURL: "https://kwitter-1f41e-default-rtdb.firebaseio.com",
      projectId: "kwitter-1f41e",
      storageBucket: "kwitter-1f41e.appspot.com",
      messagingSenderId: "1011486305221",
      appId: "1:1011486305221:web:cfad4aedd3385b809979ac"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name: user_name,
           message:msg,
           like:0,
      });
      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

