import "../../styles/status-bar.css";
export default function StatusBar({ items = [] }) {
  return (
    <div className="status-bar">
      {items.map((t, i) => (
        <div key={i} className="status-item">{t}</div>
      ))}
    </div>
  );
}
