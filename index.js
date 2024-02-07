function dance() {
    const gifOne = document.getElementById("gifOne");
    const videoNo = document.getElementById("videoNo");
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const heading = document.querySelector("h2");

    // Hide the GIF
    gifOne.style.display = "none";
    heading.style.display = "none";
    noButton.style.display = "none";
     yesButton.style.display = "none";

    // Display the "No" video
    videoNo.style.display = "block";
    videoNo.play(); // Auto-play the "No" video

    // Disable the buttons after selecting a video
   
}

function moveNo() {
    const noButton = document.getElementById("no");

    // Move the "No" button off the screen
    noButton.style.position = "absolute";
    noButton.style.bottom = "100px";
}