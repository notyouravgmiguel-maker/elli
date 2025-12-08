// ===================================
// ROMANTIC BIRTHDAY WEBSITE FOR ELLI
// Interactive Features & Animations
// ===================================

const FINLAND_OFFSET_MINUTES = 120; // Finland is UTC+02:00 in December

function getFinlandBirthdayDate(year) {
    const utcMillis = Date.UTC(year, 11, 15, 0, 0, 0) - (FINLAND_OFFSET_MINUTES * 60 * 1000);
    return new Date(utcMillis);
}

// === COUNTDOWN LOCK SCREEN ===
function initCountdownLock() {
    const lockScreen = document.getElementById('countdown-lock');
    const starContainer = document.getElementById('lock-stars');
    const now = new Date();
    const currentYear = now.getFullYear();
    let targetDate = getFinlandBirthdayDate(currentYear);
    
    if (now > targetDate) {
        targetDate = getFinlandBirthdayDate(currentYear + 1);
    }
    const targetTime = targetDate.getTime();
    
    if (starContainer) {
        starContainer.innerHTML = '';
        const starCount = window.innerWidth < 768 ? 40 : 80;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'lock-star';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 4}s`;
            star.style.opacity = (Math.random() * 0.6 + 0.2).toFixed(2);
            starContainer.appendChild(star);
        }
    }
    
    function updateLockCountdown() {
        const now = new Date().getTime();
        const distance = targetTime - now;
        
        // If birthday has arrived, unlock the site
        if (distance < 0) {
            lockScreen.classList.add('hidden');
            setTimeout(() => {
                lockScreen.style.display = 'none';
            }, 500);
            return;
        }
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update display
        document.getElementById('lock-days').textContent = String(days).padStart(2, '0');
        document.getElementById('lock-hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('lock-minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('lock-seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    // Update every second
    updateLockCountdown();
    setInterval(updateLockCountdown, 1000);
}

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
    // Initialize countdown lock first
    initCountdownLock();
    
    // Hide loader after everything loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('page-loader').classList.add('hidden');
        }, 1500);
    });
    
    initParticles();
    initCursorTrail();
    initFloatingHearts();
    initMusicPlayer();
    initCountdown();
    initCake();
    initBalloons();
    initLetter();
    initGallery();
    initChat();
    initSecretStar();
    initScrollAnimations();
    initFinalSection();
    initClickEffects();
    initSurpriseButton();
});

// === PARTICLES BACKGROUND ===
function initParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = window.innerWidth < 768 ? 15 : 25;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
    
    setInterval(() => {
        if (container.children.length < particleCount) {
            createParticle(container);
        }
    }, 4000);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 12 + 12) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.width = particle.style.height = (Math.random() * 3 + 2) + 'px';
    
    container.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 25000);
}

// === FLOATING COMPLIMENTS ===
function initFloatingWords() {
    const words = [
        { text: 'Beautiful', style: 'style1' },
        { text: 'My Sunshine', style: 'style2' },
        { text: 'Forever', style: 'style3' },
        { text: 'Amazing', style: 'style1' },
        { text: 'My Angel', style: 'style2' },
        { text: 'Precious', style: 'style3' },
        { text: 'Gorgeous', style: 'style1' },
        { text: 'My Heart', style: 'style2' },
        { text: 'Perfect', style: 'style3' },
        { text: 'Lovely', style: 'style1' },
        { text: 'Stunning', style: 'style2' },
        { text: 'Radiant', style: 'style3' }
    ];
    
    const container = document.getElementById('floating-words');
    
    function createFloatingWord() {
        const wordObj = words[Math.floor(Math.random() * words.length)];
        const word = document.createElement('div');
        word.className = `floating-word ${wordObj.style}`;
        word.textContent = wordObj.text;
        word.style.left = Math.random() * 100 + '%';
        word.style.animationDuration = (Math.random() * 10 + 15) + 's';
        word.style.setProperty('--rotation', (Math.random() * 20 - 10) + 'deg');
        
        container.appendChild(word);
        
        setTimeout(() => {
            word.remove();
        }, 20000);
    }
    
    // Create initial words
    for (let i = 0; i < 4; i++) {
        setTimeout(createFloatingWord, i * 2500);
    }
    
    // Keep creating new words
    setInterval(createFloatingWord, 5000);
}

// === ADVANCED MUSIC PLAYER ===
function initMusicPlayer() {
    // ADD YOUR SONGS HERE!
    // You can use direct MP3 links or Spotify embed links
    const playlist = [
        {
            title: "Perfect",
            artist: "Ed Sheeran",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            spotify: "https://open.spotify.com/track/2SpolAD4oIVI9zBgTgZrtM" // Example Spotify link
        },
        {
            title: "Thinking Out Loud",
            artist: "Ed Sheeran", 
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            spotify: "https://open.spotify.com/track/3RBol0gmEbT5jAiVL6uBgpV" // Example Spotify link
        },
        {
            title: "All of Me",
            artist: "John Legend",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            spotify: "https://open.spotify.com/track/3YOI3LhUw7gWb6hKSA7TmC" // Example Spotify link
        }
    ];
    
    let currentTrack = 0;
    let isPlaying = false;
    
    const audio = document.getElementById('audio-player');
    const playerToggle = document.getElementById('player-toggle');
    const playerBody = document.getElementById('player-body');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const progressHandle = document.getElementById('progress-handle');
    const volumeSlider = document.getElementById('volume-slider');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const timeCurrent = document.getElementById('time-current');
    const timeTotal = document.getElementById('time-total');
    const playlistItems = document.getElementById('playlist-items');
    const vinylRecord = document.querySelector('.vinyl-record');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    
    // Load playlist
    playlist.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        if (index === 0) item.classList.add('active');
        item.innerHTML = `
            <div class="playlist-item-number">${index + 1}</div>
            <div class="playlist-item-info">
                <div class="playlist-item-title">${track.title}</div>
                <div class="playlist-item-artist">${track.artist}</div>
            </div>
        `;
        item.addEventListener('click', () => loadTrack(index));
        playlistItems.appendChild(item);
    });
    
    // Load track
    function loadTrack(index) {
        currentTrack = index;
        audio.src = playlist[index].src;
        trackTitle.textContent = playlist[index].title;
        trackArtist.textContent = playlist[index].artist;
        
        document.querySelectorAll('.playlist-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        if (isPlaying) {
            audio.play();
        }
    }
    
    // Toggle player
    playerToggle.addEventListener('click', () => {
        playerBody.classList.toggle('open');
        playerToggle.classList.toggle('open');
    });
    
    // Play/Pause
    playBtn.addEventListener('click', togglePlay);
    
    function togglePlay() {
        if (isPlaying) {
            audio.pause();
            vinylRecord.classList.remove('playing');
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
        } else {
            audio.play();
            vinylRecord.classList.add('playing');
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
        }
        isPlaying = !isPlaying;
    }
    
    // Previous track
    prevBtn.addEventListener('click', () => {
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrack);
        if (isPlaying) audio.play();
    });
    
    // Next track
    nextBtn.addEventListener('click', () => {
        currentTrack = (currentTrack + 1) % playlist.length;
        loadTrack(currentTrack);
        if (isPlaying) audio.play();
    });
    
    // Progress bar
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = progress + '%';
        progressHandle.style.left = progress + '%';
        timeCurrent.textContent = formatTime(audio.currentTime);
    });
    
    audio.addEventListener('loadedmetadata', () => {
        timeTotal.textContent = formatTime(audio.duration);
    });
    
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    
    // Volume
    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });
    
    audio.volume = 0.7;
    
    // Auto next
    audio.addEventListener('ended', () => {
        currentTrack = (currentTrack + 1) % playlist.length;
        loadTrack(currentTrack);
        audio.play();
    });
    
    // Format time
    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Load first track
    loadTrack(0);
    
    // AUTOPLAY: Start playing when page loads (after user interaction)
    // Note: Browsers require user interaction before autoplay
    // We'll add a click listener to start music on first user interaction
    let hasStarted = false;
    
    function startMusic() {
        if (!hasStarted) {
            audio.play().then(() => {
                isPlaying = true;
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'inline';
                vinylRecord.classList.add('playing');
                hasStarted = true;
                console.log('Music started automatically! 🎵');
            }).catch(err => {
                console.log('Autoplay prevented. User must click play.');
            });
        }
    }
    
    // Start music on first user interaction
    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('touchstart', startMusic, { once: true });
    
    // Also try to autoplay after a delay (might work on some browsers)
    setTimeout(() => {
        if (!hasStarted) {
            startMusic();
        }
    }, 2000);
}

// === COUNTDOWN TO DECEMBER 15TH ===
function initCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let targetDate = new Date(currentYear, 11, 15); // December 15th
    
    // If December 15th has passed this year, set to next year
    if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 11, 15);
    }
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            triggerBirthdayCelebration();
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function triggerBirthdayCelebration() {
    launchConfetti();
    setTimeout(launchConfetti, 500);
    setTimeout(launchConfetti, 1000);
}

// === INTERACTIVE CAKE ===
function initCake() {
    const candles = document.querySelectorAll('.candle');
    const micButton = document.getElementById('mic-button');
    let blownCandles = 0;
    
    // Click to blow out candles
    candles.forEach(candle => {
        candle.addEventListener('click', () => {
            if (!candle.classList.contains('blown-out')) {
                blowOutCandle(candle);
            }
        });
    });
    
    // Microphone blow detection
    micButton.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            const microphone = audioContext.createMediaStreamSource(stream);
            const dataArray = new Uint8Array(analyser.frequencyBinCount);
            
            microphone.connect(analyser);
            analyser.fftSize = 256;
            
            micButton.textContent = '🎤 Blow now!';
            micButton.style.background = 'linear-gradient(135deg, #FFD700, #FF6347)';
            
            function detectBlow() {
                analyser.getByteFrequencyData(dataArray);
                const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
                
                if (average > 50) {
                    candles.forEach(candle => {
                        if (!candle.classList.contains('blown-out')) {
                            blowOutCandle(candle);
                        }
                    });
                    
                    stream.getTracks().forEach(track => track.stop());
                    micButton.textContent = '🎤 Use Microphone';
                    micButton.style.background = '';
                } else {
                    requestAnimationFrame(detectBlow);
                }
            }
            
            detectBlow();
            
            setTimeout(() => {
                stream.getTracks().forEach(track => track.stop());
                micButton.textContent = '🎤 Use Microphone';
                micButton.style.background = '';
            }, 10000);
            
        } catch (err) {
            alert('Microphone access denied. Please click the candles instead! 🕯️');
        }
    });
    
    function blowOutCandle(candle) {
        candle.classList.add('blown-out');
        blownCandles++;
        
        // Create smoke effect
        createSmoke(candle);
        
        if (blownCandles === candles.length) {
            setTimeout(() => {
                launchConfetti();
                showMessage('🎉 Happy Birthday Elli! 🎉');
                document.getElementById('wish-message').classList.add('show');
            }, 500);
        }
    }
    
    function createSmoke(candle) {
        const smoke = document.createElement('div');
        smoke.style.position = 'absolute';
        smoke.style.top = '-30px';
        smoke.style.left = '50%';
        smoke.style.transform = 'translateX(-50%)';
        smoke.style.fontSize = '20px';
        smoke.textContent = '💨';
        smoke.style.animation = 'drift 2s ease-out forwards';
        
        candle.appendChild(smoke);
        
        setTimeout(() => smoke.remove(), 2000);
    }
}

// === BALLOONS ===
function initBalloons() {
    const container = document.getElementById('balloons-container');
    const balloonCount = window.innerWidth < 768 ? 5 : 10;
    const colors = [
        'linear-gradient(135deg, #FF69B4, #FF1493)',
        'linear-gradient(135deg, #DDA0DD, #BA55D3)',
        'linear-gradient(135deg, #87CEEB, #4682B4)',
        'linear-gradient(135deg, #FFB6C1, #FF69B4)',
        'linear-gradient(135deg, #E6E6FA, #9370DB)',
        'linear-gradient(135deg, #FFD700, #FFA500)'
    ];
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.setProperty('--drift-x', (Math.random() * 200 - 100) + 'px');
        balloon.style.animationDuration = (Math.random() * 5 + 10) + 's';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        
        // Set random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.setProperty('--balloon-color', color);
        
        balloon.addEventListener('click', () => {
            balloon.classList.add('popped');
            createSparkles(balloon);
            setTimeout(() => balloon.remove(), 300);
        });
        
        container.appendChild(balloon);
        
        setTimeout(() => {
            if (!balloon.classList.contains('popped')) {
                balloon.remove();
            }
        }, 20000);
    }
    
    // Create initial balloons
    for (let i = 0; i < balloonCount; i++) {
        setTimeout(createBalloon, i * 1000);
    }
    
    // Keep creating new balloons
    setInterval(createBalloon, 3000);
}

function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '10000';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        sparkle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// === LOVE LETTER ===
function initLetter() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    let isOpen = false;
    
    envelope.addEventListener('click', () => {
        if (!isOpen) {
            envelope.classList.add('open');
            setTimeout(() => {
                letter.classList.add('visible');
                animateLetterLines();
            }, 800);
            isOpen = true;
        }
    });
}

function animateLetterLines() {
    const lines = document.querySelectorAll('.letter-line');
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('visible');
        }, index * 300);
    });
}

// === GALLERY ===
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const caption = item.getAttribute('data-caption');
            const placeholder = item.querySelector('.photo-placeholder');
            
            modalImage.innerHTML = placeholder.outerHTML;
            modalCaption.textContent = caption;
            modal.classList.add('active');
        });
    });
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.getElementById('secret-modal').classList.remove('active');
        });
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// === CHAT MESSAGES ===
function initChat() {
    const messages = [
        "Hey beautiful",
        "I just wanted to take a moment...",
        "To tell you how much you mean to me",
        "Every day with you is a gift",
        "Your smile brightens my world",
        "Your laugh is my favorite sound",
        "And your love... it's everything",
        "Happy Birthday to the most amazing person",
        "I love you more than words can say",
        "Forever and always...",
        "I LOVE YOU ELLI"
    ];
    
    const chatMessages = document.getElementById('chat-messages');
    let currentMessage = 0;
    
    function showNextMessage() {
        if (currentMessage < messages.length) {
            // Show typing indicator
            const typingDiv = document.createElement('div');
            typingDiv.className = 'chat-bubble typing-indicator';
            typingDiv.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
            chatMessages.appendChild(typingDiv);
            
            setTimeout(() => {
                typingDiv.remove();
                
                const bubble = document.createElement('div');
                bubble.className = 'chat-bubble';
                bubble.textContent = messages[currentMessage];
                bubble.style.animationDelay = '0s';
                chatMessages.appendChild(bubble);
                
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                currentMessage++;
                setTimeout(showNextMessage, 2000);
            }, 1500);
        }
    }
    
    // Start chat when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && currentMessage === 0) {
                setTimeout(showNextMessage, 500);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.chat-section'));
}

// === SECRET STAR EASTER EGG ===
function initSecretStar() {
    const star = document.getElementById('secret-star');
    const modal = document.getElementById('secret-modal');
    
    star.addEventListener('click', () => {
        launchFireworks();
        modal.classList.add('active');
    });
}

function launchFireworks() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    
    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        
        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }
        
        confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            },
            colors: ['#FFB6C1', '#E6E6FA', '#FFD700', '#FFC0CB', '#DDA0DD']
        });
    }, 250);
}

// === CONFETTI ===
function launchConfetti() {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 },
        colors: ['#FFB6C1', '#E6E6FA', '#FFD700', '#FFC0CB', '#DDA0DD', '#B76E79']
    };
    
    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }
    
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// === FINAL SECTION ===
function initFinalSection() {
    const finalSection = document.querySelector('.final-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    launchConfetti();
                    setTimeout(launchConfetti, 500);
                    setTimeout(launchConfetti, 1000);
                }, 1000);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(finalSection);
    
    // Add stars to final section
    const starsContainer = document.querySelector('.final-stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        starsContainer.appendChild(star);
    }
}

// === UTILITY FUNCTIONS ===
function showMessage(text) {
    const message = document.createElement('div');
    message.textContent = text;
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #FFB6C1, #B76E79);
        color: white;
        padding: 2rem 3rem;
        border-radius: 20px;
        font-size: 2rem;
        font-family: 'Great Vibes', cursive;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: scaleIn 0.5s ease-out;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(style);

// === CURSOR TRAIL ===
function initCursorTrail() {
    const canvas = document.getElementById('cursor-trail');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    const particles = [];
    const colors = ['#FFB6C1', '#E6E6FA', '#FFD700', '#FFC0CB', '#DDA0DD'];
    
    class TrailParticle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.life = 1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 0.02;
            if (this.size > 0.2) this.size -= 0.1;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.life;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        for (let i = 0; i < 3; i++) {
            particles.push(new TrailParticle(mouseX, mouseY));
        }
    });
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// === FLOATING HEARTS ===
function initFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    let lastHeartTime = 0;
    
    document.addEventListener('click', (e) => {
        const now = Date.now();
        if (now - lastHeartTime < 200) return;
        lastHeartTime = now;
        
        const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.animationDelay = '0s';
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    });
}

// === CLICK EFFECTS ===
function initClickEffects() {
    // Add ripple effect on click
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid var(--rose-gold);
            left: ${e.clientX - 10}px;
            top: ${e.clientY - 10}px;
            pointer-events: none;
            z-index: 9999;
            animation: ripple 0.6s ease-out;
        `;
        
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
    
    // Add ripple animation
    if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(3);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// === SURPRISE BUTTON ===
function initSurpriseButton() {
    const surpriseBtn = document.getElementById('surprise-btn');
    const quotePopup = document.getElementById('quote-popup');
    const quoteText = document.getElementById('quote-text');
    const quoteClose = document.getElementById('quote-close');
    
    const quotes = [
        "You are the reason I believe in love at first sight and love at every sight after.",
        "In a sea of people, my eyes will always search for you.",
        "You are my today and all of my tomorrows.",
        "I love you not only for what you are, but for what I am when I am with you.",
        "Every love story is beautiful, but ours is my favorite.",
        "You are my sun, my moon, and all my stars.",
        "I choose you. And I'll choose you over and over. Without pause, without doubt, in a heartbeat.",
        "You are the finest, loveliest, tenderest person I have ever known.",
        "I love you more than I have ever found a way to say to you.",
        "You make me want to be a better person.",
        "My heart is perfect because you are inside.",
        "You are my greatest adventure.",
        "I fell in love with you because of a million tiny things you never knew you were doing.",
        "You are my favorite notification.",
        "I love you to the moon and back, and then some more."
    ];
    
    surpriseBtn.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.textContent = randomQuote;
        quotePopup.classList.add('active');
        launchConfetti();
    });
    
    quoteClose.addEventListener('click', () => {
        quotePopup.classList.remove('active');
    });
    
    quotePopup.addEventListener('click', (e) => {
        if (e.target === quotePopup) {
            quotePopup.classList.remove('active');
        }
    });
}
