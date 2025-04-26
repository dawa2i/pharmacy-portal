document.addEventListener('DOMContentLoaded', () => {
    const healthForm = document.getElementById('healthForm');

    healthForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            age: document.getElementById('age').value,
            sex: document.querySelector('input[name="sex"]:checked').value,
            chronic: document.querySelector('input[name="chronic"]:checked').value,
            treatment: document.querySelector('input[name="treatment"]:checked').value
        };

        // Save to localStorage for later use if needed
        localStorage.setItem('healthData', JSON.stringify(formData));
        
        // Redirect to main categories page
        window.location.href = 'home.html';
    });
});
