// === MY COMPUTER APPLICATION ===
function createMyComputerWindow() {
    const window = createWindowFrame('My Computer', '800px', '600px');
    
    const menuBar = createMenuBar([
        { title: 'File', options: ['New', 'Open', 'Close', 'Exit'] },
        { title: 'Edit', options: ['Cut', 'Copy', 'Paste', 'Select All'] },
        { title: 'View', options: ['Icons', 'List', 'Details', 'Arrange Icons'] },
        { title: 'Tools', options: ['Map Network Drive', 'Disconnect Network Drive'] },
        { title: 'Help', options: ['Help Topics', 'About My Computer'] }
    ]);
    window.querySelector('.window-content').appendChild(menuBar);
    
    const toolbar = document.createElement('div');
    toolbar.className = 'mc-toolbar';
    toolbar.innerHTML = `
        <div class="mc-toolbar-button">
            <img src="https://i.redd.it/whistler-xp-icons-redesigned-see-captions-v0-0u05lpyyffnc1.png?width=1024&format=png&auto=webp&s=f94c316dfac734bc3b74ec3432d3a511784719db" 
                 class="mc-toolbar-icon" alt="Back">
            <span>Back</span>
        </div>
        <div class="mc-toolbar-button">
            <img src="https://www.iconshock.com/image/PlasticXP/General/fast_forward" 
                 class="mc-toolbar-icon" alt="Forward">
            <span>Forward</span>
        </div>
        <div class="mc-toolbar-button">
            <img src="https://i.imgur.com/RjMRqmK.png" 
                 class="mc-toolbar-icon" alt="Search">
            <span>Search</span>
        </div>
        <div class="mc-toolbar-button">
            <img src="https://winaero.com/blog/wp-content/uploads/2016/05/Windows-XP.png" 
                 class="mc-toolbar-icon" alt="Folders">
            <span>Folders</span>
        </div>
    `;
    window.querySelector('.window-content').appendChild(toolbar);
    
    // Add CSS to ensure consistent icon sizing
    const style = document.createElement('style');
    style.textContent = `
        .mc-toolbar {
            display: flex;
            padding: 4px;
            background: #f0f0f0;
            border-bottom: 1px solid #d3d3d3;
        }
        .mc-toolbar-button {
            display: flex;
            align-items: center;
            padding: 2px 8px;
            margin-right: 4px;
            cursor: pointer;
        }
        .mc-toolbar-button:hover {
            background-color: #e0e0e0;
        }
        .mc-toolbar-icon {
            width: 24px;
            height: 24px;
            object-fit: contain;
            margin-right: 4px;
        }
    `;
    document.head.appendChild(style);
    
    const addressBar = document.createElement('div');
    addressBar.className = 'mc-address-bar';
    addressBar.innerHTML = `
        <span class="mc-address-label">Address:</span>
        <input type="text" class="mc-address-input" value="My Computer">
    `;
    window.querySelector('.window-content').appendChild(addressBar);
    
    const mainContent = document.createElement('div');
    mainContent.className = 'mc-main-content';
    mainContent.innerHTML = `
        <div class="mc-tasks-pane">
            <div class="mc-tasks-section">
                <div class="mc-tasks-title">System Tasks</div>
                <ul class="mc-tasks-list">
                    <li class="mc-task-item">View system information</li>
                    <li class="mc-task-item">Add or remove programs</li>
                    <li class="mc-task-item">Change a setting</li>
                </ul>
            </div>
        </div>
        <div class="mc-devices-pane">
            <div class="mc-folder-header">Hard Disk Drives</div>
            <div class="icon-view">
                <div class="icon-item">
                    <div class="icon-image-large" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8cGF0aCBmaWxsPSIjMDA4MEZGIiBkPSJNMzYgMTBIMTJjLTIuMjEgMC00IDEuNzktNCA0djIwYzAgMi4yMSAxLjc5IDQgNCA0aDI0YzIuMjEgMCA0LTEuNzkgNC00VjE0YzAtMi4yMS0xLjc5LTQtNC00eiIvPgogIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNCAxOGgyMHY0SDE0em0wIDhoMTB2NEgxNHoiLz4KPC9zdmc+')"></div>
                    <div class="icon-label">Local Disk (C:)</div>
                </div>
            </div>
        </div>
        <div class="mc-details-pane">
            <div class="mc-details-title">Details</div>
            <div class="mc-details-content">
                <div class="mc-details-row">
                    <div class="mc-details-label">Name:</div>
                    <div class="mc-details-value">My Computer</div>
                </div>
            </div>
        </div>
    `;
    window.querySelector('.window-content').appendChild(mainContent);
    
    const statusBar = createStatusBar(['5 objects', '12.5 GB free of 40 GB']);
    window.querySelector('.window-content').appendChild(statusBar);
    
    return window;
}
// === END MY COMPUTER APPLICATION ===