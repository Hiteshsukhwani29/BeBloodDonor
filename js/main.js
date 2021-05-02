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
$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
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
    $('#contactForm')[0].reset();
});
