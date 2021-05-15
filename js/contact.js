
const Swal = window.Swal;

function sendMessage() {
    const name = $('#name').val();
    const email = $('#email').val();
    const subject = $('#subject').val();
    const message = $('#message').val();

    if (!name || !email || !subject || !message) {
        return Swal.fire({
            title: 'Error!',
            text: 'Fill in all fields to continue',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    if (!validateEmail(email)) {
        return Swal.fire({
            title: 'Error!',
            text: 'The email entered is invalid',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully',
        icon: 'success',
        confirmButtonText: 'Yeah!'
    });

    cleanForm();
}

function cleanForm() {
    $('#name').val('');
    $('#email').val('');
    $('#subject').val('');
    $('#message').val('');
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function addListener(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        sendMessage();
    }
}

window.onload = () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    name.addEventListener("keyup", addListener);
    email.addEventListener("keyup", addListener);
    subject.addEventListener("keyup", addListener);
    message.addEventListener("keyup", addListener);
};