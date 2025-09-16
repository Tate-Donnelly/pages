import "../../styles/icon-view.css";
export default function IconView({ items = [] }) {
  return (
    <div className="icon-view">
      {items.map((item, index) => (
        <div key={index} className="icon-item">
          <div 
            className="icon-image-large" 
            style={{ backgroundImage: `url('${item.icon}')` }}
          />
          <div className="icon-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
