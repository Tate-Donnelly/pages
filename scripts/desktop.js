// ===== DESKTOP MANAGEMENT =====
let zIndex = 100;
let windows = {};
let activeWindow = null;

function makeDraggable(element) {
    const header = element.querySelector('.window-header');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    header.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e.preventDefault();
        bringToFront(element);
        
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function bringToFront(element) {
    zIndex++;
    element.style.zIndex = zIndex;
    activeWindow = element.id;
    
    document.querySelectorAll('.taskbar-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.window === activeWindow) {
            item.classList.add('active');
        }
    });
}

function addToTaskbar(windowId, title) {
    const taskbarItem = document.createElement('div');
    taskbarItem.className = 'taskbar-item';
    taskbarItem.textContent = title;
    taskbarItem.dataset.window = windowId;
    
    taskbarItem.onclick = function() {
        const window = windows[windowId];
        if (window.minimized) {
            restoreWindow(windowId);
        } else {
            bringToFront(window.element);
        }
    };
    
    document.getElementById('taskbar-items').appendChild(taskbarItem);
}

function minimizeWindow(windowId) {
    const window = windows[windowId];
    if (window) {
        window.element.style.display = 'none';
        window.minimized = true;
        document.querySelector(`.taskbar-item[data-window="${windowId}"]`).classList.remove('active');
    }
}

function restoreWindow(windowId) {
    const window = windows[windowId];
    if (window) {
        window.element.style.display = 'flex';
        window.minimized = false;
        bringToFront(window.element);
    }
}

function maximizeWindow(windowId) {
    const window = windows[windowId];
    if (window) {
        if (window.maximized) {
            window.element.style.top = window.originalPosition.top;
            window.element.style.left = window.originalPosition.left;
            window.element.style.width = window.originalSize.width;
            window.element.style.height = window.originalSize.height;
            window.maximized = false;
        } else {
            window.originalPosition = {
                top: window.element.style.top,
                left: window.element.style.left
            };
            window.originalSize = {
                width: window.element.style.width,
                height: window.element.style.height
            };
            
            window.element.style.top = '0';
            window.element.style.left = '0';
            window.element.style.width = 'calc(100% - 4px)';
            window.element.style.height = 'calc(100% - 34px)';
            window.maximized = true;
        }
    }
}

function closeWindow(windowId) {
    const window = windows[windowId];
    if (window) {
        window.element.remove();
        const taskbarItem = document.querySelector(`.taskbar-item[data-window="${windowId}"]`);
        if (taskbarItem) taskbarItem.remove();
        delete windows[windowId];
    }
}
// ===== END DESKTOP MANAGEMENT =====