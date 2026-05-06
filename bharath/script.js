function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
}

function orderNow() {
  window.open("https://wa.me/919876543210", "_blank");
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add scroll animations
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const scrollTop = window.pageYOffset;
  
  sections.forEach(section => {
    const offset = section.offsetTop - window.innerHeight + 100;
    if (scrollTop > offset) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

// Initialize sections with fade-in effect
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
});