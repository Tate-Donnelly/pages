import "../../styles/menu-bar.css";
export default function MenuBar({ menus = [] }) {
  return (
    <div className="menu-bar" role="menubar">
      {menus.map(m => (
        <div className="menu-item" key={m.title} role="menuitem" tabIndex={0}>
          {m.title}
          <div className="menu-dropdown">
            {m.options.map(option => (
              <div key={option} className="menu-option">{option}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
