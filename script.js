// Ensure the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const squares = document.querySelectorAll('.square');
  const lavender = '#E6E6FA';
  const coffee   = '#6F4E37';

  // Initialize all squares to lavender (in case not set)
  squares.forEach(sq => sq.style.backgroundColor = lavender);

  // Attach event listeners to each square
  squares.forEach((sq) => {
    sq.addEventListener('mouseenter', function() {
      // When entering, set others to coffee
      squares.forEach(other => {
        if (other !== sq) other.style.backgroundColor = coffee;
      });
    });

    sq.addEventListener('mouseleave', function() {
      // When leaving, reset all to lavender
      squares.forEach(s => s.style.backgroundColor = lavender);
    });
  });
});