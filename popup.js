const notification = document.getElementById('notification');

notification.addEventListener('click', () => {
    notification.classList.add('hidden');
    setTimeout(() => {
        notification.style.display = 'none';
    }, 400); // Matches transition duration
});

// Optional: Auto-dismiss after 10 seconds
setTimeout(() => {
    if (!notification.classList.contains('hidden')) {
        notification.click();
    }
}, 10000);
