//your JS code here. If required.
const squares = document.querySelectorAll('.square');
const total = squares.length;

squares.forEach((el, idx) => {
  el.addEventListener('mouseenter', () => {
    squares.forEach((s, i) => {
      s.style.backgroundColor = (i === idx) ? '#E6E6FA' : '#6F4E37';
    });
  });
});

// Optional: reset on mouseleave
document.querySelector('.squares').addEventListener('mouseleave', () => {
  squares.forEach(s => s.style.backgroundColor = '#E6E6FA');
});
