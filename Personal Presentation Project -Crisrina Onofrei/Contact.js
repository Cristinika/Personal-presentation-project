// Get references to the form fields
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

// Add the form submission event
document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Stop the default form submission behavior

  // Check each field individually
  if (nameInput.value === "") {
    nameInput.classList.add("error");
  } else {
    nameInput.classList.remove("error");
  }

  if (emailInput.value === "") {
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }

  if (messageInput.value === "") {
    messageInput.classList.add("error");
  } else {
    messageInput.classList.remove("error");
  }

  // Check if the form is complete and display the thank you modal
  if (nameInput.value !== "" && emailInput.value !== "" && messageInput.value !== "") {
    showModal();
  }
});

// Function to display the modal
function showModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Get a reference to the modal close button
var closeModalButton = document.getElementById("closeModalBtn");

// Add click event to the modal close button
closeModalButton.addEventListener("click", closeModal);

// Icons

// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the icon elements
  var githubIcon = document.querySelector('.fa-github');
  var instagramIcon = document.querySelector('.fa-instagram');
  var linkedinIcon = document.querySelector('.fa-linkedin');
  var facebookIcon = document.querySelector('.fa-facebook');

  // Add click events to each icon
  githubIcon.addEventListener('click', function() {
    window.open('https://github.com/cristinaonofrei', '_blank');
  });

  instagramIcon.addEventListener('click', function() {
    window.open('https://www.instagram.com/cristinaonofrei07', '_blank');
  });

  linkedinIcon.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/cristina-onofrei', '_blank');
  });

  facebookIcon.addEventListener('click', function() {
    window.open('https://www.facebook.com/onofrei.cristina.35', '_blank');
  });
});


// Map

// Get the map container
document.addEventListener("DOMContentLoaded", function() {
  var mapContainer = document.getElementById("map");

  // Location coordinates
  var latitude = 44.4552907;
  var longitude = 26.0456741;

  // Initialize the map using the coordinates
  var platform = new H.service.Platform({
    apikey: "273Tl_BrdYwJs_Kl7buTCAgwLkl_Dp03ueTKm79gl_g"
  });
  var defaultLayers = platform.createDefaultLayers();
  var map = new H.Map(mapContainer, defaultLayers.vector.normal.map, {
    center: { lat: 44.4552907, lng: 26.0456741 },
    zoom: 14
  });

  // Add a pin at your location
  var marker = new H.map.Marker({ lat: 44.4552907, lng: 26.0456741 });
  map.addObject(marker);

  // Add functionality for zoom buttons
  var zoomInBtn = document.getElementById("zoomInBtn");
  var zoomOutBtn = document.getElementById("zoomOutBtn");

  zoomInBtn.addEventListener("click", function() {
    map.setZoom(map.getZoom() + 1);
  });

  zoomOutBtn.addEventListener("click", function() {
    map.setZoom(map.getZoom() - 1);
  });
});
