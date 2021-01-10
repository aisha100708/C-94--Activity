//ADD YOUR FIREBASE LINKS
 var firebaseConfig = {
    apiKey: "AIzaSyAXUBv_0xj8NklJyPeYARoz4-8NMbSUI-s",
    authDomain: "kwitter-firebase-4e15f.firebaseapp.com",
    databaseURL: "https://kwitter-firebase-4e15f-default-rtdb.firebaseio.com",
    projectId: "kwitter-firebase-4e15f",
    storageBucket: "kwitter-firebase-4e15f.appspot.com",
    messagingSenderId: "958052502567",
    appId: "1:958052502567:web:918c1a978ea4fee4d11202",
    measurementId: "G-R5WFR6G0NV"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function add_username() {
    user_name = document.getElementById("username_input").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "user_name"
    });
}