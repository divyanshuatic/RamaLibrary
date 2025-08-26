document.addEventListener('DOMContentLoaded', () => {

    // --- Popup Modal --- //
    const modal = document.getElementById('popup-modal');
    const closeModalButton = document.getElementById('close-modal');

    // Show modal after 5 seconds
    setTimeout(() => {
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    }, 5000);

    // Close modal when the close button is clicked
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
    }

    // Close modal when clicking outside of it
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }

    // --- Sticky Header --- //
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('py-2');
            header.classList.add('py-4');
        }
    });

    // --- Mobile Menu --- //
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.getElementsByTagName('a');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when a link is clicked
    for(let link of navLinks){
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }

    // --- WhatsApp Contact Form --- //
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const phoneNumber = '7976020669'; // Your WhatsApp number

            const whatsappMessage = `Hi, I have a query.\n\nName: ${name}\nMessage: ${message}`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappUrl, '_blank');
        });
    }
});
