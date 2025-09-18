import "../../styles/start-menu.css";

export default function StartMenu({visible, onOpenWindow, onClose}) {
    if (!visible) return null;
    return (
        <div className="start-menu" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-label="Menu">
            <div className="start-menu-left">Hi, I'm Tate. Welcome to my portfolio!</div>
            <div className="start-menu-right">
                <button className="start-item" onClick={() => onOpenWindow("projects")}>Projects</button>
                <button className="start-item" onClick={() => onOpenWindow("about-me")}>About Me</button>
                <button className="start-item" onClick={() => onOpenWindow("github")}>GitHub</button>
                <button className="start-item" onClick={() => onOpenWindow("linkedin")}>Linkedin</button>
                <hr/>
                <button className="start-item" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
