import "../../styles/start-menu.css";
export default function StartMenu({ visible, onOpenWindow, onClose }) {
  if (!visible) return null;
  return (
    <div className="start-menu" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-label="Start menu">
      <div className="start-menu-left">Windows&nbsp;XP</div>
      <div className="start-menu-right">
        <button className="start-item" onClick={() => onOpenWindow("my-computer")}>My Computer</button>
        <button className="start-item" onClick={() => onOpenWindow("internet-explorer")}>Internet Explorer</button>
        <button className="start-item" onClick={() => onOpenWindow("notepad")}>Notepad</button>
        <hr />
        <button className="start-item" onClick={onClose}>Close Menu</button>
      </div>
    </div>
  );
}
