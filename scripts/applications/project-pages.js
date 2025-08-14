function loadProjects() {
    const portfolioData = {
        projects: [
            {
                title: "Give As We Grow",
                link: "loadIEContent('give-as-we-grow')",
                videoUrl: "https://www.youtube.com/embed/n3CZYVWYZyI?si=HpMj8OojYjR2TYTF",
                publisher: "GivingTuesday, Inc",
                role: "Software Engineer",
                tools: "Unity, C#, Trello",
                description: "A digital platform educating the next generation about giving and philanthropic action.",
                contributions: "Frontend Development, Server Communication"
            },
            {
                title: "Mythic Realms",
                link: "loadIEContent('mythic-realms')",
                videoUrl: "https://www.youtube.com/embed/iTAuscirfAA?si=wNWen-fQmY8dZZw6",
                publisher: "Petricore Games",
                role: "Software Engineer",
                tools: "Unity, C#, OculusVR",
                description: "An Action RPG where Mixed Reality transforms your home into a fantasy world to battle monsters and gather resources for your growing Virtual Reality Kingdom.",
                contributions: "Combat System, Audio System, Mixed Reality System"
            },
            {
                title: "Hellfire Hair",
                link: "loadIEContent('hellfire-hair')",
                videoUrl: "https://www.youtube.com/embed/pgkDYAey3tw",
                publisher: "MassDigi",
                role: "Lead Programmer and Producer",
                tools: "Unity, C#, PlasticSCM",
                description: "Hellfire Hair is a roguelike card battler where you play as a hairdresser from hell, battling demonic hair days.",
                contributions: "Combat System, Progression System, Deck System, Audio System, Overworld System, UI, Analytics Collection"
            },
            {
                title: "Sincerely, Robin",
                link: "loadIEContent('sincerely-robin')",
                videoUrl: "https://www.youtube.com/embed/A1oioVqJcY4?si=zI8SXha8Kqr3gkPb",
                role: "Lead Writer & Programmer",
                tools: "C#, Unity, JIRA",
                description: "Bed and BEAKfast is a management, cooking, and narrative game set in a world of birds! Cook meals for your guests and forge lasting relationships with your community!",
                contributions: "Dialogue System, Cooking System, Event Scripting, NPC Logic, Narrative Design"
            },
            {
                title: "Gotta Go-Bot",
                link: "loadIEContent('gotta-go-bot')",
                imageUrl: "https://via.placeholder.com/400x225?text=Gotta+Go-Bot",
                role: "Programmer",
                tools: "Unreal, Blueprints",
                description: "Gotta Go-bot is a 3D, puzzle platformer, where you play as a tiny robot exploring inside the remains of an abandoned giant robot.",
                contributions: "Health System, Save System, UI System"
            },
            {
                title: "Double Crossed",
                link: "loadIEContent('double-crossed')",
                videoUrl: "https://www.youtube.com/embed/G6GnujtUMUg",
                role: "Programmer & Designer",
                tools: "C++, Github, Custom ASCII Game Engine",
                description: "A stealth-based action game where you play as a secret agent trying to sneak into secure locations, gather intel, and avoid being caught.",
                contributions: "Level system, Combat system, Health system, Level Design, Trailer"
            }
        ],
        footer: "Website made by Tate Donnelly"
    };

    return `
        <div class="ie-classic-page">
            <div class="xp-navbar">Tate Donnelly - Projects</div>
            <ul class="xp-nav-links" style="padding-left: 0;">
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
                            <a onclick="${project.link}" class="xp-button">Read More</a>
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

function loadSincerelyRobin(){
    return '<div><h1>Sincerely, Robin</h1></div>';
}

function loadMythicRealms(){
    return '<div><h1>Mythic Realms</h1></div>';
}

function loadGiveAsWeGrow(){
    return '<div><h1>Give As We Grow</h1></div>';
}

function loadHellfireHair(){
    return '<div><h1>Hellfire Hair</h1></div>';
}

function loadGottaGoBot(){
    return '<div><h1>Gotta Go Bot</h1></div>';
}

function loadDoubleCrossed(){
    return '<div><h1>Double Crossed</h1></div>';
}