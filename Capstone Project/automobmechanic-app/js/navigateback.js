window.onload = function () {

    const back = document.getElementById('back');
    const booking = document.getElementById('booking')
    function navigateBack() {

        if (back) {
            window.history.back();
        }
    }

    if (back) {
        back.addEventListener('click', navigateBack)
    }

    function handleBooking() {

        if (booking) {
            location.assign('../html/booking.html')
        }
    }

    if (booking) {
        booking.addEventListener('click', handleBooking)
    }

}  