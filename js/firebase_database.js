var firebaseConfig = {
    apiKey: "AIzaSyCRNS-6bcRSC-NrjLxiO6C37HQpZWFna3M",
    authDomain: "squireone-communication.firebaseapp.com",
    databaseURL: "https://squireone-communication.firebaseio.com",
    projectId: "squireone-communication",
    storageBucket: "squireone-communication.appspot.com",
    messagingSenderId: "542085862314",
    appId: "1:542085862314:web:e0385636631b5499dc91d3",
    measurementId: "G-L4T46WFRX0"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// var enquiryCount = firebase.database().ref('enquiryform');
// console.log("retriving");

// enquiryCount.on('value', function(snapshot) {
//     var s = snapshot.val();
//     console.log(s);
//     //console.log(s.child());
//     //var a = JSON.parse(s);
//     var key = Object.keys(s);
//     for (let index = 0; index < key.length; index++) {
//         const element = s[key[index]];
//         console.log(element);
//     }
//     //console.log(s[key[0]].email);
// });




function sendToFirebase(name, email, message){
    alert(name+"-"+email+"-"+message);
    firebase.database().ref('enquiryform/'+uniqueId()).set({
        name:name,
        email:email,
        message:message
    });

    return false;
}


function uniqueId(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ms = d.getMilliseconds();
    return ""+year+"-"+month+"-"+day+"-"+hour+"-"+min+"-"+sec+"-"+ms;
}

function displaydata(item, index){
    console.log(index+":"+item);
}