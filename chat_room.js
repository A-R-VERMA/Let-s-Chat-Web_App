var firebaseConfig = {
    apiKey: "AIzaSyBYNNuEGPVk0Aad-OluCy4faHx-xTo7nR8",
    authDomain: "let-s-chat-web-app-18311.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-18311-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-18311",
    storageBucket: "let-s-chat-web-app-18311.appspot.com",
    messagingSenderId: "498614590981",
    appId: "1:498614590981:web:9be170294cff60c3e6066c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "chat.html";
  }

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  document.getElementById("user_name").innerHTML =  "Hello " + user_name + "!!!";

  function add() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
}  
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}