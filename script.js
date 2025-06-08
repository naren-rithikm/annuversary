// Your love messages
const messages = [
    "From the moment I first saw you, I knew you were special...",
    "Your smile lights up my darkest days...",
    "Every little thing about you makes my heart skip a beat...",
    "The way you understand me without words...",
    "Our first date feels like yesterday, yet here we are, one beautiful year later...",
    "The sound of your laughter is my favorite melody...",
    "You make every day an adventure worth living...",
    "In your eyes, I see my future...",
    // Add more messages here
];

// Card positions and rotations
const cardPositions = messages.map((_, index) => ({
    left: 40 + (index * 5) + '%',
    top: 30 + (index * 2) + '%',
    rotation: -5 + (Math.random() * 10)
}));

let draggedCard = null;
let initialX = 0;
let initialY = 0;
let currentX = 0;
let currentY = 0;
let revealedCards = 0;

// Create and position cards
function createCards() {
    const container = document.querySelector('.cards-container');
    
    messages.forEach((message, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = message;
        card.style.left = cardPositions[index].left;
        card.style.top = cardPositions[index].top;
        card.style.transform = `rotate(${cardPositions[index].rotation}deg)`;
        card.style.zIndex = messages.length - index;
        
        // Add drag events
        card.addEventListener('mousedown', startDragging);
        card.addEventListener('touchstart', startDragging);
        
        container.appendChild(card);
    });
}

function startDragging(e) {
    draggedCard = e.target;
    draggedCard.classList.add('dragging');
    
    const event = e.type === 'mousedown' ? e : e.touches[0];
    initialX = event.clientX - draggedCard.offsetLeft;
    initialY = event.clientY - draggedCard.offsetTop;
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);
}

function drag(e) {
    if (!draggedCard) return;
    
    e.preventDefault();
    const event = e.type === 'mousemove' ? e : e.touches[0];
    
    currentX = event.clientX - initialX;
    currentY = event.clientY - initialY;
    
    draggedCard.style.left = currentX + 'px';
    draggedCard.style.top = currentY + 'px';
}

function stopDragging() {
    if (!draggedCard) return;
    
    draggedCard.classList.remove('dragging');
    
    // Check if card is dragged far enough
    const distance = Math.sqrt(
        Math.pow(currentX - parseInt(draggedCard.style.left), 2) +
        Math.pow(currentY - parseInt(draggedCard.style.top), 2)
    );
    
    if (distance > 200) {
        draggedCard.style.opacity = '0';
        draggedCard.style.transform = 'scale(0.8) rotate(10deg)';
        draggedCard.style.transition = 'all 0.5s ease';
        setTimeout(() => draggedCard.remove(), 500);
        revealedCards++;
        
        // Check if all cards are revealed
        if (revealedCards === messages.length) {
            showFinalMessage();
        }
    } else {
        // Return to original position
        draggedCard.style.left = draggedCard.style.left;
        draggedCard.style.top = draggedCard.style.top;
    }
    
    draggedCard = null;
    
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('touchmove', drag);
    document.removeEventListener('mouseup', stopDragging);
    document.removeEventListener('touchend', stopDragging);
}

function showFinalMessage() {
    const finalMessage = document.querySelector('.final-message');
    finalMessage.style.display = 'block';
    finalMessage.style.opacity = '0';
    setTimeout(() => {
        finalMessage.style.transition = 'opacity 1s ease';
        finalMessage.style.opacity = '1';
    }, 100);
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', createCards); 