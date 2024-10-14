
const validateContact = () => {
    const name = document.contactForm.fullname.value;
    const phone = document.contactForm.phone.value;
    const email = document.contactForm.email.value;

    if (!name || name.length < 3) {
        alert("Please enter a valid name.");
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    return true;
};
