document.addEventListener('DOMContentLoaded', () => {
    // Header and Navigation 
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    // const menuItems = document.querySelectorAll('nav ul li a');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });


    // Handle clicks outside the menu to remove active item underline
    document.addEventListener('click', (event) => {
        if (!event.target.closest('nav ul') && !event.target.closest('.menu-toggle')) {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        }
    });


    // Create 3D carousel as hero image
    fetch('characters.json').then(res => res.json()).then(data => {
        createCarouselItems(data.characters);
    })
    .catch(error => console.error('Error fetching character data:', error));

    function createCarouselItems(characters) {
        const carousel = document.getElementById('carousel');

        characters.forEach((character, index) => {
            // Div for each carousel item
            const item = document.createElement('div');
            item.classList.add('carousel-item');

            // Position of each item in 3D space based on index
            item.style.transform = `rotateY(${index * (360 / characters.length)}deg) translateZ(400px)`

            // Add image
            const img = document.createElement('img');
            img.src = character.image;
            img.alt = character.name;

            // Append image to the item div
            item.appendChild(img);

            // Append item to the carousel
            carousel.appendChild(item);
        })
    }

});

