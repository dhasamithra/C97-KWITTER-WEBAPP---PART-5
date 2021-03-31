user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";

//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBYOE7HOcjTHOe6QyGR5pw7Ix75fy55UvQ",
      authDomain: "classtest-45c09.firebaseapp.com",
      databaseURL: "https://classtest-45c09-default-rtdb.firebaseio.com",
      projectId: "classtest-45c09",
      storageBucket: "classtest-45c09.appspot.com",
      messagingSenderId: "515203725687",
      appId: "1:515203725687:web:0e45663076ff83b7164972"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomNmae(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom()
{
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).update({  
            purpose:"adding room_name" 
      });

      localStorage.setItem("room_name", Room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomNmae(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}