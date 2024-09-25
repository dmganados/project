document.addEventListener('DOMContentLoaded', () => {
    // Header and Navigation 
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    // const menuItems = document.querySelectorAll('nav ul li a');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Handle clicks on menu items
    // menuItems.forEach(item => {
    //     item.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         // Remove active class from all menu items
    //         menuItems.forEach(i => i.classList.remove('active'));

    //         // Add active class to the clicked menu item
    //         item.classList.add('active');

    //         // Smooth scrolling to the section
    //         document.querySelector(item.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });

    //         // Close menu after clicking a menu item on small screens
    //         if (window.innerWidth <= 768) {
    //             navMenu.classList.remove('active');
    //         }
    //     });
    // });

    // Handle clicks outside the menu to remove active item underline
    document.addEventListener('click', (event) => {
        if (!event.target.closest('nav ul') && !event.target.closest('.menu-toggle')) {
            // Don't remove the active class from the current active item
            // Only handle menu close on small screens
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        }
    });

    // document.addEventListener('click', (event) => {
    //     if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    //         if (window.innerWidth <= 768) {
    //             navMenu.classList.remove('active');
    //         }
    //     }
    // });

    // Ensure active item stays underlined on larger screens
    // menuItems.forEach(item => {
    //     item.addEventListener('blur', () => {
    //         if (item.classList.contains('active')) {
    //             item.classList.add('active');
    //         }
    //     });
    // });


    // Character Profile Section
    // fetch('characters.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         // const charactersContainer = document.getElementById('characters-container');
    //         const alliesList = document.getElementById('allies-list');
    //         const enemiesList = document.getElementById('enemies-list');
    //         const developmentContainer = document.getElementById('development-container');

    //         // Populate Allies
    //         // data.allies.forEach(ally => {
    //         //     const allyItem = document.createElement('li');
    //         //     allyItem.innerHTML = `
    //         //         <img src="${ally.image}" alt="${ally.name}" class="small-image" loading="lazy">
    //         //         <p>${ally.name}: ${ally.description}</p>
    //         //     `;
    //         //     alliesList.appendChild(allyItem);
    //         // });

    //         // Populate Enemies
    //         // data.enemies.forEach(enemy => {
    //         //     const enemyItem = document.createElement('li');
    //         //     enemyItem.innerHTML = `
    //         //         <img src="${enemy.image}" alt="${enemy.name}" class="small-image" loading="lazy">
    //         //         <p>${enemy.name}: ${enemy.description}</p>
    //         //     `;
    //         //     enemiesList.appendChild(enemyItem);
    //         // });

    //         // Populate Character Development
    //         developmentContainer.innerHTML = `
    //             <ul>
    //                 ${data.development.map(item => `<li>${item}</li>`).join('')}
    //             </ul>
    //         `;
    //     })
        // .catch(error => {
        //     console.error('Error fetching character data:', error);
        // });        

    // fetch('episodes.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Populate episode summaries
    //         const episodeSumarriesContainer = document.getElementById('episode-summaries-container');
    //         data.episodes.forEach(episode => {
    //             const episodeDiv = document.createElement('div');
    //             episodeDiv.classList.add('episode-summary');
    //             episodeDiv.innerHTML = `
    //                 <img src="https://wallpapers.com/images/high/one-piece-straw-hat-crew-adventure-yc7b7oz9x34htmeo.webp" alt="One Piece Image" loading="lazy">
    //                 <div class="episode-summary-content">
    //                     <h4>Episode ${episode.number}: "${episode.title}"</h4>
    //                     <p><strong>Summary:</strong> ${episode.summary}</p>
    //                     <p><strong>Review:</strong> ${episode.review}</p>
    //                     <p><strong>Key Moments:</strong> ${episode.key_moments}</p>
    //                 </div>                    
    //             `;
    //             episodeSumarriesContainer.appendChild(episodeDiv);
    //         });

    //         // Populate filler guides
    //         const fillerGuidesContainer = document.getElementById('filler-guides-container');
    //         data.fillerArcs.forEach(arc => {
    //             const arcDiv = document.createElement('div');
    //             arcDiv.classList.add('filler-arc');
    //             arcDiv.innerHTML = `
    //                 <img src="https://wallpapers.com/images/high/one-piece-chibi-2560-x-1440-i0getzho8x4u7o16.webp" alt="One Piece Image" loading="lazy">
    //                 <div class="filler-arc-content">
    //                     <h4>${arc.title}</h4>
    //                     <p><strong>Episodes Covered:</strong> ${arc.episodes_covered}</p>
    //                     <p><strong>Overview:</strong> ${arc.overview}</p>
    //                     <p><strong>Recommendation:</strong> ${arc.recommendation}</p>
    //                 </div>
    //             `;
    //             fillerGuidesContainer.appendChild(arcDiv);
    //         });

    //         // Populate upcoming episodes
    //         const upcomingEpisodesContainer = document.getElementById('upcoming-episodes-container');
    //         data.upcomingEpisodes.forEach(episode => {
    //             const upcomingEpisodeDiv = document.createElement('div');
    //             upcomingEpisodeDiv.classList.add('upcoming-episode');
    //             upcomingEpisodeDiv.innerHTML = `
    //                 <h4>${episode.title}</h4>
    //                 <p><strong>Release Date:</strong> ${episode.release_date}</p>
    //                 <p><strong>Preview:</strong> ${episode.preview}</p>
    //                 <p><strong>Speculations:</strong> ${episode.speculations}</p>
    //             `;
    //             upcomingEpisodesContainer.appendChild(upcomingEpisodeDiv);
    //         });
    //     })
        // .catch(error => console.error('Error fetching the JSON data:', error));

        // fetch('blog.json')
        // .then(response => response.json())
        // .then(data => {
        //     // Populate latest posts
        //     const latestPostsContainer = document.getElementById('latest-posts-container');
        //     data.latestPosts.forEach(post => {
        //         const postDiv = document.createElement('div');
        //         postDiv.classList.add('post');
        //         postDiv.innerHTML = `
        //             <h4>${post.title}</h4>
        //             <p>${post.content}</p>
        //         `;
        //         latestPostsContainer.appendChild(postDiv);
        //     });

        //     // Populate opinion articles
        //     const opinionArticlesContainer = document.getElementById('opinion-articles-container');
        //     data.opinionArticles.forEach(article => {
        //         const articleDiv = document.createElement('div');
        //         articleDiv.classList.add('opinion-article');
        //         articleDiv.innerHTML = `
        //             <h4>${article.title}</h4>
        //             <p>${article.content}</p>
        //         `;
        //         opinionArticlesContainer.appendChild(articleDiv);
        //     });

        //     // Populate guest posts
        //     const guestPostsContainer = document.getElementById('guest-posts-container');
        //     data.guestPosts.forEach(post => {
        //         const guestPostDiv = document.createElement('div');
        //         guestPostDiv.classList.add('guest-post');
        //         guestPostDiv.innerHTML = `
        //             <h4>${post.title}</h4>
        //             <p>${post.content}</p>
        //         `;
        //         guestPostsContainer.appendChild(guestPostDiv);
        //     });
        // })
        // .catch(error => console.error('Error fetching blog data:', error));
    

    // document.getElementById('contact-form').addEventListener('submit', function(event) {
    //     event.preventDefault(); // Prevent the default form submission
    
    //     // Get form values
    //     var name = document.getElementById('name').value;
    //     var email = document.getElementById('email').value;
    //     var message = document.getElementById('message').value;
    
    //     // Simple form validation
    //     if (name && email && message) {
    //         document.getElementById('form-message').textContent = "Thank you for reaching out, " + name + "! Your message has been sent.";
    //         document.getElementById('form-message').style.color = "green";
    //         document.getElementById('contact-form').reset(); // Reset the form after submission
    //     } else {
    //         document.getElementById('form-message').textContent = "Please fill out all fields.";
    //         document.getElementById('form-message').style.color = "red";
    //     }
    // });


});

