// === INTERNET EXPLORER APPLICATION ===
// Creates a browser window
function createInternetExplorerWindow(page = 'projects') {
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
        loadIEContent(page);
        statusBar.innerHTML = `
            <span>Done</span>
            <div style="flex: 1;"></div>
            <span>Internet</span>
        `;
    }, 100);
    
    return ieWindow;
}

//Loads the content of a browser's page
function loadIEContent(page) {
    const contentArea = document.getElementById('ie-content-area');
    if (!contentArea) return;

    // Update URL input to reflect current page
    const urlInput = document.getElementById('ie-url-input');
    urlInput.value = `http://www.tatedonnelly.com/${page}`;

    switch (page) {
        case 'about':
            contentArea.innerHTML = loadAboutPage();
            break;
        case 'resume':
            contentArea.innerHTML = loadResumePage();
            break;
        case 'projects':
            contentArea.innerHTML = loadProjects();
            break;
        case 'sincerely-robin':
            contentArea.innerHTML = loadSincerelyRobin();
            break;
        case 'mythic-realms':
            contentArea.innerHTML = loadMythicRealms();
            break;
        case 'give-as-we-grow':
            contentArea.innerHTML = loadGiveAsWeGrow();
            break;
        case 'hellfire-hair':
            contentArea.innerHTML = loadHellfireHair();
            break;
        case 'gotta-go-bot':
            contentArea.innerHTML = loadGottaGoBot();
            break;
        case 'double-crossed':
            contentArea.innerHTML = loadDoubleCrossed();
            break;
    }
}

function loadAboutPage() {
    return `
        <div class="ie-classic-page">
            <div class="xp-navbar">About Tate Donnelly</div>
            <ul class="xp-nav-links" style="padding-left: 0;">
                <li><a href="#" onclick="loadIEContent('projects')">Projects</a></li>
                <li class="active"><a href="#" onclick="loadIEContent('about')">About</a></li>
                <li><a href="#" onclick="loadIEContent('resume')">Resume</a></li>
                <li><a onclick="window.open('https://www.linkedin.com/in/tatedonnelly/','_blank')">GitHub↗</a></li>
                <li><a onclick="window.open('https://github.com/Tate-Donnelly','_blank')">LinkedIn➚</a></li>
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
    return `
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

function getPageFromUrl() {
    const urlInput = document.getElementById('ie-url-input');
    const url = urlInput.value;
    if (url.includes('about')) return 'about';
    else if (url.includes('resume')) return 'resume';
    else if (url.includes('hellfire') || url.includes('hair')) return 'hellfire-hair';
    else if (url.includes('sincerely') || url.includes('robin')) return 'sincerely-robin';
    else if (url.includes('mythic') || url.includes('realms') || url.includes('MR') || url.includes('VR')) return  'mythic-realms';
    else if (url.includes('give') || url.includes('grow')) return  'give-as-we-grow';
    else if (url.includes('double') || url.includes('crossed')) return  'double-crossed';
    else if (url.includes('gotta') || url.includes('bot')) return  'gotta-go-bot';
    return 'projects';
}

function navigateToUrl() {
    // Extract page from URL
    let url = getPageFromUrl();

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
        loadIEContent(url);
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
function createToolbar(buttons) {
    const toolbar = document.createElement('div');
    toolbar.class = 'toolbar';
    
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
// ===== END COMPONENT FRAMEWORK FUNCTIONS =====