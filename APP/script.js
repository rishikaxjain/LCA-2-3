// 1. Custom function + DOM traversal using querySelectorAll & getElementById
function filterMenu(category) {
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // 2. Add event listeners to filter buttons
  const filterButtons = document.querySelectorAll('.filters button');
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Change button style (class list)
      document.querySelector('.filters .active').classList.remove('active');
      this.classList.add('active');
  
      // Call custom function
      const category = this.innerText.toLowerCase();
      filterMenu(category);
    });
  });
  
  // 3. Mouse events: highlight card on hover
  const menuCards = document.getElementsByTagName('div'); // DOM traversal method 2
  Array.from(menuCards).forEach(card => {
    if (card.classList.contains('menu-card')) {
      card.addEventListener('mouseover', () => {
        card.classList.add('highlight'); // Add temporary style
      });
      card.addEventListener('mouseout', () => {
        card.classList.remove('highlight');
      });
    }
  });
