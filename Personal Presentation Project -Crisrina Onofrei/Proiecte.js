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

