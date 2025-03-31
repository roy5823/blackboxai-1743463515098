// Modern Theme System v2
class ThemeManager {
  constructor() {
    this.themes = {
      light: {
        colors: {
          primary: '59 130 246',
          secondary: '168 85 247',
          background: '249 250 251',
          text: '17 24 39',
          card: '255 255 255'
        },
        icon: '<i class="fas fa-moon text-indigo-600 animate-pulse"></i>'
      },
      dark: {
        colors: {
          primary: '99 102 241', 
          secondary: '217 70 239',
          background: '17 24 39',
          text: '243 244 246',
          card: '31 41 55'
        },
        icon: '<i class="fas fa-sun text-yellow-300 animate-spin"></i>'
      }
    };
    this.init();
  }

  init() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.apply(savedTheme);
    this.setupToggle();
  }

  apply(theme) {
    const config = this.themes[theme];
    const root = document.documentElement;
    
    Object.entries(config.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    
    const toggle = document.getElementById('themeToggle');
    if (toggle) toggle.innerHTML = config.icon;
  }

  setupToggle() {
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        this.apply(isDark ? 'light' : 'dark');
      });
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});