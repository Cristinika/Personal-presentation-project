function animateJobs() {
    var jobs = document.querySelectorAll('.job');
  
    function checkJobVisibility() {
      jobs.forEach(function (job) {
        if (isElementInViewport(job) && !job.classList.contains('animate')) {
          job.classList.add('animate');
        }
      });
    }
  
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Call the checkJobVisibility function on page load and scroll event
    window.addEventListener('load', checkJobVisibility);
    window.addEventListener('scroll', checkJobVisibility);
  }
  
  animateJobs();
  
  window.addEventListener('DOMContentLoaded', function () {
    var paragraphs = document.querySelectorAll('.animate');
  
    function animateParagraphs() {
      paragraphs.forEach(function (paragraph) {
        if (isElementInViewport(paragraph) && !paragraph.classList.contains('visible')) {
          paragraph.classList.add('visible');
        }
      });
    }
  
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Call the animateParagraphs function on page load and scroll event
    window.addEventListener('load', animateParagraphs);
    window.addEventListener('scroll', animateParagraphs);
  });
  