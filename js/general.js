
function handleNav() {
    const status = $('#navbar')[0].style.display;

    switch (status) {
        case "none":
            $('#navbar')[0].style.display = "block";
            break;
        case "block":
            $('#navbar')[0].style.display = "none";
            break;
        default:
            $('#navbar')[0].style.display = "block";
            break;
    }
}