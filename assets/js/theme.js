const themeToggle = document.querySelector('#theme-toggle');
themeToggle.style.display = 'block';

const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (savedTheme === null && prefersDarkScheme)) {
    document.documentElement.classList.add('dark-theme');
}

function toggleTheme() {
    const isDarkTheme = document.documentElement.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

themeToggle.addEventListener('click', toggleTheme);