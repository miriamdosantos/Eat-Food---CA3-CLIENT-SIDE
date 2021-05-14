$(document).ready(function () {
     $('input[type=password]').keyup(function () {
          var pswd = $(this).val();

          // Lower case letters validation
          if (pswd.match(/[a-z]/)) {
               $('#letter').removeClass('invalid').addClass('valid');
          }
          else {
               $('#letter').removeClass('valid').addClass('invalid');
          }

          // Upper case letters validation
          if (pswd.match(/[A-Z]/)) {
               $('#capital').removeClass('invalid').addClass('valid');
          }
          else {
               $('#capital').removeClass('valid').addClass('invalid');
          }

          // Numbers validation
          if (pswd.match(/\d/)) {
               $('#number').removeClass('invalid').addClass('valid');
          }
          else {
               $('#number').removeClass('valid').addClass('invalid');
          }

          // Special characters validation
          if (pswd.match(/[^A-Za-z0-9]/)) {
               $('#symbol').removeClass('invalid').addClass('valid');
          }
          else {
               $('#symbol').removeClass('valid').addClass('invalid');
          }

          // Length validation
          if (pswd.length < 8) {
               $('#length').removeClass('valid').addClass('invalid');
          }
          else {
               $('#length').removeClass('invalid').addClass('valid');
          }

     }).focus(function() {
         $('.error').hide();
    });
});

function validatePass() {
     var password = document.getElementById("password").value;

     if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/\d/) && password.match(/[^A-Za-z0-9]/) && password.length >= 8) {
          $('#error').show();
          document.getElementById('error').innerHTML = "Congrats!";
     } else if (password == 0) {
          $('#error').show();
          document.getElementById('error').innerHTML = "Enter a password.";
     } else {
          $('#error').show();
          document.getElementById('error').innerHTML = "The password you entered is either invalid or does not meet the requirements! Please, try again.";
     }
}