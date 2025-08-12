// === NOTEPAD APPLICATION ===
function createNotepadWindow() {
    const window = createWindowFrame('Untitled - Notepad', '600px', '400px');
    
    const menuBar = createMenuBar([
        { title: 'File', options: ['New', 'Open...', 'Save', 'Save As...', 'Page Setup...', 'Print...', 'Exit'] },
        { title: 'Edit', options: ['Undo', 'Cut', 'Copy', 'Paste', 'Delete', 'Select All', 'Time/Date'] },
        { title: 'Format', options: ['Word Wrap', 'Font...'] },
        { title: 'View', options: ['Status Bar'] },
        { title: 'Help', options: ['Help Topics', 'About Notepad'] }
    ]);
    window.querySelector('.window-content').appendChild(menuBar);
    
    const textAreaContainer = document.createElement('div');
    textAreaContainer.className = 'text-area-container';
    textAreaContainer.innerHTML = `
        <textarea class="notepad-textarea" id="notepad-textarea">Welcome to Windows XP Notepad Clone!

This is a complete implementation of the classic text editor with all the features you remember:

• File operations (New, Open, Save)
• Edit functions (Cut, Copy, Paste, Delete)
• Format options (Word Wrap, Font selection)
• Status bar with position information</textarea>
    `;
    window.querySelector('.window-content').appendChild(textAreaContainer);
    
    const statusBar = createStatusBar(['Ln 1, Col 1', '100%', 'Windows (CRLF)', 'UTF-8']);
    statusBar.id = 'notepad-status-bar';
    window.querySelector('.window-content').appendChild(statusBar);
    
    // Initialize Notepad functionality
    initNotepad(window);
    
    return window;
}

function initNotepad(windowElement) {
    const textarea = windowElement.querySelector('#notepad-textarea');
    const statusBar = windowElement.querySelector('#notepad-status-bar');
    const statusItems = statusBar.querySelectorAll('.status-item');
    
    // Update cursor position in status bar
    function updateCursorPosition() {
        const text = textarea.value;
        const cursorPos = textarea.selectionStart;
        
        // Calculate line and column
        const textUpToCursor = text.substring(0, cursorPos);
        const lines = textUpToCursor.split('\n');
        const line = lines.length;
        const column = lines[lines.length - 1].length + 1;
        
        // Update status bar
        if (statusItems[0]) {
            statusItems[0].textContent = `Ln ${line}, Col ${column}`;
        }
    }
    
    // Set up event listeners
    textarea.addEventListener('input', updateCursorPosition);
    textarea.addEventListener('click', updateCursorPosition);
    textarea.addEventListener('keyup', updateCursorPosition);
    
    // Initialize position
    updateCursorPosition();
}
// === END NOTEPAD APPLICATION ===