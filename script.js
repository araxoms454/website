// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove "active-link" class from all tab-links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove "active-tab" class from all tab-contents
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add "active-link" class to the clicked tab
    event.currentTarget.classList.add("active-link");

    // Add "active-tab" class to the corresponding content
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0"; // Slide the menu in
    sidemenu.classList.add("open"); // Add the 'open' class to show close button
}

function closemenu() {
    sidemenu.style.right = "-200px"; // Slide the menu out
    sidemenu.classList.remove("open"); // Remove the 'open' class to hide close button
}


// Google Sheets Form Submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbwkfvARHtZHso973JyWRL_Fx8ASWKvUgRRANk1WhZDbZKd0nM8XDRwhaCj6yGSVI0JK/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000); // Clear message after 5 seconds
            form.reset(); // Reset form fields
        })
        .catch(error => {
            msg.innerHTML = "Error sending message. Please try again.";
            console.error('Error!', error.message);
        });
});

    document.getElementById('download-cv').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior for demo
        // Simulate file download or trigger an actual download
        setTimeout(() => {
            const tick = document.getElementById('download-tick');
            tick.classList.remove('hidden'); // Show the tick mark
        }, 500); // Simulate a short delay
    });

