document.addEventListener('DOMContentLoaded', () => {
    // Header and Navigation 
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Character Profile Section
    $.getJSON('characters.json', function(data) {
        let charactersHtml = '';
        data.forEach(function(character) {
            charactersHtml += `
                <div class="character">
                    <img src="${character.image}" alt="${character.name} loading="lazy">
                    <p class="label">${character.label}</p>
                    <h3>${character.name}</h3>
                    <p>${character.description}</p>
                </div>
            `;
        });
        $('.carousel').html(charactersHtml);

        // Initialize the carousel
        $('.carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ] 
        });
    });
});