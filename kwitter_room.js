
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA7XV59Biwrw2Ea_9X3oYDYMBiGI3KpFa8",
      authDomain: "kwitter-41a02.firebaseapp.com",
      databaseURL: "https://kwitter-41a02-default-rtdb.firebaseio.com",
      projectId: "kwitter-41a02",
      storageBucket: "kwitter-41a02.appspot.com",
      messagingSenderId: "933089073635",
      appId: "1:933089073635:web:5d65275675dec560cee8d6"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
          console.log("Room name -" + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function logout()
{
      
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


