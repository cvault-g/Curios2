const toggleSwitch = document.querySelector('#toggle-theme');
const icon = document.querySelector('.toggle-switch-icon:first-child i');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme);

// Cargar el tema guardado al cargar la página
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    icon.classList.replace('fa-moon', 'fa-sun');
  } else if (currentTheme === 'light') {
    toggleSwitch.checked = false;
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

//Buscador
