// ===== COMPONENT FRAMEWORK FUNCTIONS =====
function createWindowFrame(title, width = '600px', height = '400px') {
    const window = document.createElement('div');
    window.className = 'window';
    window.style.width = width;
    window.style.height = height;
    
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
    toolbar.className = 'toolbar';
    
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