console.log("Script Connected!");

const themeToggleButton = document.querySelector('#theme-toggle-button');
const body = document.querySelector('body');

const searchInput = document.querySelector('#search-input');
const movieLinks = document.querySelectorAll('.movie-card-link');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggleButton.textContent = '☀️';
}

themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  const isDarkMode = body.classList.contains('dark-mode');
  themeToggleButton.textContent = isDarkMode ? '☀️' : '🌙';

  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  movieLinks.forEach(link => {
    const movieTitle = link.querySelector('h3').textContent.toLowerCase();

    if (movieTitle.includes(searchTerm)) {
      link.style.display = 'block'; 
    } else {
      link.style.display = 'none'; 
    }
  });
});