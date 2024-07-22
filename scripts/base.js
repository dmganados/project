document.addEventListener('DOMContentLoaded', () => {
    // Header and Navigation 
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Character Profile Section
    fetch('characters.json')
        .then(response => response.json())
        .then(data => {
            const charactersContainer = document.getElementById('characters-container');
            const alliesList = document.getElementById('allies-list');
            const enemiesList = document.getElementById('enemies-list');
            const developmentContainer = document.getElementById('development-container');

            // Populate Character Profile
            data.characters.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');
                characterDiv.innerHTML = `
                    <img src="${character.image}" alt="${character.name} loading="lazy">
                    <div class="label">${character.name}</div>
                    <h3>Role: ${character.role}</h3>
                    ${character.devilFruit ? `<p>Devil Fruit: ${character.devilFruit}</p>` : ''}
                    ${character.weapons ? `<p>Weapons: ${character.weapons}</p>` : ''}
                    ${character.skills ? `<p>Skills: ${character.skills}</p>` : ''}
                    ${character.weapon ? `<p>Weapon: ${character.weapon}</p>` : ''}
                    ${character.fightingStyle ? `<p>Fighting Style: ${character.fightingStyle}</p>` : ''}
                    ${character.modifications ? `<p>Modifications: ${character.modifications}</p>` : ''}
                    <p>${character.description}</p>
                `;
                charactersContainer.appendChild(characterDiv);
            });

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

            // Populate Allies
            data.allies.forEach(ally => {
                const allyItem = document.createElement('li');
                allyItem.innerHTML = `
                    <img src="${ally.image}" alt="${ally.name}" class="small-image" loading="lazy">
                    <p>${ally.name}: ${ally.description}</p>
                `;
                alliesList.appendChild(allyItem);
            });

            // Populate Enemies
            data.enemies.forEach(enemy => {
                const enemyItem = document.createElement('li');
                enemyItem.innerHTML = `
                    <img src="${enemy.image}" alt="${enemy.name}" class="small-image" loading="lazy">
                    <p>${enemy.name}: ${enemy.description}</p>
                `;
                enemiesList.appendChild(enemyItem);
            });

            // Populate Character Development
            developmentContainer.innerHTML = `
                <ul>
                    ${data.development.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        })
        .catch(error => {
            console.error('Error fetching character data:', error);
        });        
});