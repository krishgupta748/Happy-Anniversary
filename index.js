// Create floating hearts
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }

        // Create sparkles
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.top = Math.random() * 100 + 'vh';
            sparkle.style.animationDelay = Math.random() * 3 + 's';
            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 3000);
        }

        // Start animations
        setInterval(createHeart, 800);
        setInterval(createSparkle, 500);

        // Button click function
        function startJourney() {
            // Add a beautiful click effect
            const btn = document.querySelector('.journey-btn');
            btn.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                btn.style.transform = 'translateY(-3px)';
                // Navigate to next page
                window.location.href = 'gallery.html';
            }, 150);
        }

        // Background music (commented out since we can't access external audio files)
        // Uncomment and replace with your own audio file path
        /*
        window.addEventListener('load', () => {
            const audio = document.getElementById('bgMusic');
            audio.volume = 0.3;
            audio.play().catch(e => {
                // Autoplay might be blocked, user interaction needed
                console.log('Autoplay blocked. User interaction required.');
            });
        });
        */

        // Add some interactive sparkles on mouse move
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.8) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = e.clientX + 'px';
                sparkle.style.top = e.clientY + 'px';
                sparkle.style.position = 'fixed';
                document.body.appendChild(sparkle);

                setTimeout(() => {
                    sparkle.remove();
                }, 3000);
            }
        });

        // Add floating emoji animation variety
        document.querySelectorAll('.floating-emoji').forEach((emoji, index) => {
            emoji.style.animationDelay = (index * 0.5) + 's';
            emoji.style.animationDuration = (4 + Math.random() * 4) + 's';
        });