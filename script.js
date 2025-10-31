// Ensure the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select all squares using the class
  const squares = document.querySelectorAll('.square');
  
  // Define color constants (matching CSS variables for consistency)
  const lavender = '#E6E6FA';
  const coffee   = '#6F4E37';

  // Initialize all squares to lavender (ensures initial state)
  squares.forEach(sq => sq.style.backgroundColor = lavender);

  // Attach event listeners to each square
  squares.forEach((sq) => {
    
    // --- Mouse Enter Logic ---
    sq.addEventListener('mouseenter', function() {
      // When the mouse enters the current square (sq),
      // iterate over ALL squares...
      squares.forEach(other => {
        // ...and change the color ONLY if it's NOT the current square.
        if (other !== sq) {
          other.style.backgroundColor = coffee;
        }
      });
    });

    // --- Mouse Leave Logic ---
    sq.addEventListener('mouseleave', function() {
      // When the mouse leaves ANY square, reset ALL squares to lavender.
      squares.forEach(s => s.style.backgroundColor = lavender);
    });
  });
});