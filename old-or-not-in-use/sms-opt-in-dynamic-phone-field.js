document.addEventListener("DOMContentLoaded", function () {
    const smsCheckbox = document.querySelector('.sms-opt-in');
    const phoneFieldContainer = document.querySelector('.sms-dynamic-phone-field');

    if (!smsCheckbox) {
        console.error('Checkbox with class .sms-opt-in not found.');
        return;
    }
    if (!phoneFieldContainer) {
        console.error('Container with class .sms-dynamic-phone-field not found.');
        return;
    }

    const phoneInput = phoneFieldContainer.querySelector('input');
    if (!phoneInput) {
        console.error('No <input> found inside .sms-dynamic-phone-field.');
        return;
    }

    const phoneLabel = phoneFieldContainer.querySelector('.fieldlabel');
    if (!phoneLabel) {
        console.error('No element with class .fieldlabel found inside phone field container.');
        return;
    }

    function updatePhoneFieldVisibility() {
        const isChecked = smsCheckbox.classList.contains('w--redirected-checked') || smsCheckbox.classList.contains('checked');
        //console.log('Checkbox has class .checked:', isChecked);

        if (isChecked) {
            phoneInput.setAttribute('required', 'required');
            phoneLabel.textContent = 'Phone:'; // or 'Phone: (required)' if you prefer
            //console.log('Phone field set to required and label updated');
        } else {
            phoneInput.removeAttribute('required');
            phoneLabel.textContent = 'Phone: (optional)';
            //console.log('Phone field set to optional and label updated');
        }
    }

    // Initial check
    updatePhoneFieldVisibility();

    // Watch for changes using a MutationObserver (since Webflow doesn't trigger JS events on class change)
    const observer = new MutationObserver(updatePhoneFieldVisibility);
    observer.observe(smsCheckbox, { attributes: true, attributeFilter: ['class'] });

    //console.log('MutationObserver set up to monitor checkbox class changes.');
});
