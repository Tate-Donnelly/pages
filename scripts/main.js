// ===== MAIN APPLICATION LOGIC =====
function init() {
    updateClock();
    setInterval(updateClock, 60000);
    
    setTimeout(() => {
        document.getElementById('loading-progress').style.width = '100%';
        setTimeout(login, 3000);
    }, 500);
}

function login() {
    document.getElementById('welcome-screen').style.display = 'none';
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    
    document.getElementById('clock').textContent = `${formattedHours}:${minutes} ${ampm}`;
}

function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    const startButton = document.getElementById('start-button');
    
    if (startMenu.style.display === 'block') {
        startMenu.style.display = 'none';
        startButton.classList.remove('active');
    } else {
        startMenu.style.display = 'block';
        startButton.classList.add('active');
        bringToFront(startMenu);
    }
}

function openWindow(type) {
    document.getElementById('start-menu').style.display = 'none';
    document.getElementById('start-button').classList.remove('active');
    
    let windowElement;
    let title;
    
    switch(type) {
        case 'my-computer':
            windowElement = createMyComputerWindow();
            title = 'My Computer';
            break;
        case 'notepad':
            windowElement = createNotepadWindow();
            title = 'Untitled - Notepad';
            break;
        case 'internet-explorer':
            windowElement = createInternetExplorerWindow();
            title = 'Component Framework - Microsoft Internet Explorer';
            break;
    }
    
    const windowId = `window-${Date.now()}`;
    windowElement.id = windowId;
    windowElement.style.top = '100px';
    windowElement.style.left = '150px';
    
    document.querySelector('.desktop').appendChild(windowElement);
    
    const controls = windowElement.querySelector('.window-controls');
    controls.children[0].onclick = () => minimizeWindow(windowId);
    controls.children[1].onclick = () => maximizeWindow(windowId);
    controls.children[2].onclick = () => closeWindow(windowId);
    
    makeDraggable(windowElement);
    bringToFront(windowElement);
    addToTaskbar(windowId, title);
    
    windows[windowId] = {
        element: windowElement,
        minimized: false,
        maximized: false,
        originalPosition: { top: '100px', left: '150px' },
        originalSize: { width: windowElement.style.width, height: windowElement.style.height }
    };
}

// Close start menu when clicking outside
document.addEventListener('click', function(e) {
    const startMenu = document.getElementById('start-menu');
    const startButton = document.getElementById('start-button');
    
    if (startMenu.style.display === 'block' && 
        !startMenu.contains(e.target) && 
        !startButton.contains(e.target)) {
        startMenu.style.display = 'none';
        startButton.classList.remove('active');
    }
});

// Initialize on load
window.onload = init;