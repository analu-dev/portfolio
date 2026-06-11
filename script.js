const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnLoading = document.getElementById('btn-loading');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      e.preventDefault();
      return;
    }

    // Mostra loading, mas deixa o form submeter normalmente
    if (submitBtn && btnText && btnLoading) {
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline-flex';
    }
  });
}