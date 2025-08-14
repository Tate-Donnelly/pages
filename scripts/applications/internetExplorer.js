// === INTERNET EXPLORER APPLICATION ===
function createInternetExplorerWindow() {
    const ieWindow = createWindowFrame('IE - Tate Donnelly Portfolio', '800px', '600px');
    
    // Create toolbar with XP styling
    const toolbar = document.createElement('div');
    toolbar.className = 'ie-toolbar';
    toolbar.innerHTML = `
        <button class="ie-toolbar-button" onclick="window.history.back()">
            <img src="https://www.iconshock.com/image/PlasticXP/General/fast_forward" class="ie-toolbar-icon" alt="Back">
            <span>Back</span>
        </button>

        <button class="ie-toolbar-button" onclick="window.history.forward()">
            <img src="https://www.iconshock.com/image/PlasticXP/General/fast_forward" class="ie-toolbar-icon" alt="Forward">
            <span>Forward</span>
        </button>

        <button class="ie-toolbar-button" onclick="document.getElementById('ie-content-area').innerHTML = ''">
            <img src="https://www.iconshock.com/image/PlasticXP/General/fast_forward" class="ie-toolbar-icon" alt="Stop">
            <span>Stop</span>
        </button>

        <button class="ie-toolbar-button" onclick="loadIEContent('projects')">
            <img src="https://www.iconshock.com/image/PlasticXP/General/fast_forward" class="ie-toolbar-icon" alt="Refresh">
            <span>Refresh</span>
        </button>

        <input type="text" class="ie-url-bar" value="http://www.tatedonnelly.com/projects" id="ie-url-input">

        <button class="ie-toolbar-button ie-go-button" onclick="navigateToUrl()">
            <img src="https://www.iconshock.com/image/PlasticXP/General/fast_forward" class="ie-toolbar-icon" alt="Go">
            <span>Go</span>
        </button>
    `;
    ieWindow.querySelector('.window-content').appendChild(toolbar);
    
    // Create content area 
    const contentArea = document.createElement('div');
    contentArea.className = 'ie-content';
    contentArea.id = 'ie-content-area';
    ieWindow.querySelector('.window-content').appendChild(contentArea);
    
    // Create status bar
    const statusBar = document.createElement('div');
    statusBar.className = 'ie-status-bar';
    statusBar.innerHTML = `
        <span>Connecting to http://www.tatedonnelly.com/projects...</span>
        <div style="flex: 1;"></div>
        <span>Internet</span>
    `;
    ieWindow.querySelector('.window-content').appendChild(statusBar);
    
    // Load content immediately after all elements are created
    setTimeout(() => {
        loadProjectsPage();
        statusBar.innerHTML = `
            <span>Done</span>
            <div style="flex: 1;"></div>
            <span>Internet</span>
        `;
    }, 100);
    
    return ieWindow;
}

function loadIEContent(page = 'projects') {
    const contentArea = document.getElementById('ie-content-area');
    if (!contentArea) return;

    // Update URL input to reflect current page
    const urlInput = document.getElementById('ie-url-input');
    urlInput.value = `http://www.tatedonnelly.com/${page}`;

    if (page === 'about') {
        loadAboutPage();
    } else if (page === 'resume') {
        loadResumePage();
    } else {
        loadProjectsPage();
    }
}

function loadAboutPage() {
    const contentArea = document.getElementById('ie-content-area');
    if (!contentArea) return;
    
    contentArea.innerHTML = `
        <div class="ie-classic-page">
            <div class="xp-navbar">About Tate Donnelly</div>
            <ul class="xp-nav-links" style="padding-left: 0px;">
                <li><a href="#" onclick="loadIEContent('projects')">Projects</a></li>
                <li class="active"><a href="#" onclick="loadIEContent('about')">About</a></li>
                <li><a href="#" onclick="loadIEContent('resume')">Resume</a></li>
                <li><a href="https://github.com/Tate-Donnelly">GitHub↗</a></li>
                <li><a href="https://www.linkedin.com/in/tatedonnelly/">LinkedIn➚</a></li>
            </ul>
            
            <h1>About Me</h1>
            
            <div class="xp-card">
                <div class="xp-card-title">Hi, I'm Tate Donnelly!</div>
                <div class="xp-card-content">
                    <p>I've been working in the games industry for 2 years now, developing games with Unity, Unreal, and proprietary engines. I love video games as a medium, and have shipped games on computer, mobile, virtual reality (VR), and mixed reality (MR) platforms.</p>
                    
                    <p>I'm currently looking for work, so feel free to reach out if you're interested in working together. I'm always on the lookout for a good challenge, programming projects, and freelance work.</p>
                    
                    <h2>Skills</h2>
                    <table class="xp-table" style="width: 100%;">
                        <tr>
                            <td width="50%">
                                <ul>
                                    <li>Java</li>
                                    <li>C/C++/C#</li>
                                    <li>Unity</li>
                                    <li>GIT</li>
                                    <li>Unreal</li>
                                    <li>JavaScript</li>
                                </ul>
                            </td>
                            <td width="50%">
                                <ul>
                                    <li>HTML/CSS</li>
                                    <li>Blueprints</li>
                                    <li>SQL</li>
                                    <li>JIRA</li>
                                    <li>Agile</li>
                                    <li>Linux</li>
                                    <li>OBS</li>
                                    <li>Reaper</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    
                    <h2>Awards</h2>
                    <ul>
                        <li>2024 Gold Winner for GDC's Narrative Review Contest</li>
                        <li>1st Place, Hack@WPI (2021)</li>
                        <li>Dean's List (2020 - 2023)</li>
                        <li>National Honors, NCWIT (2019, 2020)</li>
                        <li>MA Affiliate Award, NCWIT (2018, 2019, 2020)</li>
                    </ul>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
                <a href="#" onclick="loadIEContent('resume')" class="xp-button">View Full Resume</a>
            </div>
            
            <div style="text-align: center; margin-top: 20px; font-size: 10px; color: #666;">
                <p>Website made by Tate Donnelly</p>
            </div>
        </div>
    `;
}

function loadResumePage() {
    const contentArea = document.getElementById('ie-content-area');
    if (!contentArea) return;
    
    contentArea.innerHTML = `
        <div class="ie-classic-page">
            <div class="xp-navbar">Tate Donnelly - Resume</div>
            <ul class="xp-nav-links" style="padding-left: 0px;">
                <li><a href="#" onclick="loadIEContent('projects')">Projects</a></li>
                <li><a href="#" onclick="loadIEContent('about')">About</a></li>
                <li class="active"><a href="#" onclick="loadIEContent('resume')">Resume</a></li>
                <li><a href="https://github.com/Tate-Donnelly">GitHub↗</a></li>
                <li><a href="https://www.linkedin.com/in/tatedonnelly/">LinkedIn↗</a></li>
            </ul>
            
            <h1>Professional Experience</h1>
            
            <div class="xp-card">
                <div class="xp-card-title">Worcester Polytechnic Institute - Adjunct Professor (Aug 2024 - Present)</div>
                <div class="xp-card-content">
                    <ul>
                        <li>Taught the college course The Game Development Process.</li>
                        <li>Instructed 26 students on major roles and production processes in the games industry.</li>
                        <li>Supervised and helped with the creation of student-made games in Unity.</li>
                    </ul>
                </div>
            </div>
            
            <div class="xp-card">
                <div class="xp-card-title">MassDigi - Technical Director (May 2024 - Present)</div>
                <div class="xp-card-content">
                    <ul>
                        <li>Maintained Unity build pipelines for 8 mobile applications under simultaneous active development across Android and iOS platforms.</li>
                        <li>Organized software workshops and training documentation for a team of 30+ developers working together for the first time as part of the 2024 Summer Innovation Program.</li>
                    </ul>
                </div>
            </div>
            
            <div class="xp-card">
                <div class="xp-card-title">FableVision - Freelance Software Engineer (June 2024)</div>
                <div class="xp-card-content">
                    <ul>
                        <li>Used Unity's UI system to rework the login/account setup flow for the mobile app, Give As We Grow.</li>
                        <li>Refactored the app's UI system in accordance with the model–view–viewmodel (MVVM) design pattern to allow for easy additions and aid communication with the server.</li>
                        <li>Provided live development support for the app to ensure necessary requirements were met.</li>
                    </ul>
                </div>
            </div>
            
            <div class="xp-card">
                <div class="xp-card-title">Petricore Games - Software Engineer Intern (May 2023 - August 2023)</div>
                <div class="xp-card-content">
                    <ul>
                        <li>Developed and refactored the audio, combat, biome, and save systems in Unity for Petricore's extended reality game, Mythic Realms.</li>
                        <li>Enhanced player experience through system implementation and streamlined development with tool creation.</li>
                        <li>Designed and implemented an interactive map exhibit that supported multiple users.</li>
                        <li>Collaborated extensively with museums nationwide to develop interactive exhibits that met their specific requirements.</li>
                    </ul>
                </div>
            </div>
            
            <div class="xp-card">
                <div class="xp-card-title">Hellfire Hair - Lead Programmer Intern (May 2022 - May 2023)</div>
                <div class="xp-card-content">
                    <ul>
                        <li>Coordinated with a cross-disciplinary team to create and ship the mobile game, Hellfire Hair, on IOS and Android app stores.</li>
                        <li>Designed and developed major game systems and game architecture with Unity to enhance gameplay and optimize the code for mobile platforms.</li>
                        <li>Introduced bi-weekly app builds for closed alpha testing with TestFlight and the Google Play Console.</li>
                        <li>Conducted regular code reviews throughout the game development process.</li>
                    </ul>
                </div>
            </div>
            
            <div class="xp-card">
                <div class="xp-card-title">MassDiGI - Quality Assurance Coordinator (July 2022 - December 2022)</div>
                <div class="xp-card-content">
                    <ul>
                        <li>Executed a machine learning and AI research project sponsored by Unity Technologies.</li>
                        <li>Collaborated with management to provide training on improved processes and aided with the creation and maintenance of quality training data.</li>
                        <li>Optimized resource allocation by prioritizing critical tasks in the quality assurance process, ensuring timely completion of projects.</li>
                    </ul>
                </div>
            </div>
            
            <div class="xp-card">
                <div class="xp-card-title">Brigham & Women's Hospital - Lead Software Engineer (Spring 2022)</div>
                <div class="xp-card-content">
                    <ul>
                        <li>Led ten programmers and managed project tasks using the Scrum methodology to develop new features for Brigham & Women's Hospital application prototype.</li>
                        <li>Designed and implemented an interactive graphical map system according to the observer and model-view-controller design patterns with Java and JavaFX, which allowed hospital employees to see and filter out locations, service requests, and medical equipment.</li>
                        <li>Created professional mockups, user stories, scenarios, storyboards, and UML diagrams to document the application's design and goals.</li>
                    </ul>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
                <a href="#" class="xp-button">Download Resume</a>
            </div>
            
            <div style="text-align: center; margin-top: 20px; font-size: 10px; color: #666;">
                <p>Website made by Tate Donnelly</p>
            </div>
        </div>
    `;
}

function loadProjectsPage() {
    const portfolioData = {
        projects: [
            {
                title: "Give As We Grow",
                href: "../GiveAsWeGrow.html",
                videoUrl: "https://www.youtube.com/embed/n3CZYVWYZyI?si=HpMj8OojYjR2TYTF",
                publisher: "GivingTuesday, Inc",
                role: "Software Engineer",
                tools: "Unity, C#, Trello",
                description: "A digital platform educating the next generation about giving and philanthropic action.",
                contributions: "Frontend Development, Server Communication"
            },
            {
                title: "Mythic Realms",
                href: "../mythic-realms.html",
                videoUrl: "https://www.youtube.com/embed/iTAuscirfAA?si=wNWen-fQmY8dZZw6",
                publisher: "Petricore Games",
                role: "Software Engineer",
                tools: "Unity, C#, OculusVR",
                description: "An Action RPG where Mixed Reality transforms your home into a fantasy world to battle monsters and gather resources for your growing Virtual Reality Kingdom.",
                contributions: "Combat System, Audio System, Mixed Reality System"
            },
            {
                title: "Hellfire Hair",
                href: "../hellfire-hair.html",
                videoUrl: "https://www.youtube.com/embed/pgkDYAey3tw",
                publisher: "MassDigi",
                role: "Lead Programmer and Producer",
                tools: "Unity, C#, PlasticSCM",
                description: "Hellfire Hair is a roguelike card battler where you play as a hairdresser from hell, battling demonic hair days.",
                contributions: "Combat System, Progression System, Deck System, Audio System, Overworld System, UI, Analytics Collection"
            },
            {
                title: "Bed and Beakfast",
                href: "../bed-and-beakfast.html",
                videoUrl: "https://www.youtube.com/embed/A1oioVqJcY4?si=zI8SXha8Kqr3gkPb",
                role: "Lead Writer & Programmer",
                tools: "C#, Unity, JIRA",
                description: "Bed and BEAKfast is a management, cooking, and narrative game set in a world of birds! Cook meals for your guests and forge lasting relationships with your community!",
                contributions: "Dialogue System, Cooking System, Event Scripting, NPC Logic, Narrative Design"
            },
            {
                title: "Gotta Go-Bot",
                href: "../gotta-go-bot.html",
                imageUrl: "https://via.placeholder.com/400x225?text=Gotta+Go-Bot",
                role: "Programmer",
                tools: "Unreal, Blueprints",
                description: "Gotta Go-bot is a 3D, puzzle platformer, where you play as a tiny robot exploring inside the remains of an abandoned giant robot.",
                contributions: "Health System, Save System, UI System"
            },
            {
                title: "Double Crossed",
                href: "../double-crossed.html",
                videoUrl: "https://www.youtube.com/embed/G6GnujtUMUg",
                role: "Programmer & Designer",
                tools: "C++, Github, Custom ASCII Game Engine",
                description: "A stealth-based action game where you play as a secret agent trying to sneak into secure locations, gather intel, and avoid being caught.",
                contributions: "Level system, Combat system, Health system, Level Design, Trailer"
            }
        ],
        footer: "Website made by Tate Donnelly"
    };

    const contentArea = document.getElementById('ie-content-area');
    if (!contentArea) return;
    
    contentArea.innerHTML = `
        <div class="ie-classic-page">
            <div class="xp-navbar">Tate Donnelly - Projects</div>
            <ul class="xp-nav-links" style="padding-left: 0px;">
                <li class="active"><a href="#" onclick="loadIEContent('projects')">Projects</a></li>
                <li><a href="#" onclick="loadIEContent('about')">About</a></li>
                <li><a href="#" onclick="loadIEContent('resume')">Resume</a></li>
                <li><a href="https://github.com/Tate-Donnelly">GitHub↗</a></li>
                <li><a href="https://www.linkedin.com/in/tatedonnelly/">LinkedIn↗</a></li>
            </ul>
            
            <h1>My Projects</h1>
            <p>Here are some of my recent game development projects:</p>
            
            ${portfolioData.projects.map(project => `
                <div class="xp-card">
                    <div class="xp-card-title">${project.title}</div>
                    <div class="xp-card-content">
                        ${project.videoUrl ? `
                            <div style="text-align: center; margin: 10px 0;">
                                <iframe width="400" height="225" src="${project.videoUrl}" frameborder="0" allowfullscreen></iframe>
                            </div>
                        ` : project.imageUrl ? `
                            <div style="text-align: center; margin: 10px 0;">
                                <img src="${project.imageUrl}" alt="${project.title}" width="400" border="1">
                            </div>
                        ` : ''}
                        
                        <table class="xp-table">
                            ${project.publisher ? `
                                <tr>
                                    <td width="120"><b>Publisher:</b></td>
                                    <td>${project.publisher}</td>
                                </tr>
                            ` : ''}
                            <tr>
                                <td><b>Role:</b></td>
                                <td>${project.role}</td>
                            </tr>
                            <tr>
                                <td><b>Tools:</b></td>
                                <td>${project.tools}</td>
                            </tr>
                            <tr>
                                <td><b>Description:</b></td>
                                <td>${project.description}</td>
                            </tr>
                            <tr>
                                <td><b>Contributions:</b></td>
                                <td>${project.contributions}</td>
                            </tr>
                        </table>
                        
                        <div style="margin-top: 10px;">
                            <a href="${project.href}" class="xp-button">Read More</a>
                        </div>
                    </div>
                </div>
            `).join('')}
            
            <div style="text-align: center; margin-top: 20px; font-size: 10px; color: #666;">
                <p>${portfolioData.footer}</p>
                <p>Best viewed with Internet Explorer 6.0 at 800x600 resolution</p>
                <p>Last updated: ${new Date().toLocaleDateString()}</p>
            </div>
        </div>
    `;
}

function navigateToUrl() {
    const urlInput = document.getElementById('ie-url-input');
    const url = urlInput.value;
    
    // Extract page from URL
    let page = 'projects';
    if (url.includes('about')) page = 'about';
    else if (url.includes('resume')) page = 'resume';
    
    // Show classic IE "working" animation
    const statusBar = document.querySelector('.ie-status-bar');
    if (statusBar) {
        statusBar.innerHTML = `
            <span>Connecting to ${url}...</span>
            <div style="flex: 1;"></div>
            <span>Internet</span>
        `;
    }
    
    // Simulate page load
    setTimeout(() => {
        loadIEContent(page);
        if (statusBar) {
            statusBar.innerHTML = `
                <span>Done</span>
                <div style="flex: 1;"></div>
                <span>Internet</span>
            `;
        }
    }, 1500);
}

// ===== COMPONENT FRAMEWORK FUNCTIONS =====
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function createWindowFrame(title, width = '600px', height = '400px') {
    const window = document.createElement('div');
    window.className = 'window';
    
    // Mobile-optimized sizing
    if (isMobile()) {
        window.style.width = '100%';
        window.style.height = '100%';
    } else {
        window.style.width = width;
        window.style.height = height;
    }
    
    window.innerHTML = `
        <div class="window-header">${title}</div>
        <div class="window-controls">
            <div class="window-btn">_</div>
            <div class="window-btn">□</div>
            <div class="window-btn">×</div>
        </div>
        <div class="window-content"></div>
    `;
    
    return window;
}

function createMenuBar(menus) {
    const menuBar = document.createElement('div');
    menuBar.className = 'menu-bar';
    
    menus.forEach(menu => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            ${menu.title}
            <div class="menu-dropdown">
                ${menu.options.map(option => 
                    `<div class="menu-option">${option}</div>`
                ).join('')}
            </div>
        `;
        menuBar.appendChild(menuItem);
    });
    
    return menuBar;
}

function createToolbar(buttons) {
    const toolbar = document.createElement('div');
    toolbar.class极 = 'toolbar';
    
    buttons.forEach(button => {
        const btn = document.createElement('div');
        btn.className = 'toolbar-button';
        btn.innerHTML = `
            <img src="${button.icon}" alt="${button.label}">
            <span>${button.label}</span>
        `;
        toolbar.appendChild(btn);
    });
    
    return toolbar;
}

function createContentArea(content) {
    const contentArea = document.createElement('div');
    contentArea.className = 'content-area';
    contentArea.innerHTML = content;
    return contentArea;
}

function createIconView(items) {
    const iconView = document.createElement('div');
    iconView.className = 'icon-view';
    
    items.forEach(item => {
        const iconItem = document.createElement('div');
        iconItem.className = 'icon-item';
        iconItem.innerHTML = `
            <div class="icon-image-large" style="background-image: url('${item.icon}')"></div>
            <div class="icon-label">${item.label}</div>
        `;
        iconView.appendChild(iconItem);
    });
    
    return iconView;
}

function createStatusBar(items) {
    const statusBar = document.createElement('div');
    statusBar.className = 'status-bar';
    
    items.forEach(item => {
        const statusItem = document.createElement('div');
        statusItem.className = 'status-item';
        statusItem.textContent = item;
        statusBar.appendChild(statusItem);
    });
    
    return statusBar;
}
// ===== END COMPONENT FRAMEWORK FUNCTIONS =====