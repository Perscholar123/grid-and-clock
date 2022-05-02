
//////// SELECT ELEMENTS
const wrapperElement = document.querySelector(".wrapper");

const minuteInput = document.querySelector(".minutes");

const secondInput = document.querySelector(".seconds");

////// DOM MANIPULATION

//////// ADD FUNCTIONALITY
minuteInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    secondInput.focus();
  }
});

// Add an event listener to the second box
secondInput.addEventListener("keydown", function (e) {
  // Initialize minutes and seconds
  let minutes = 0;
  let seconds = 0;

  // Verify user wants to start the clock
  if (e.keyCode === 13) {
    // Retrieve whatever the user entered inside the boxes
    let minuteValue = minuteInput.value;

    // Retrieve the second values
    let secondValue = secondInput.value;

    // Show the starting values of the clock
    minuteInput.value = String(minutes).padStart(2, "0");
    secondInput.value = String(seconds).padStart(2, "0");

    // Create an interval and retrieve and retrieve the interval id
    const secondId = setInterval(() => {
      // Add +1 to each previously displayed second
      seconds++;

      // If my seconds get to 60 add +1 to my minutes
      if (Number(seconds) === 60) {
        ++minutes;

        minuteInput.value = String(minutes).padStart(2, "0");

        // Reset the second
        seconds = 0;
      }

      // Verify that the predefined minute, second  combo equal to the timer
      if (minutes === Number(minuteValue) && seconds === Number(secondValue)) {
        // Stop the timer
        clearInterval(secondId);

        // Change the background
        wrapperElement.classList.add("red-class");
      }

      // Otherwise do nothing
      secondInput.value = String(seconds).padStart(2, "0");
    }, 1000);
  }
});
