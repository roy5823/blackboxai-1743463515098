// Shared dark mode functionality
function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const html = document.documentElement;
    const updateTheme = (isDark) => {
        html.classList.toggle('dark', isDark);
        localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark 
            ? '<i class="fas fa-sun text-yellow-300"></i>' 
            : '<i class="fas fa-moon text-gray-700"></i>';
    };

    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('color-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateTheme(savedTheme ? savedTheme === 'dark' : systemDark);

    // Toggle handler
    themeToggle.addEventListener('click', () => {
        const isDark = !html.classList.contains('dark');
        updateTheme(isDark);
    });
}
document.addEventListener('DOMContentLoaded', initDarkMode);