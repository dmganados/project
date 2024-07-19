// JavaScript to dynamically populate the current year
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
});

// JavaScript to dynamically populate the last modified date
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
});