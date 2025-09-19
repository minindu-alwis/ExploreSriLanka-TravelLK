<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExploreSriLanka - Animated README</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            line-height: 1.6;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            margin-top: 20px;
            margin-bottom: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            60% {
                transform: translateY(-5px);
            }
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
            }
            70% {
                transform: scale(1.05);
                box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
            }
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        @keyframes typewriter {
            from {
                width: 0;
            }
            to {
                width: 100%;
            }
        }

        @keyframes blink {
            0%, 50% {
                opacity: 1;
            }
            51%, 100% {
                opacity: 0;
            }
        }

        @keyframes glow {
            0%, 100% {
                text-shadow: 0 0 5px #4CAF50, 0 0 10px #4CAF50, 0 0 15px #4CAF50;
            }
            50% {
                text-shadow: 0 0 10px #4CAF50, 0 0 20px #4CAF50, 0 0 30px #4CAF50;
            }
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }

        /* Header Styles */
        .header {
            text-align: center;
            padding: 40px 0;
            animation: fadeInUp 1s ease-out;
        }

        .title {
            font-size: 3.5em;
            font-weight: 800;
            background: linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4);
            background-size: 300% 300%;
            animation: glow 2s infinite, float 3s ease-in-out infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
        }

        .subtitle {
            font-size: 1.2em;
            color: #666;
            margin-bottom: 30px;
            animation: slideInLeft 1s ease-out 0.5s both;
            position: relative;
        }

        .subtitle::after {
            content: '|';
            animation: blink 1s infinite;
            color: #4CAF50;
        }

        .banner-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
            animation: slideInRight 1s ease-out 0.7s both;
            transition: transform 0.3s ease;
        }

        .banner-image:hover {
            transform: scale(1.02);
        }

        /* Badge Styles */
        .badges {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            margin: 30px 0;
            animation: fadeInUp 1s ease-out 1s both;
        }

        .badge {
            padding: 12px 24px;
            border-radius: 25px;
            text-decoration: none;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 0.9em;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .badge::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
        }

        .badge:hover::before {
            left: 100%;
        }

        .badge:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .badge-demo {
            background: linear-gradient(45deg, #4CAF50, #45a049);
            animation: pulse 2s infinite;
        }

        .badge-stars {
            background: linear-gradient(45deg, #FFD700, #FFA500);
        }

        .badge-forks {
            background: linear-gradient(45deg, #1E90FF, #0066CC);
        }

        .badge-issues {
            background: linear-gradient(45deg, #FF6B6B, #FF5252);
        }

        /* Section Styles */
        .section {
            margin: 40px 0;
            animation: fadeInUp 1s ease-out;
        }

        .section h2 {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #333;
            position: relative;
            animation: slideInLeft 1s ease-out;
        }

        .section h2::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 60px;
            height: 4px;
            background: linear-gradient(45deg, #4CAF50, #45a049);
            animation: slideInRight 1s ease-out 0.5s both;
        }

        /* Feature Grid */
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 30px 0;
        }

        .feature-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 30px;
            border-radius: 20px;
            color: white;
            animation: slideInUp 1s ease-out;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
            pointer-events: none;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .feature-card h3 {
            font-size: 1.5em;
            margin-bottom: 15px;
            animation: bounce 2s infinite;
        }

        .feature-icon {
            font-size: 3em;
            margin-bottom: 15px;
            display: inline-block;
            animation: float 2s ease-in-out infinite;
        }

        /* Tech Stack */
        .tech-stack {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin: 30px 0;
        }

        .tech-badge {
            padding: 15px 30px;
            border-radius: 30px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            font-weight: bold;
            animation: pulse 2s infinite;
            transition: all 0.3s ease;
        }

        .tech-badge:hover {
            transform: scale(1.1);
            animation: none;
        }

        /* Code Block */
        .code-block {
            background: #1a1a1a;
            color: #00ff00;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            margin: 20px 0;
            animation: fadeInUp 1s ease-out;
            position: relative;
            overflow: hidden;
        }

        .code-block::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ff00, transparent);
            animation: slideInRight 2s ease-out infinite;
        }

        /* Comparison Table */
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            animation: fadeInUp 1s ease-out;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .comparison-table th {
            background: linear-gradient(45deg, #4CAF50, #45a049);
            color: white;
            padding: 15px;
            font-weight: bold;
            animation: slideInDown 1s ease-out;
        }

        .comparison-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
            animation: fadeInUp 1s ease-out;
            transition: background-color 0.3s ease;
        }

        .comparison-table tr:nth-child(even) {
            background: rgba(76, 175, 80, 0.05);
        }

        .comparison-table tr:hover {
            background: rgba(76, 175, 80, 0.1);
            transform: scale(1.01);
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 40px 0;
            border-top: 2px solid #4CAF50;
            margin-top: 50px;
            animation: fadeInUp 1s ease-out;
        }

        .footer-heart {
            color: #FF6B6B;
            animation: pulse 1s infinite;
            font-size: 1.2em;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .title {
                font-size: 2.5em;
            }
            
            .badges {
                flex-direction: column;
                align-items: center;
            }
            
            .feature-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Scroll animations */
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s ease-out;
        }

        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }

        /* Loading animation */
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeOut 1s ease-out 2s both;
        }

        .loader-text {
            color: white;
            font-size: 2em;
            font-weight: bold;
            animation: pulse 1s infinite;
        }

        @keyframes fadeOut {
            to {
                opacity: 0;
                visibility: hidden;
            }
        }
    </style>
</head>
<body>
    <div class="loader">
        <div class="loader-text">🌺 Loading ExploreSriLanka... 🏝️</div>
    </div>

    <div class="container">
        <div class="header">
            <h1 class="title">🌺 ExploreSriLanka</h1>
            <p class="subtitle">✨ Discover the Pearl of the Indian Ocean with Intelligence ✨</p>
            <img src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1200&h=300&fit=crop&crop=center" alt="Sri Lanka Banner" class="banner-image">
            
            <div class="badges">
                <a href="https://minindu-alwis.github.io/ExploreSriLanka-TravelLK/" class="badge badge-demo">🌐 Live Demo</a>
                <a href="#" class="badge badge-stars">⭐ GitHub Stars</a>
                <a href="#" class="badge badge-forks">🔄 Fork Project</a>
                <a href="#" class="badge badge-issues">🐛 Report Issues</a>
            </div>
        </div>

        <div class="section animate-on-scroll">
            <h2>🎯 What Makes ExploreSriLanka Revolutionary?</h2>
            <p><strong>This isn't just another travel website</strong> — it's a cutting-edge platform that merges advanced technology with Sri Lanka's natural beauty to create an unforgettable digital experience.</p>
        </div>

        <div class="section animate-on-scroll">
            <h2>⭐ Core Innovation Features</h2>
            <div class="code-block">
🏛️ 3D Virtual Museums      →  Immersive cultural galleries with interactive exhibits<br>
🤖 Mira AI Assistant       →  Intelligent travel companion for personalized recommendations<br>
🌦️ Real-Time Weather       →  Live meteorological data for perfect trip planning<br>
🏨 Smart Hotel Discovery    →  Curated accommodations across all districts<br>
🗺️ Province-Based Explorer  →  Systematic navigation through Sri Lanka's regions<br>
🛍️ Shopping Destinations    →  Modern malls and traditional markets guide
            </div>
        </div>

        <div class="section animate-on-scroll">
            <h2>🌟 Feature Showcase</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">🏞️</div>
                    <h3>Destination Discovery Engine</h3>
                    <p>Systematic organization by provinces and districts with stunning visual galleries and interactive maps.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🏨</div>
                    <h3>Intelligent Accommodation System</h3>
                    <p>From luxury resorts to budget options, with real-time availability and comprehensive reviews.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎨</div>
                    <h3>3D Museum Experience</h3>
                    <p>Virtual reality cultural experiences showcasing Sri Lankan art and heritage in stunning 3D.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🤖</div>
                    <h3>Mira AI Travel Assistant</h3>
                    <p>24/7 intelligent support with personalized itineraries and weather-aware recommendations.</p>
                </div>
            </div>
        </div>

        <div class="section animate-on-scroll">
            <h2>🛠️ Technology Stack</h2>
            <div class="tech-stack">
                <div class="tech-badge">HTML5</div>
                <div class="tech-badge">CSS3</div>
                <div class="tech-badge">JavaScript</div>
                <div class="tech-badge">Weather API</div>
                <div class="tech-badge">AI Integration</div>
                <div class="tech-badge">3D Graphics</div>
            </div>
        </div>

        <div class="section animate-on-scroll">
            <h2>🚀 Quick Start Guide</h2>
            <div class="code-block">
# Clone the repository<br>
git clone https://github.com/minindu-alwis/ExploreSriLanka-TravelLK.git<br><br>
# Navigate to the project directory<br>
cd ExploreSriLanka-TravelLK<br><br>
# Launch with live server<br>
npx http-server . -p 8080
            </div>
        </div>

        <div class="section animate-on-scroll">
            <h2>🏆 Why ExploreSriLanka Stands Out</h2>
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Traditional Sites</th>
                        <th>🌟 ExploreSriLanka</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>AI Assistant</strong></td>
                        <td>❌ Static FAQs</td>
                        <td>✅ Interactive Mira AI</td>
                    </tr>
                    <tr>
                        <td><strong>3D Museums</strong></td>
                        <td>❌ Basic galleries</td>
                        <td>✅ Immersive VR experiences</td>
                    </tr>
                    <tr>
                        <td><strong>Weather Data</strong></td>
                        <td>❌ External redirects</td>
                        <td>✅ Real-time integration</td>
                    </tr>
                    <tr>
                        <td><strong>Organization</strong></td>
                        <td>❌ Random lists</td>
                        <td>✅ Systematic categorization</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="section animate-on-scroll">
            <h2>🤝 Contributing to ExploreSriLanka</h2>
            <p>We welcome passionate contributors who want to help showcase Sri Lanka's incredible beauty and rich culture!</p>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">🏨</div>
                    <h3>Hotels & Accommodations</h3>
                    <p>Add new properties with detailed reviews and comprehensive information.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🌐</div>
                    <h3>Localization</h3>
                    <p>Translate content to Sinhala and Tamil languages for better accessibility.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎨</div>
                    <h3>Design Enhancement</h3>
                    <p>Improve UI/UX with modern design patterns and better user experience.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>PWA Features</h3>
                    <p>Add offline functionality and app-like experiences for mobile users.</p>
                </div>
            </div>
        </div>

        <div class="footer animate-on-scroll">
            <h2>🌺 Crafted with <span class="footer-heart">❤️</span> for Sri Lanka 🏝️</h2>
            <p><em>Bringing the Pearl of the Indian Ocean to the Digital World</em></p>
            
            <div class="badges">
                <a href="#" class="badge badge-demo">⭐ Star Repository</a>
                <a href="#" class="badge badge-forks">🔄 Share Project</a>
                <a href="#" class="badge badge-stars">🤝 Contribute</a>
            </div>
            
            <p style="margin-top: 20px; color: #666;">
                <em>© 2024 ExploreSriLanka - Democratizing Sri Lankan Travel Through Technology</em>
            </p>
        </div>
    </div>

    <script>
        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Observe all scroll animation elements
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Add dynamic effects
        document.addEventListener('DOMContentLoaded', function() {
            // Staggered animation for feature cards
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
            });

            // Staggered animation for tech badges
            const techBadges = document.querySelectorAll('.tech-badge');
            techBadges.forEach((badge, index) => {
                badge.style.animationDelay = `${index * 0.3}s`;
            });

            // Typing effect for subtitle
            const subtitle = document.querySelector('.subtitle');
            const text = subtitle.textContent;
            subtitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    subtitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            setTimeout(typeWriter, 1000);

            // Parallax effect for banner image
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const banner = document.querySelector('.banner-image');
                if (banner) {
                    banner.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
            });

            // Interactive hover effects
            document.querySelectorAll('.feature-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-15px) rotateX(5deg)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) rotateX(0deg)';
                });
            });
        });

        // Remove loader after page loads
        window.addEventListener('load', function() {
            setTimeout(() => {
                const loader = document.querySelector('.loader');
                if (loader) {
                    loader.style.display = 'none';
                }
            }, 2000);
        });

        // Add smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>
