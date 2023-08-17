// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

// Function to check if the cookie has been accepted
function hasAcceptedCookies() {
  return document.cookie.includes('cookiesAccepted=true');
}

// Function to hide the cookie banner and set the cookie when the "Accept" button is clicked
function acceptCookies() {
  setCookie('cookiesAccepted', 'true', 30); // Set a cookie that expires in 30 days
  const cookieBanner = document.getElementById('cookieBanner');
  if (cookieBanner) {
    cookieBanner.style.display = 'none';
  }
}

// Check if the cookies have been accepted, if not, show the cookie banner
if (!hasAcceptedCookies()) {
  const cookieBanner = document.getElementById('cookieBanner');
  if (cookieBanner) {
    cookieBanner.style.display = 'block';
  }
}

// Add an event listener to the "Accept" button
const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
if (acceptCookiesBtn) {
  acceptCookiesBtn.addEventListener('click', acceptCookies);
}
