document.addEventListener("DOMContentLoaded", function () {
  const formDone = document.querySelector('.w-form-done');
  const targetElement = document.querySelector('.fc_form-p.fc-contact.line2.no-bg');

  if (formDone && targetElement) {
    const style = window.getComputedStyle(formDone);
    if (style.display !== 'none') {
      targetElement.style.display = 'none';
    }
  }
});
