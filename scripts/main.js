// ===== MAIN APPLICATION LOGIC =====
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

//Checks the screen width to see if it is too small for window dragging
function isViewTooSmall(){
    return window.width < 1040;
}

//Checks to see if resizing/dragging should be allowed
function shouldAllowResizingAndDrag(){
    return !isMobile() && !isViewTooSmall();
}

function init() {
    updateClock();
    setInterval(updateClock, 60000);
    
    // Handle window maximize on resize to mobile
    window.addEventListener('resize', () => {
        if (!shouldAllowResizingAndDrag()) {
            Object.keys(windows).forEach(windowId => {
                if (!windows[windowId].maximized) {
                    maximizeWindow(windowId);
                }
            });
        }
    });

    openWindow('internet-explorer', 'projects');
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

function openWindow(type, page) {
    if(ieWindowExists){
        loadIEContent(page);
        return;
    }

    ieWindowExists=true;

    document.getElementById('start-menu').style.display = 'none';
    document.getElementById('start-button').classList.remove('active');
    
    let windowElement;
    let title;
    
    switch(type) {
        case 'internet-explorer':
            windowElement = createInternetExplorerWindow(page);
            title = 'Tate Donnelly Portfolio';
            break;
    }
    
    const windowId = `window-${Date.now()}`;
    windowElement.id = windowId;
    
    // Mobile-optimized positioning
    if (!shouldAllowResizingAndDrag()) {
        windowElement.style.top = '0';
        windowElement.style.left = '0';
    } else {
        windowElement.style.top = '100px';
        windowElement.style.left = '150px';
    }
    
    document.querySelector('.desktop').appendChild(windowElement);
    
    const controls = windowElement.querySelector('.window-controls');
    controls.children[0].onclick = () => minimizeWindow(windowId);
    controls.children[1].onclick = () => maximizeWindow(windowId);
    controls.children[2].onclick = () => closeWindow(windowId);

    if (shouldAllowResizingAndDrag()) makeDraggable(windowElement);
    bringToFront(windowElement);
    addToTaskbar(windowId, title);
    
    windows[windowId] = {
        element: windowElement,
        minimized: false,
        maximized: false,
        originalPosition: { 
            top: isMobile() ? '0' : '100px', 
            left: isMobile() ? '0' : '150px' 
        },
        originalSize: { 
            width: windowElement.style.width, 
            height: windowElement.style.height 
        }
    };
    
    // Auto-maximize on mobile
    if (!shouldAllowResizingAndDrag()) {
        maximizeWindow(windowId);
    }
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