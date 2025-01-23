function showOverlay(imageSrc, title, camera, settings) {
  const overlay = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlay-img');
  const overlayDetails = document.getElementById('overlay-details');

  document.body.style.overflow = 'hidden';

  overlayImg.src = imageSrc;

  overlayDetails.innerHTML = `<strong>${title}</strong><br>${camera}<br>${settings}`;

  overlay.style.display = 'flex';
}

function hideOverlay(event) {
  document.body.style.overflow = 'auto';

  if (event.target.id === 'overlay' || event.target.className === 'close-btn') {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
}

// ナイトモード切り替え
const toggleSwitch = document.getElementById('toggle-night-mode');
toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('night-mode');
  const header = document.querySelector('header');
  header.classList.toggle('night-mode');
});
