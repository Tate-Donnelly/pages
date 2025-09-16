import "../../styles/toolbar.css";
export default function Toolbar({ buttons = [], onClick }) {
  return (
    <div className="toolbar">
      {buttons.map((b, i) => (
        <button key={i} className="toolbar-button" onClick={() => onClick && onClick(b.label)} title={b.label}>
          {b.label}
        </button>
      ))}
    </div>
  );
}
