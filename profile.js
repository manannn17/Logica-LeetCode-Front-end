// script.js
document.getElementById('logoutButton').addEventListener('click', () => {
    alert('You have been logged out!');
    // Redirect to login page (example: "login.html")
    window.location.href = 'login.html';
});

document.getElementById('editProfileButton').addEventListener('click', () => {
    alert('Redirecting to edit profile...');
    // Redirect to edit profile page (example: "edit-profile.html")
    window.location.href = 'edit-profile.html';
});
