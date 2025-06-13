// Your love messages with images
const messages = [
    {
        text: "From the moment I first saw you, I knew you were special...",
        image: "images/first-meeting.jpg"  // Your first personal image
    },
    {
        text: "Your smile lights up my darkest days...",
        image: "images/smile.jpg"  // Your second personal image
    },
    {
        text: "To my dear love💌,\n\nhappieeeee firsttt anniversaryyy darlinggggg💟😚🫂\n\nJuly 8th 4:53 -💗💗🧿\nNov 1 - 1st babe\nNov 20- first kiss\nDec 2 - first thangoo\nDec 19 first Date\nDec 26-the moment u layed on my shoulder 💗\nFeb 15- first proper date 🌹\nMarch 6- first time konjunaa neram😭💗",
    },
    {
        text: "The way you understand me without words...",
        image: "images/together.jpg"  // Your third personal image
    },
    {
        text: "July 8th 4:53 romba special ana oru date and unexpected ana oru date😭💗.\n\nNaaa unmaya sollanu na endha mari la nadakum u suthama expect panlaaa. oru silly ah lusu mari irundha paiyan naaa anaaa konjo konjaam ah totall ah mathitaa yenaaa💟😭. 1 yrr time ponadhee therilaaaa and here we areee celebratinggg ourr 1st anniversarryy and see thingsss working outttt🎀🧿💝. yenaku soulmates melaa aavlo nambikalam ella until i found u🫂🎀. chinnaaa vayasuu la irundhuuu onna irukomm apprm bestfriends epo bf and gf soonnnnnn(hubby wifeyy)🧿😭💟.I am sooooo lunckyyyy and blesseddd to get u as my gf💗💗.",
    },
    {
        text: "Our first date feels like yesterday, yet here we are, one beautiful year later...",
        image: "images/first-date.jpg"  // Your fourth personal image
    },
    {
        text: "unkudaaaaa irukuraaa oru oruuu nimishamum rombaaa speciall ,na yennaye marandhu vera oru chinna paiyan ah irukenn😭💗.  inno kudaa edhulaaa oru kanavu marii than irukuuuu😭😭♥️♥️. love laaaa suthamaa poga vendam nu irundhaa oru paiyan na 10th apoo until i saw myself lost in ur cuteness ur smile ur babyness. School ke poga pudikadhaaa naaa hehe una pakka daily um school ku var start panna, kutty kutty peeps, neee coridor ku varum podhuuu , prayer la nikum podhuuu unaaa pakura andha few secondsss laaa than yen whole day precious moment irukuuuu. gorund la ellarum nikum podhuuu appdiyeee unaa pakka try pannum podhuu nee therira andha sec irukeeeee♥️♥️♥️♥️.",
    },
    {
        text: "yenakuuu unaaa rombbaaa pudikummm di un kudaaa serndhu yen valka muluka valaaanuuuu ( not mee tearing upp nowwww writingggg the letterrrr😭🥺) i am sooo damn in loveee with youuuu💗 . i want to havee kidss with uu😭💗 , do this life with youuuu onlyyy youuu yennalaa ne elladha valkai ah nenachu kuda paka mudiyalaaa.  Naraiyaaa travell pannanuuuu unkudaaaa. appdiyeeeee yedhuvum pesamaaaaa nee thoongum podhuuu yenn thangathaaa pathuuu rasikanuuuu , unnodaaaaa saree ah kata help pannanuuuu ,unakuuu uti vidanuuu , yennodaaaa kolandhaa mari pathukanuuuuu. solliteee polaaam heheee💝.Innoooo kudaaa when i see u my heart beat risessss and there are butterflies🦋 in my stomachhh.  i reallyyy hate this distance between ussss, pakathulayee than irukom ana oru marii distant ah ve irukuraa mariye irukuu😭😭, missing u is the hardest thing i have to go thru dailyy. u were the only person to stay by my sidee during my bad times and good times , kept supporting mee and believeing in me no matter whatt andd unnakuu edhu evlooo theriyu nu yenaku therila anaaa neee yenaku kudutha support and yen side la irundha nala than na epo eppdi endha naren ah iruken🥹🎀",
    },
    {
        text: "unnodaaaaa cutennesss ye  ne yenna kolandhaa mari pathukuradhuuu, unnodaaa kalandhatanamm unnodaaa smileee, i feel harder day by dayy😭💗. yenakuu amma aprm yennaa pathukutaaa ore ponu neeee🥺♥️. edhuuu varaiikuuu naa unaa nalla pathukutenn nu namburaaaa , unnodaaa ellaaa expectaions ah fullfill panna na nu therilaaaa anaaa unaaa nalla pathupennn😭💗💗. Unaa eppovumee happyyy ah vechukanuuu unnodaa azhaganaaa smileeee dull ye aga kudadhuuuuu. naaa una yengachuuu hurtt pannirundhaaaa sorrryyyyyyyy . andddd i canttt just write the lettr without saying howwwwww beautiful my darlinggggg iss😚😚-una mari oru azhaga naaaa ponnaaa na pathadheee ellaaaa di devadha mariii irukaaaaa di👉🏻👈🏻😚 chellooooo ,unnoodaaa sirupu irukeeee adhu podhu yenna mayakaaaa, unnodaaaa kangal ah pathuteee irukalaaaammm😭💗",
    },
    {
        text: "i loveeee youuu soo muchhhhh💗,u are stuck with mee forveerrrrrr heheeee, naa kurumbuu pannuveenn , lusuuu mari pannuvennn,hehee konjiteeee irukpeeeeennn mutham thandhuteeee irupeeennn😚💗, i am careless tooooo neee than unnodaaa baby boi ah pathukanuuuuuuu . yennaa vandhalummm una vitutu na poga matenn i promise. i loveeeeeee youuu sooo soo muchhhhh mwahhhhh🧿♥️",
    }
];

// Card positions and rotations
const cardPositions = messages.map((_, index) => ({
    left: 38 + (index * 2) + '%',  // Adjusted for smaller card width
    top: 28 + (index * 1.5) + '%',  // Adjusted for better vertical spacing
    rotation: -3 + (Math.random() * 6)  // Reduced rotation range for neater appearance
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
        // Ensure the card fades away properly
        draggedCard.style.opacity = '0';
        draggedCard.style.transform = 'scale(0.8) rotate(10deg)';
        draggedCard.style.transition = 'all 0.5s ease';
        
        // Remove the card after animation completes
        setTimeout(() => {
            if (draggedCard && draggedCard.parentNode) {
                draggedCard.remove();
            }
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
        }, 500);
    } else {
        // Reset card position if not dragged far enough
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

// Lyrics animation
function createLyricsAnimation() {
    const container = document.getElementById('lyricsContainer');
    const lyrics = [
        "Pretty little baby",
        "You say that maybe",
        "You'll be thinkin' of me",
        "And try to love me",
        "I'm hoping that you do",
        "You can ask the flowers",
        "I sit for hours",
        "Tellin' all the bluebirds",
        "The bill and coo birds",
        "I'm so in love with you"
    ];

    let currentLineIndex = 0;
    let activeLine = null;

    function showNextLine() {
        // Remove previous line with animation
        if (activeLine) {
            activeLine.classList.add('fade-out');
            setTimeout(() => {
                if (activeLine && activeLine.parentNode) {
                    activeLine.remove();
                }
            }, 2000);  // Increased from 1000 to 2000 to match the 2s CSS transition
        }

        // Reset index if we've shown all lyrics
        if (currentLineIndex >= lyrics.length) {
            currentLineIndex = 0;
        }

        // Create and position new line
        const line = document.createElement('div');
        line.className = 'lyric-line';
        line.textContent = lyrics[currentLineIndex];
        
        // Add line to container
        container.appendChild(line);

        // Trigger entrance animation after a short delay
        setTimeout(() => {
            line.classList.add('visible');
        }, 100);

        activeLine = line;
        currentLineIndex++;
    }

    // Start the animation with initial delay
    setTimeout(() => {
        showNextLine();
        // Show next line every 8 seconds (6 seconds display + 2 seconds transition)
        setInterval(showNextLine, 8000);
    }, 1000);
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createCards();
    createFloatingHearts();
    createButterflies();
    createRosePetals();
    createLyricsAnimation();
}); 