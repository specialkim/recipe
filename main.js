// Partnership Form Interaction
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('partnership-form');
  
  if (form) {
    // Basic form submission feedback
    form.addEventListener('submit', () => {
      // Formspree will redirect by default, but we can log for debug
      console.log('문의 양식이 전송되었습니다.');
    });
  }
});
