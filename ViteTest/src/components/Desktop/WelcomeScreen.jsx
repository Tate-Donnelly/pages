import { useEffect, useState } from "react";
import "../../styles/welcome-screen.css";
export default function WelcomeScreen({ onLogin }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(onLogin, 1000);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onLogin]);
  return (
    <div className="welcome-screen">
      <div className="welcome-title">Windows XP Component Framework</div>
      <div className="welcome-subtitle">Build applications with reusable UI components</div>
      <div className="user-selection" onClick={onLogin}>
        <div className="user-avatar"></div>
        <div className="user-name">Developer</div>
      </div>
      <div className="loading-bar">
        <div className="loading-progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
