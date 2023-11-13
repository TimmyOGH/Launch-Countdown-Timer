// Check if target date is already stored in localStorage
var targetDate = localStorage.getItem("targetDate");

// If not, set target date to 14 days from now
if (!targetDate) {
    targetDate = new Date();

    targetDate.setDate(targetDate.getDate() + 14);

    localStorage.setItem("targetDate", targetDate.getTime());
} else {
    targetDate = new Date(parseInt(targetDate));
}

// Update countdown every second
var countdownInterval = setInterval(function () {
    // Get current date and time
    var currentDate = new Date().getTime();

    // Get time difference
    var timeDifference = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    var hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    var minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));

    var seconds = Math.floor(timeDifference % (1000 * 60) / (1000));

    // Display countdown
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');

    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');

    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');

    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    // Clear interval when countdown is expired
    if (timeDifference <= 0) {
        clearInterval(countdownInterval);

        // Clear target date from localStorage
        localStorage.removeItem("targetDate");
    }
}, 1000);
