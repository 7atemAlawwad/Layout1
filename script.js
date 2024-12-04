document.getElementById('menu-toggle').addEventListener('click', () => {
    const dashboard = document.querySelector('.dashboard');
    const sidebar = document.querySelector('.sidebar');
  
    dashboard.classList.toggle('expanded');
    sidebar.classList.toggle('expanded');
  });
  