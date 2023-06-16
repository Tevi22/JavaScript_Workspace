window.onload = function () {
    // Set the countdown duration (10 minutes)
    const countdownDuration = 10 * 60 * 1000; // 10 minutes in milliseconds

    // Get the current timestamp
    let startTime = parseInt(sessionStorage.getItem('countdownSartTime'));

    if (isNaN(startTime)) {
        // Handle the case when startTime is not available or invalid
        console.log('Invalid startTime. Starting countdown from the current time.');
        startTime = new Date().getTime();
    }

    // Calculate the end time by adding the countdown duration to the start time
    const endTime = startTime + countdownDuration;

    // Get the countdown element by its id
    const countdownElement = document.getElementById('timmer');

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        console.log('timmer added')
        // Get the current timestamp
        const currentTime = new Date().getTime();

        // Calculate the remaining time
        const remainingTime = endTime - currentTime;

        // Calculate minutes and seconds
        const minutes = Math.floor(remainingTime / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Display the countdown in the console or update the HTML element
        const countdownTimer = minutes + 'm:' + seconds + 's';
        countdownElement.innerHTML = countdownTimer;

        // Check if the countdown is finished
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'Offer ended!';
            // Perform any desired actions here after the countdown finishes
        }
    }

    function navigateToPage(url) {
        window.location.href = url;
    }
    
    document.getElementById('prevent').addEventListener('click', function() {
        navigateToPage('../html/preventive-maintenance-service.html')
    })
    
    document.getElementById('body-repair').addEventListener('click', function() {
        navigateToPage('../html/body-repair-service.html')
    })
    
    document.getElementById('car-care').addEventListener('click', function() {
        navigateToPage('../html/car-care-service.html')
    })
}