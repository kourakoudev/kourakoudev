document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent to kokoukourakou856@gmail.com`);
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Vérifie si le Dark Mode était activé précédemment
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Mode Clair';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const darkModeEnabled = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', darkModeEnabled ? 'enabled' : 'disabled');
        toggleButton.textContent = darkModeEnabled ? 'Mode Clair' : 'Mode Sombre';
    });
});



