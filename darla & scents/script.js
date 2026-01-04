// Greeting and Date
const greetingEl = document.getElementById('greeting');
const dateEl = document.getElementById('date');

const now = new Date();
const hour = now.getHours();
let greeting = 'Hello';

if(hour < 12) greeting = 'Good morning';
else if(hour < 18) greeting = 'Good afternoon';
else greeting = 'Good evening';

if(greetingEl) greetingEl.textContent = `${greeting}! Welcome to Darla & Scents.`;
if(dateEl) dateEl.textContent = `Today is ${now.toDateString()}`;

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Shopping Cart
let cartCount = 0;
const cartCountEl = document.getElementById('cart-count');

const addCartButtons = document.querySelectorAll('.add-cart');
addCartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    if(cartCountEl) cartCountEl.textContent = cartCount;
    alert('Added to cart!');
  });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if(!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('Message sent successfully!');
  contactForm.reset();
});
