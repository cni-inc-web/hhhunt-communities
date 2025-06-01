document.addEventListener("DOMContentLoaded", function () {
  const formDone = document.querySelector('.w-form-done');
  const targetElement1 = document.querySelector('.fc_form-p.fc-contact.line2.no-bg');
  const targetElement2 = document.querySelector('.zoning-wh-click-to-enlarge.al.lighter');

  if (formDone && targetElement1 && targetElement2) {
    const style = window.getComputedStyle(formDone);
    if (style.display !== 'none') {
      targetElement1.style.display = 'none';
      targetElement2.style.display = 'none';
    }
  }
});
