import useClock from "../../hooks/useClock.js";
import "../../styles/taskbar.css";

export default function Taskbar({ windows, activeWindow, onStartClick, onTaskClick }) {
  const time = useClock();
    return (
    <div className="taskbar">
      <button className="start-button" onClick={onStartClick} aria-label="Start">Start</button>
      <div className="task-buttons">
        {windows.map(w => (
          <button
            key={w.id}
            className={`task-button ${!w.minimized && activeWindow === w.id ? "active" : ""}`}
            onClick={() => onTaskClick(w.id)}
            title={w.title}
          >
            {w.title}
          </button>
        ))}
      </div>
      <div className="taskbar-tray" aria-label="clock">{time}</div>
    </div>
  );
}