// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAkMDTZ0HrXl-s4nUMyhum7AC1Kho-CopE",
      authDomain: "kwitter-ac6bf.firebaseapp.com",
      databaseURL: "https://kwitter-ac6bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-ac6bf",
      storageBucket: "kwitter-ac6bf.appspot.com",
      messagingSenderId: "117230222046",
      appId: "1:117230222046:web:aa07979821af023265604f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
