window.onload = function () {
    const selectService = document.getElementById('selectService');
    const appointmentDate = document.getElementById('appointmentDate');
    const bookButton = document.getElementById('book-button');

    // Set the default selected option based on user's previous choice
    const selectedService = sessionStorage.getItem('selectedService');
    if (selectedService) {
        selectService.value = selectedService;
    }

    // Validate appointment date on input
    appointmentDate.oninput = function () {
        const currentDate = new Date();
        const selectedDate = new Date(appointmentDate.value);

        if (selectedDate < currentDate) {
            document.getElementById('errorMsg').textContent = 'Please select a future date for the appointment.';
        } else {
            document.getElementById('errorMsg').textContent = '';
        }
    };

    // Handle form submission
    bookButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Store the selected service in sessionStorage
        const selectedOption = selectService.options[selectService.selectedIndex];
        sessionStorage.setItem('selectedService', selectedOption.value);

        // Booking success page
        location.assign('../html/booking-success.html')
    });
};