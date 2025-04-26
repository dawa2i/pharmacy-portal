document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form');

    // Tab switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetForm = tab.dataset.tab;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding form
            forms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${targetForm}Form`) {
                    form.classList.add('active');
                }
            });
        });
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add login logic here
        window.location.href = 'questionnaire.html';
    });

    // Handle signup form submission
    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add signup logic here
        window.location.href = 'questionnaire.html';
    });
});
