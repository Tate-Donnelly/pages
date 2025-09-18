export default function WindowControls({onMinimize, onMaximize, onClose}) {
    return (
        <div className="window-controls">
            <button className="window-btn" onClick={onMinimize} aria-label="Minimize">_</button>
            <button className="window-btn" onClick={onMaximize} aria-label="Maximize">□</button>
            <button className="window-btn" onClick={onClose} aria-label="Close">×</button>
        </div>
    );
}
