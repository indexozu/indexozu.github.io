const header = document.getElementById('draggable');
let initialX, initialY;
let centerX, centerY;

function updateCenter() {
  centerX = window.innerWidth / 2 - header.offsetWidth / 2;
  centerY = window.innerHeight / 2 - header.offsetHeight / 2;
}

updateCenter(); // Call initially to set center coordinates

header.addEventListener('mousedown', (event) => {
  initialX = event.clientX - header.offsetLeft;
  initialY = event.clientY - header.offsetTop;
  window.addEventListener('mousemove', moveHeader);
});

window.addEventListener('mouseup', () => {
  window.removeEventListener('mousemove', moveHeader);
  // Snap back to center animation
  animateHeader(header.offsetLeft, header.offsetTop, centerX, centerY);
});

const moveHeader = (event) => {
    const newX = event.clientX - initialX;
    const newY = event.clientY - initialY;
  
    // Prevent dragging outside the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const headerWidth = header.offsetWidth;
    const headerHeight = header.offsetHeight;
  
    const maxLeft = 0;
    const maxTop = 0;
    const maxRight = viewportWidth - headerWidth;
    const maxBottom = viewportHeight - headerHeight;
  
    // **Define adjustedX and adjustedY within the function**
    let adjustedX = Math.min(Math.max(newX, maxLeft), maxRight);
    let adjustedY = Math.min(Math.max(newY, maxTop), maxBottom);
  
    header.style.left = `${adjustedX}px`;
    header.style.top = `${adjustedY}px`;
  };  

function animateHeader(fromX, fromY, toX, toY) {
  let animationFrameId = null;

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);

    const deltaX = (toX - fromX) / 10; // Adjust 10 for animation speed
    const deltaY = (toY - fromY) / 10;

    fromX += deltaX;
    fromY += deltaY;

    header.style.left = `${fromX}px`;
    header.style.top = `${fromY}px`;

    // Stop animation when close enough to center
    if (Math.abs(fromX - toX) < 1 && Math.abs(fromY - toY) < 1) {
      cancelAnimationFrame(animationFrameId);
    }
  };

  animate();
}

window.addEventListener('resize', updateCenter); // Update center on resize