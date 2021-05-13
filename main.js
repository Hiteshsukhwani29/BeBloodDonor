var config = {
   apiKey: "AIzaSyCK962kbgD3zW6QDi6wrR_APXPKWXx_djc",
    authDomain: "be-blood-donor.firebaseapp.com",
    databaseURL: "https://be-blood-donor-default-rtdb.firebaseio.com/",
    projectId: "be-blood-donor",
    storageBucket: "be-blood-donor.appspot.com",
    messagingSenderId: "593603179460",
    appId: "1:593603179460:web:06c9a96e32992d26862a91",
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('user');
var messagesRef2 = firebase.database().ref('secured');
$('#donateForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    var newMessageRef2 = messagesRef2.push();
 
    newMessageRef.set({
       name: $('.fullname').val(),
        phone: $('.phone').val(),
        email: $('.email').val(),
        district: $('.district').val(),
        area: $('.area').val(),
        address: $('.address').val(),
        age: $('.age').val(),
        bg: $('.bg').val(),
        covid: $('.covid').val(),
        alcohol: $('.alcohol').val(),
        plasma: $('.plasma').val(),
        donate: $('.Donate').val(),
        gender: $('.gender').val()
    });
 
    $('.success-message').show();
  $('#main').hide();
    $('#donateForm')[0].reset();
});
var messagesRef1 = firebase.database().ref('query');
$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef1 = messagesRef1.push();
    newMessageRef1.set({
        name: $('.mpage_name').val(),
        phone: $('.mpage_mobile').val(),
        email: $('.mpage_email').val(),
        message: $('.mpage_message').val()
    });
 
    $('.success-messag').show();
    $('#contactForm')[0].reset();
});
