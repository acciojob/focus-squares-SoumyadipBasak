// Ensure the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const squares = document.querySelectorAll('.square');

  // FIX: Using exact RGB string values to match Cypress assertions.
  // rgb(230, 230, 250) corresponds to #E6E6FA (Lavender)
  const lavender = 'rgb(230, 230, 250)';
  // rgb(111, 78, 55) corresponds to #6F4E37 (Coffee)
  const coffee   = 'rgb(111, 78, 55)';

  // Initialize all squares to lavender (ensures initial state)
  squares.forEach(sq => sq.style.backgroundColor = lavender);

  // Attach event listeners to each square
  squares.forEach((sq) => {
    
    // Mouse Enter: Change others to Coffee
    sq.addEventListener('mouseenter', function() {
      squares.forEach(other => {
        // If it's NOT the square the mouse entered, change its color
        if (other !== sq) {
          other.style.backgroundColor = coffee;
        }
      });
    });

    // Mouse Leave: Reset all to Lavender
    sq.addEventListener('mouseleave', function() {
      // Reset all squares to the base lavender color
      squares.forEach(s => s.style.backgroundColor = lavender);
    });
  });
});