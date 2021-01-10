
const msgScreen = document.getElementById("messages")
const msgForm = document.getElementById("messageForm");
const msgInput = document.getElementById("msg-input");
const msgBtn = document.getElementById("msg-btn");

//var usermessages = db.collection("msgs").doc();
// db.collection('resources').doc(resourceType).update({
//    visitCount: firebase.firestore.FieldValue.increment(1)


/* Create a function that reads the user's name from Firebase
let name="";
function foo() {

}*/

msgBtn.onclick = function(event) {
    message = msgInput.value;

    db.collection("group").doc("chatTest").update({
        messages: firebase.firestore.FieldValue.arrayUnion(message)
    });
    clearText();
}

function clearText() {
    msgInput.value = "";
}