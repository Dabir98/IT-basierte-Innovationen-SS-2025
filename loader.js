// loader.js

function navigateWithLoader(targetUrl) {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'flex';
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 1200); // Ladezeit (ms)
  } else {
    window.location.href = targetUrl;
  }
}

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});
