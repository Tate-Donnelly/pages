// === INTERNET EXPLORER APPLICATION ===
function createInternetExplorerWindow() {
    const window = createWindowFrame('Component Framework - Microsoft Internet Explorer', '800px', '600px');
    
    const toolbar = document.createElement('div');
    toolbar.className = 'toolbar';
    toolbar.innerHTML = `
        <div class="toolbar-button">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjMDA4MEZGIiBkPSJNMTAgNEw4IDIgNiA0IDIgNHY4bDQgNCA0LTQgNC00VjR6TTQgMTBWNmg0djRINHptNi00djRoNFY2aC00eiIvPgo8L3N2Zz4=" alt="Back">
            <span>Back</span>
        </div>
        <div class="toolbar-button">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjMDA4MEZGIiBkPSJNNiAxMkwxMCA4IDYgNHY4eiIvPgo8L3N2Zz4=" alt="Forward">
            <span>Forward</span>
        </div>
        <div class="toolbar-button">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAw IDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjMDA4MEZGIiBkPSJNOCA0aDJ2NEg4ek00IDhoOHYySDR6bTQgNGg0djJIOHoiLz4KPC9zdmc+" alt="Stop">
            <span>Stop</span>
        </div>
        <div class="toolbar-button">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjMDA4MEZGIiBkPSJNMTQuNCAxM0gxMlY4aDJ2NXptLTMgMEg5VjdoMnY2em0tMyAwSDZWNGgydjl6Ii8+Cjwvc3ZnPg==" alt="Refresh">
            <span>Refresh</span>
        </div>
        <div class="toolbar-button">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjMDA4MEZGIiBkPSJNOCAyTDIgNmw2IDIgNi0yLTYtMnpNMiA4djRsNiAyIDYtMlY4bC02LTJ6Ii8+Cjwvc3ZnPg==" alt="Home">
            <span>Home</span>
        </div>
        <input type="text" class="ie-url-bar" value="https://xp-framework.com/docs">
        <div class="toolbar-button">Go</div>
    `;
    window.querySelector('.window-content').appendChild(toolbar);
    
    const contentArea = document.createElement('div');
    contentArea.className = 'ie-content';
    contentArea.innerHTML = `
        <div class="framework-doc">
            <h1>Windows XP Component Framework</h1>
            
            <p>This framework provides reusable UI components for building Windows XP-style applications. Components can be combined and extended to create consistent desktop applications.</p>
            
            <!-- Content shortened for brevity -->
        </div>
    `;
    window.querySelector('.window-content').appendChild(contentArea);
    
    return window;
}
// === END INTERNET EXPLORER APPLICATION ===