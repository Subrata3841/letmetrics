document.addEventListener("DOMContentLoaded", function() {
    // Add font import for Poppins
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Enhanced Cinematic Background Effects
    initCinematicEffects();
    
    // Initialize scroll management
    initScrollManagement();
    
    function initScrollManagement() {
        const scrollIndicator = document.getElementById('scrollIndicator');
        let scrollTimeout;
        
        // Show scroll indicator if content is scrollable
        function checkScrollable() {
            const isScrollable = document.body.scrollHeight > window.innerHeight;
            if (isScrollable && window.scrollY < 100) {
                scrollIndicator.classList.add('visible');
                
                // Hide after 3 seconds
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    scrollIndicator.classList.remove('visible');
                }, 3000);
            } else {
                scrollIndicator.classList.remove('visible');
            }
        }
        
        // Handle scroll events
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.classList.remove('visible');
            }
        });
        
        // Handle resize events
        window.addEventListener('resize', checkScrollable);
        
        // Initial check
        setTimeout(checkScrollable, 1000); // Wait for content to load
        
        // Check again when content is added
        const observer = new MutationObserver(checkScrollable);
        observer.observe(document.querySelector('.stats-container'), {
            childList: true,
            subtree: true
        });
    }
    
    function initCinematicEffects() {
        // Create dynamic floating particles
        createFloatingParticles();
        
        // Add mouse interaction effects
        addMouseInteraction();
        
        // Create ambient lighting effects
        createAmbientLighting();
        
        // Add scrolling matrix effect
        createMatrixEffect();
    }
    
    function createFloatingParticles() {
        const particleCount = 8; // Reduced from 15
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'cinematic-particle';
                particle.style.cssText = `
                    position: fixed;
                    width: ${Math.random() * 3 + 1}px;
                    height: ${Math.random() * 3 + 1}px;
                    background: rgba(${Math.random() > 0.5 ? '96, 165, 250' : '168, 85, 247'}, 0.4);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: -10; /* Ensure particles stay behind all content */
                    left: ${Math.random() * 100}vw;
                    top: 100vh;
                    animation: floatUp ${Math.random() * 15 + 20}s linear infinite;
                    filter: blur(${Math.random() * 1.5}px);
                    will-change: transform;
                `;
                document.body.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 35000);
            }, i * 3000); // Increased delay between particles
        }
    }
    
    function addMouseInteraction() {
        let mouseX = 0, mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            
            // Update orb positions based on mouse
            const orbs = document.querySelectorAll('.floating-orb');
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.02;
                const x = mouseX * 20 * speed;
                const y = mouseY * 20 * speed;
                orb.style.transform = `translate(${x}px, ${y}px)`;
            });
            
            // Update light rays rotation
            const lightRays = document.querySelector('.light-rays');
            if (lightRays) {
                const rotation = (mouseX - 0.5) * 10;
                lightRays.style.transform = `rotate(${rotation}deg)`;
            }
        });
    }
    
    function createAmbientLighting() {
        const container = document.querySelector('.container');
        if (container) {
            // Add dynamic lighting effect
            setInterval(() => {
                const intensity = Math.sin(Date.now() * 0.001) * 0.1 + 0.9;
                container.style.boxShadow = `
                    0 25px 50px rgba(0, 0, 0, 0.5),
                    0 0 100px rgba(96, 165, 250, ${intensity * 0.1}),
                    0 0 0 1px rgba(255, 255, 255, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `;
            }, 100);
        }
    }
    
    function createMatrixEffect() {
        // Only create matrix effect if user hasn't set reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        
        // Create subtle matrix-like effect in the background
        const matrixCanvas = document.createElement('canvas');
        matrixCanvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -15; /* Further behind content */
            opacity: 0.02; /* Much more subtle */
        `;
        document.body.appendChild(matrixCanvas);
        
        const ctx = matrixCanvas.getContext('2d');
        
        function resizeCanvas() {
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        const matrix = "01";
        const fontSize = 12;
        let columns = matrixCanvas.width / fontSize;
        let drops = [];
        
        function initDrops() {
            columns = matrixCanvas.width / fontSize;
            drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = 1;
            }
        }
        
        initDrops();
        
        function drawMatrix() {
            ctx.fillStyle = 'rgba(15, 23, 42, 0.02)';
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            
            ctx.fillStyle = 'rgba(96, 165, 250, 0.05)';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.985) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(drawMatrix, 200); // Slower update rate
    }

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    // Create background particles
    createParticles();

    // Initial animations
    animateProgressCircles();
    
    // Function for subtle background animation
    function animateBackground() {
        const colors = [
            'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
            'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)'
        ];
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % colors.length;
            document.body.style.backgroundImage = colors[currentIndex];
        }, 15000); // Change every 15 seconds
    }
    
    // Apply subtle background animation
    animateBackground();

    // Create background particles
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);
        
        // Create 150 particles (increased from 50)
        for (let i = 0; i < 150; i++) {
            createParticle(particlesContainer);
        }
        
        // Add new particles more frequently
        setInterval(() => {
            createParticle(particlesContainer);
            
            // Clean up excess particles to prevent too many in the DOM
            const particles = particlesContainer.querySelectorAll('.particle');
            if (particles.length > 200) {
                particles[0].remove();
            }
        }, 800); // Decreased from 3000ms to 800ms
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 3px and 10px (increased size range)
        const size = Math.random() * 7 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position across the entire screen, not just bottom
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Higher opacity for better visibility
        particle.style.opacity = Math.random() * 0.7 + 0.3;
        
        // Enhanced colors with more vibrant options
        const colors = [
            '#60a5fa', // blue
            '#a855f7', // purple
            '#10b981', // green
            '#f59e0b', // amber
            '#ec4899', // pink
            '#6366f1', // indigo
            '#14b8a6'  // teal
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        
        // Add box shadow for glow effect
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${randomColor}`;
        
        // Random animation duration between 8s and 20s (faster)
        const duration = Math.random() * 12 + 8;
        particle.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Random movement direction
        const animations = ['particleFloat', 'particleFloatReverse', 'particleDiagonal', 'particleZigZag'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        particle.style.animationName = randomAnimation;
        
        // Add to container
        container.appendChild(particle);
        
        // Remove after animation is complete
        setTimeout(() => {
            particle.remove();
        }, (duration + 5) * 1000);
    }

    // Function to animate progress circles on hover
    function animateProgressCircles() {
        const circles = document.querySelectorAll('.circle');
        
        circles.forEach(circle => {
            circle.addEventListener('mouseenter', () => {
                circle.style.transform = 'scale(1.05)';
            });
            
            circle.addEventListener('mouseleave', () => {
                circle.style.transform = 'scale(0.95)';
            });
        });
    }
    
    // Create welcome animation
    function createWelcomeAnimation() {
        // Add initial animation to footer message
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.innerHTML = `
                <p class="welcome-message">Welcome to LeetMetric <span class="wave">👋</span></p>
                <p class="welcome-subtitle">Enter a valid LeetCode username to see your stats</p>
            `;
            
            // Add wave animation to emoji
            const waveEmoji = document.querySelector('.wave');
            if (waveEmoji) {
                waveEmoji.style.display = 'inline-block';
                waveEmoji.style.animation = 'wave 1.5s ease-in-out infinite';
            }
        }
        
        // Add wave animation style
        const waveStyle = document.createElement('style');
        waveStyle.textContent = `
            @keyframes wave {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(-20deg); }
                75% { transform: rotate(20deg); }
            }
            
            .welcome-message {
                font-size: 1.2rem;
                color: rgba(255, 255, 255, 0.9);
                margin-bottom: 8px;
            }
            
            .welcome-subtitle {
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.6);
            }
        `;
        document.head.appendChild(waveStyle);
    }
    
    // Apply welcome animation
    createWelcomeAnimation();

    //return true or false based on a regex
    function validateUsername(username) {
        if(username.trim() === "") {
            showNotification("Username should not be empty", "error");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,1000}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            showNotification("Invalid Username", "error");
        }
        return isMatching;
    }

    // Show notification toast
    function showNotification(message, type = "info") {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification-toast');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification-toast ${type}`;
        notification.textContent = message;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateY(-20px)';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    async function fetchUserDetails(username) {
        try{
            // Add loading state
            searchButton.innerHTML = '<span class="button-text">Searching</span><span class="dots"><span>.</span><span>.</span><span>.</span></span>';
            searchButton.disabled = true;
            
            // Hide stats container properly
            statsContainer.classList.add("hidden");
            
            // Wait a bit for the hiding animation
            setTimeout(() => {
                // Show loading animation
                const loadingAnimation = document.createElement('div');
                loadingAnimation.className = 'loading-animation';
                loadingAnimation.innerHTML = '<div></div><div></div><div></div><div></div>';
                statsContainer.innerHTML = '';
                statsContainer.appendChild(loadingAnimation);
                statsContainer.classList.remove("hidden");
                
                // Add particles pulse effect during loading
                document.querySelectorAll('.particle').forEach(particle => {
                    particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
                    particle.style.opacity = Math.random() * 0.8 + 0.2;
                });
            }, 300);

            // const response = await fetch(url);
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
            const targetUrl = 'https://leetcode.com/graphql/';
            
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: `
                query userSessionProgress($username: String!) {
                  allQuestionsCount {
                    difficulty
                    count
                  }
                  matchedUser(username: $username) {
                    username
                    profile {
                      reputation
                      ranking
                      userAvatar
                      starRating
                      aboutMe
                      skillTags
                      postViewCount
                      postViewCountDiff
                      reputation
                    }
                    submitStats {
                      acSubmissionNum {
                        difficulty
                        count
                        submissions
                      }
                      totalSubmissionNum {
                        difficulty
                        count
                        submissions
                      }
                    }
                    badges {
                      id
                      displayName
                      icon
                      creationDate
                    }
                    problemsSolvedBeatsStats {
                      difficulty
                      percentage
                    }
                    submitStatsGlobal {
                      acSubmissionNum {
                        difficulty
                        count
                      }
                      totalSubmissionNum {
                        difficulty
                        count
                      }
                    }
                  }
                }`,
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

            // Add timeout to prevent infinite loading
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error("Request timeout. Please try again.")), 15000);
            });

            const response = await Promise.race([
                fetch(proxyUrl+targetUrl, requestOptions),
                timeoutPromise
            ]);
            if(!response.ok) {
                if (response.status === 404) {
                    throw new Error("User not found. Please check the username and try again.");
                } else if (response.status === 500) {
                    throw new Error("Server error. Please try again later.");
                } else if (response.status === 403) {
                    throw new Error("Access denied. Unable to fetch user data.");
                } else {
                    throw new Error(`Unable to fetch user details. Error: ${response.status}`);
                }
            }
            const parsedData = await response.json();
            console.log("Logging data: ", parsedData);
            
            // Check if the API returned valid data
            if (!parsedData || !parsedData.data) {
                throw new Error("Invalid response from server. Please try again.");
            }

            // Add slight delay for better animation effect
            setTimeout(() => {
                displayUserData(parsedData, username);
            }, 800);
        }
        catch(error) {
            console.error("Error fetching user data:", error);
            
            // Create a user-friendly error message
            let errorMessage = error.message;
            if (error.message.includes("fetch")) {
                errorMessage = "Network error. Please check your internet connection and try again.";
            } else if (error.message.includes("JSON")) {
                errorMessage = "Invalid response from server. Please try again later.";
            }
            
            const errorHTML = `
                <div class="error-container">
                    <div class="error-icon">❌</div>
                    <h3>Error</h3>
                    <p>${errorMessage}</p>
                    <p>Please try again with a different username.</p>
                </div>
            `;
            
            statsContainer.innerHTML = errorHTML;
            showNotification(errorMessage, "error");
        }
        finally {
            searchButton.innerHTML = '<span>Search</span>';
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle, delay = 0) {
        // Reset progress first
        circle.style.setProperty("--progress-degree", "0%");
        label.textContent = "0/0";
        
        // Set final values with animation
        setTimeout(() => {
            // Animate the progress
            const progressDegree = (solved/total) * 100;
            
            // Animate the count
            let startCount = 0;
            const duration = 1500; // 1.5 seconds
            const increment = solved / (duration / 16); // Update every ~16ms (60fps)
            
            const countAnimation = setInterval(() => {
                startCount += increment;
                if (startCount >= solved) {
                    startCount = solved;
                    clearInterval(countAnimation);
                }
                label.textContent = `${Math.floor(startCount)}/${total}`;
            }, 16);
            
            // Animate the circle
            let startDegree = 0;
            const degreeIncrement = progressDegree / (duration / 16);
            
            const degreeAnimation = setInterval(() => {
                startDegree += degreeIncrement;
                if (startDegree >= progressDegree) {
                    startDegree = progressDegree;
                    clearInterval(degreeAnimation);
                }
                circle.style.setProperty("--progress-degree", `${startDegree}%`);
            }, 16);
            
        }, delay);
    }


    function displayUserData(parsedData, username) {
        // Clear loading animation
        statsContainer.innerHTML = '';
        statsContainer.classList.remove("hidden");
        
        // Check if user data exists
        if (!parsedData || !parsedData.data || !parsedData.data.matchedUser) {
            const errorMessage = `
                <div class="error-container">
                    <div class="error-icon">⚠️</div>
                    <h3>User Not Found</h3>
                    <p>The username you entered does not exist on LeetCode.</p>
                    <p>Please check the spelling and try again.</p>
                </div>
            `;
            statsContainer.innerHTML = errorMessage;
            showNotification("Username not found. Please check and try again.", "error");
            return; // Important: Stop execution here
        }
        
        // Extract user data
        const userData = parsedData.data.matchedUser;
        
        // Additional check for empty user data
        if (!userData.username) {
            const errorMessage = `
                <div class="error-container">
                    <div class="error-icon">⚠️</div>
                    <h3>Invalid User Data</h3>
                    <p>Unable to retrieve user information for this username.</p>
                    <p>Please verify the username and try again.</p>
                </div>
            `;
            statsContainer.innerHTML = errorMessage;
            showNotification("Invalid user data received. Please try again.", "error");
            return; // Important: Stop execution here
        }
        
        const userProfile = userData.profile || {};
        
        // Create user profile section if profile data exists
        if (userData.username) {
            const profileSection = document.createElement('div');
            profileSection.className = 'profile-section';
            
            // Create avatar and username display
            const avatarHTML = userProfile.userAvatar 
                ? `<img src="${userProfile.userAvatar}" alt="${userData.username}" class="user-avatar">`
                : `<div class="user-avatar-placeholder">${userData.username.charAt(0).toUpperCase()}</div>`;
            
            profileSection.innerHTML = `
                <div class="user-profile">
                    ${avatarHTML}
                    <div class="user-info">
                        <h2 title="${userData.username}">${userData.username}</h2>
                        ${userProfile.ranking ? `<p class="user-ranking">Ranking: <span>#${userProfile.ranking}</span></p>` : ''}
                        ${userProfile.reputation ? `<p class="user-reputation">Reputation: <span>${userProfile.reputation}</span></p>` : ''}
                    </div>
                </div>
            `;
            
            statsContainer.appendChild(profileSection);
        }
        
        // Recreate the structure
        const progressDiv = document.createElement('div');
        progressDiv.className = 'progress';
        
        // Easy progress
        const easyProgressItem = document.createElement('div');
        easyProgressItem.className = 'progress-item';
        easyProgressItem.innerHTML = `
            <div class="easy-progress circle">
                <span id="easy-label"></span>
                <p>Easy</p>
            </div>
        `;
        
        // Medium progress
        const mediumProgressItem = document.createElement('div');
        mediumProgressItem.className = 'progress-item';
        mediumProgressItem.innerHTML = `
            <div class="medium-progress circle">
                <span id="medium-label"></span>
                <p>Medium</p>
            </div>
        `;
        
        // Hard progress
        const hardProgressItem = document.createElement('div');
        hardProgressItem.className = 'progress-item';
        hardProgressItem.innerHTML = `
            <div class="hard-progress circle">
                <span id="hard-label"></span>
                <p>Hard</p>
            </div>
        `;
        
        // Append all progress items
        progressDiv.appendChild(easyProgressItem);
        progressDiv.appendChild(mediumProgressItem);
        progressDiv.appendChild(hardProgressItem);
        
        // Create acceptance rate section
        const acceptanceSection = document.createElement('div');
        acceptanceSection.className = 'acceptance-section';
        
        // Calculate acceptance rates
        const calcAcceptanceRate = (accepted, total) => {
            return total > 0 ? ((accepted / total) * 100).toFixed(1) + '%' : 'N/A';
        };
        
        const totalAccepted = userData.submitStats.acSubmissionNum[0].submissions || 0;
        const totalSubmissions = userData.submitStats.totalSubmissionNum[0].submissions || 0;
        const acceptanceRate = calcAcceptanceRate(totalAccepted, totalSubmissions);
        
        acceptanceSection.innerHTML = `
            <div class="acceptance-rate">
                <h3>Acceptance Rate</h3>
                <div class="rate-display">${acceptanceRate}</div>
                <div class="acceptance-bar">
                    <div class="acceptance-fill" style="width: ${acceptanceRate !== 'N/A' ? acceptanceRate : '0%'};"></div>
                </div>
            </div>
        `;
        
        // Add the acceptance section
        const additionalStatsDiv = document.createElement('div');
        additionalStatsDiv.className = 'additional-stats';
        additionalStatsDiv.innerHTML = acceptanceSection.outerHTML;
        
        // Create cards container
        const cardsDiv = document.createElement('div');
        cardsDiv.className = 'stats-cards';
        
        // Add all sections to stats container
        statsContainer.appendChild(progressDiv);
        statsContainer.appendChild(additionalStatsDiv);
        statsContainer.appendChild(cardsDiv);
        
        // Get reference to the circles and labels again (since we recreated them)
        const easyProgressCircle = document.querySelector(".easy-progress");
        const mediumProgressCircle = document.querySelector(".medium-progress");
        const hardProgressCircle = document.querySelector(".hard-progress");
        const easyLabel = document.getElementById("easy-label");
        const mediumLabel = document.getElementById("medium-label");
        const hardLabel = document.getElementById("hard-label");
        const cardStatsContainer = document.querySelector(".stats-cards");
        
        // Get data from API response
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        // Get beats percentage data if available
        const beatsStats = parsedData.data.matchedUser.problemsSolvedBeatsStats || [];
        
        // Update progress with staggered animations
        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle, 200);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle, 600);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle, 1000);

        // Create skill tags section if available
        if (parsedData.data.matchedUser.profile && parsedData.data.matchedUser.profile.skillTags && parsedData.data.matchedUser.profile.skillTags.length > 0) {
            const skillTagsDiv = document.createElement('div');
            skillTagsDiv.className = 'skill-tags';
            skillTagsDiv.innerHTML = `
                <h3>Skills</h3>
                <div class="tags-container">
                    ${parsedData.data.matchedUser.profile.skillTags.map((tag, index) => 
                        `<span class="skill-tag" style="animation-delay: ${0.1 * (index + 1)}s">${tag}</span>`
                    ).join('')}
                </div>
            `;
            document.querySelector('.additional-stats').appendChild(skillTagsDiv);
        }

        // Prepare card data with enhanced stats
        const cardsData = [
            {
                label: "Total Problems Solved", 
                value: solvedTotalQues,
                total: totalQues,
                percentage: ((solvedTotalQues / totalQues) * 100).toFixed(1) + '%',
                beats: getBeatsPercentage(beatsStats, 'all')
            },
            {
                label: "Easy Problems", 
                value: solvedTotalEasyQues,
                total: totalEasyQues,
                percentage: ((solvedTotalEasyQues / totalEasyQues) * 100).toFixed(1) + '%',
                beats: getBeatsPercentage(beatsStats, 'easy')
            },
            {
                label: "Medium Problems", 
                value: solvedTotalMediumQues,
                total: totalMediumQues,
                percentage: ((solvedTotalMediumQues / totalMediumQues) * 100).toFixed(1) + '%',
                beats: getBeatsPercentage(beatsStats, 'medium')
            },
            {
                label: "Hard Problems", 
                value: solvedTotalHardQues,
                total: totalHardQues,
                percentage: ((solvedTotalHardQues / totalHardQues) * 100).toFixed(1) + '%',
                beats: getBeatsPercentage(beatsStats, 'hard')
            }
        ];

        function getBeatsPercentage(beatsStats, difficulty) {
            if (!beatsStats || beatsStats.length === 0) return null;
            
            const stat = beatsStats.find(s => {
                if (difficulty === 'all') return s.difficulty === 'All';
                return s.difficulty.toLowerCase() === difficulty.toLowerCase();
            });
            
            return stat ? stat.percentage + '%' : null;
        }

        console.log("card data: ", cardsData);

        // Add cards with staggered animation and enhanced visual effects
        setTimeout(() => {
            cardStatsContainer.innerHTML = cardsData.map(
                (data, index) => `
                    <div class="card" style="animation-delay: ${0.2 * (index + 1)}s">
                        <div class="card-header">
                            <h4>${data.label}</h4>
                            ${data.beats ? `<div class="beats-badge">Beats ${data.beats}</div>` : ''}
                        </div>
                        <div class="card-content">
                            <p class="card-value">${data.value}</p>
                            <div class="card-details">
                                <span class="card-total">of ${data.total}</span>
                                <span class="card-percentage">${data.percentage}</span>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${data.percentage}"></div>
                        </div>
                    </div>
                `
            ).join("");
            
            // Re-apply hover effects
            animateProgressCircles();
            
            // Add card hover animations
            animateCards();
        }, 1500);
        
        // Show success notification only after successful data display
        showNotification(`Successfully fetched data for ${username}`, "success");
    }

    // Function to animate cards
    function animateCards() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('card-hover');
            });
            
            card.addEventListener('mouseleave', () => {
                card.classList.remove('card-hover');
            });
        });
        
        // Add floating animation to badges with different delay for each
        const badges = document.querySelectorAll('.badge-item');
        badges.forEach((badge, index) => {
            badge.classList.add('floating');
            // Set different animation delay for each badge to create a wave effect
            badge.style.animationDelay = `${index * 0.5}s`;
        });
        
        // Add special hover effects to badges
        badges.forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                // Pause the floating animation and apply hover effect
                badge.style.animationPlayState = 'paused';
                badge.style.transform = 'translateY(-10px) scale(1.1)';
                badge.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.25), 0 0 15px rgba(96, 165, 250, 0.5)';
                
                // Add glow effect to badge icon
                const badgeIcon = badge.querySelector('.badge-icon') || badge.querySelector('img');
                if (badgeIcon) {
                    badgeIcon.style.boxShadow = '0 0 20px rgba(96, 165, 250, 0.8)';
                }
            });
            
            badge.addEventListener('mouseleave', () => {
                // Resume the floating animation
                badge.style.animationPlayState = 'running';
                badge.style.transform = '';
                badge.style.boxShadow = '';
                
                // Remove glow effect from badge icon
                const badgeIcon = badge.querySelector('.badge-icon') || badge.querySelector('img');
                if (badgeIcon) {
                    badgeIcon.style.boxShadow = '';
                }
            });
        });
    }

    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log("logging username: ", username);
        if(validateUsername(username)) {
            fetchUserDetails(username);
        }
    });
    
    // Add keypress event for better UX
    usernameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const username = usernameInput.value;
            if(validateUsername(username)) {
                fetchUserDetails(username);
            }
        }
    });
    
    // Add CSS for the notification toast
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        .notification-toast {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateY(-20px);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .notification-toast.info {
            background-color: #3b82f6;
        }
        
        .notification-toast.success {
            background-color: #10b981;
        }
        
        .notification-toast.error {
            background-color: #ef4444;
        }
        
        .button-text {
            margin-right: 5px;
        }
        
        .dots span {
            animation: dots 1.5s infinite;
            animation-fill-mode: both;
        }
        
        .dots span:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .dots span:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes dots {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        .error-message {
            color: #ef4444;
            text-align: center;
            padding: 20px;
        }
    `;
    document.head.appendChild(notificationStyle);
})