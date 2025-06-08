// Your love messages with images
const messages = [
    {
        text: "From the moment I first saw you, I knew you were special...",
        image: "https://source.unsplash.com/400x300/?romantic,sunset"
    },
    {
        text: "Your smile lights up my darkest days...",
        image: "https://source.unsplash.com/400x300/?smile,happy"
    },
    {
        text: "Every little thing about you makes my heart skip a beat...",
    },
    {
        text: "The way you understand me without words...",
        image: "https://source.unsplash.com/400x300/?couple,love"
    },
    {
        text: "Our first date feels like yesterday, yet here we are, one beautiful year later...",
        image: "https://source.unsplash.com/400x300/?date,restaurant"
    },
    {
        text: "The sound of your laughter is my favorite melody...",
    },
    {
        text: "You make every day an adventure worth living...",
        image: "https://source.unsplash.com/400x300/?adventure,travel"
    },
    {
        text: "In your eyes, I see my future...",
    },
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

// Create butterflies animation
function createButterflies() {
    const container = document.getElementById('floatingButterflies');
    const createButterfly = () => {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        butterfly.style.setProperty('--float-time', Math.random() * 10 + 15 + 's');
        butterfly.style.setProperty('--float-delay', Math.random() * 5 + 's');
        butterfly.style.left = Math.random() * 100 + '%';
        butterfly.style.top = Math.random() * 100 + '%';
        container.appendChild(butterfly);
        butterfly.addEventListener('animationend', () => butterfly.remove());
    };

    // Create initial butterflies
    for (let i = 0; i < 8; i++) {
        createButterfly();
    }

    // Continuously create new butterflies
    setInterval(createButterfly, 3000);
}

// Create rose petals animation
function createRosePetals() {
    const container = document.getElementById('rosePetals');
    const createPetal = () => {
        const petal = document.createElement('div');
        petal.className = 'rose-petal';
        petal.style.setProperty('--fall-time', Math.random() * 5 + 8 + 's');
        petal.style.setProperty('--fall-delay', Math.random() * 3 + 's');
        petal.style.setProperty('--fall-x', Math.random() * 200 - 100 + 'px');
        petal.style.left = Math.random() * 100 + '%';
        container.appendChild(petal);
        petal.addEventListener('animationend', () => petal.remove());
    };

    // Create initial petals
    for (let i = 0; i < 15; i++) {
        createPetal();
    }

    // Continuously create new petals
    setInterval(createPetal, 2000);
}

// Enhanced sparkle effect
function createSparkle(x, y) {
    for (let i = 0; i < 3; i++) { // Create multiple sparkles at once
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = (x + Math.random() * 40 - 20) + 'px';
        sparkle.style.top = (y + Math.random() * 40 - 20) + 'px';
        sparkle.style.setProperty('--move-x', (Math.random() * 200 - 100) + 'px');
        sparkle.style.setProperty('--move-y', (Math.random() * -200 - 50) + 'px');
        sparkle.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1500);
    }
}

// Create floating hearts
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.style.setProperty('--float-left', Math.random() * 100 + '%');
        heart.style.setProperty('--float-delay', Math.random() * 5 + 's');
        heart.style.setProperty('--float-time', Math.random() * 10 + 15 + 's');
        heart.style.setProperty('--float-scale', Math.random() * 1.5 + 0.5);
        container.appendChild(heart);
        heart.addEventListener('animationend', () => heart.remove());
    };

    // Create initial hearts
    for (let i = 0; i < 10; i++) {
        createHeart();
    }

    // Continuously create new hearts
    setInterval(createHeart, 2000);
}

// Create and position cards
function createCards() {
    const container = document.querySelector('.cards-container');
    
    messages.forEach((message, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Add image if present
        if (message.image) {
            const img = document.createElement('img');
            img.src = message.image;
            img.className = 'card-image';
            img.alt = 'Romantic moment';
            card.appendChild(img);
        }
        
        const text = document.createElement('p');
        text.textContent = message.text;
        card.appendChild(text);
        
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
    draggedCard = e.target.closest('.card');
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
    
    // Create more frequent sparkles while dragging
    if (Math.random() > 0.5) {
        createSparkle(event.clientX, event.clientY);
    }
}

function stopDragging() {
    if (!draggedCard) return;
    
    draggedCard.classList.remove('dragging');
    
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
        
        // Create burst of sparkles for card removal
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createSparkle(
                    currentX + Math.random() * 150 - 75,
                    currentY + Math.random() * 150 - 75
                );
            }, i * 50);
        }
        
        if (revealedCards === messages.length) {
            showFinalMessage();
        }
    } else {
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
document.addEventListener('DOMContentLoaded', () => {
    createCards();
    createFloatingHearts();
    createButterflies();
    createRosePetals();
}); 