export const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  });

  const elements = document.querySelectorAll('.fade-in-section');
  elements.forEach(el => observer.observe(el));
};