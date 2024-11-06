document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sign-in_form');
    const modal = document.getElementById('modal');

    // Ensure modal is hidden on page load
    modal.style.display = 'none';

    // Form submission event
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent traditional form submission
        modal.style.display = 'flex'; // Show modal
        form.reset(); // Reset the form after submission
    });
});

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Hide modal
}

