// Așteaptă ca pagina să se încarce complet
document.addEventListener("DOMContentLoaded", function() {
    // Găsim elementul caruselului după ID
    var myCarousel = document.getElementById("myCarousel");

    // Activăm autoderularea caruselului cu o întârziere de 3 secunde
    // Schimbați 3000 la intervalul dorit în milisecunde (de exemplu, 5000 pentru 5 secunde)
    var carouselInterval = 3000;
    setInterval(function() {
      myCarousel.querySelector(".carousel-control-next").click();
    }, carouselInterval);
  });

  // Icons
 // Așteaptă până când documentul este complet încărcat
 document.addEventListener('DOMContentLoaded', function() {
    // Obține elementele iconițelor
    var githubIcon = document.querySelector('.fa-github');
    var instagramIcon = document.querySelector('.fa-instagram');
    var linkedinIcon = document.querySelector('.fa-linkedin');
    var facebookIcon = document.querySelector('.fa-facebook');
  
    // Adaugă evenimente de clic pe fiecare iconiță
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
  
  
