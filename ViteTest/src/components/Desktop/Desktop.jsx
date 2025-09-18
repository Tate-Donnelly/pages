import { useRef, useState, useEffect } from "react";
import DesktopIcon from "./DesktopIcon.jsx";
import Taskbar from "./Taskbar.jsx";
import StartMenu from "./StartMenu.jsx";
import useWindows from "../../hooks/useWindows.jsx";
import MyComputer from "../applications/MyComputer/MyComputer.jsx";
import Notepad from "../applications/Notepad/Notepad.jsx";
import InternetExplorer from "../applications/InternetExplorer/InternetExplorer.jsx";
import "../../styles/desktop.css";

export default function Desktop() {
  const [startMenuVisible, setStartMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const {
    windows,
    activeWindow,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    bringToFront,
  } = useWindows();
  
  const desktopRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || window.innerWidth <= 820);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const makeWindow = (type) => {
    if (type === "my-computer") {
      openWindow({
        title: "My Computer",
        component: (props) => <MyComputer {...props} />,
        initialSize: { width: 640, height: 440 },
        isMobile: isMobile
      });
    } else if (type === "notepad") {
      openWindow({
        title: "Untitled - Notepad",
        component: (props) => <Notepad {...props} />,
        initialSize: { width: 600, height: 400 },
        isMobile: isMobile
      });
    } else if (type === "internet-explorer") {
      openWindow({
        title: "Tate Donnelly Portfolio",
        component: (props) => <InternetExplorer {...props} />,
        initialSize: { width: 800, height: 600 },
        isMobile: isMobile
      });
    }
    setStartMenuVisible(false);
  };

  return (
    <div className="desktop" ref={desktopRef} onMouseDown={() => setStartMenuVisible(false)}>
        {/*<div className="box">
            <div className="element">One</div>
            <div className="element">Two</div>
            <div className="element">Three</div>
            <div className="element">Four</div>
            <div className="element">Five</div>
            <div className="element">Six</div>
            <div className="element">Seven</div>
            <div className="element">Eight</div>
            <div className="element">Nine</div>
            <div className="element">Ten</div>
        </div>*/}
        <div className="desktop-icons">
          <DesktopIcon icon="internet-explorer" label="Portfolio" onActivate={() => makeWindow("internet-explorer")} />
          <DesktopIcon icon="linkedin" label="LinkedIn" onActivate={() => makeWindow("internet-explorer")} />
          <DesktopIcon icon="github" label="GitHub" onActivate={() => makeWindow("internet-explorer")} />
          <DesktopIcon icon="gawg" label="Give As We Grow" onActivate={() => makeWindow("internet-explorer")} />
          <DesktopIcon icon="mythic-realms" label="Mythic Realms" onActivate={() => makeWindow("internet-explorer")} />
          <DesktopIcon icon="sincerely-robin" label="Sincerely, Robin" onActivate={() => makeWindow("internet-explorer")} />
          <DesktopIcon icon="hellfire-hair" label="Hellfire Hair" onActivate={() => makeWindow("internet-explorer")} />
          <DesktopIcon icon="gotta-go-bot" label="Gotta Go Bot" onActivate={() => makeWindow("internet-explorer")} />
      </div>
      
      {windows
        .filter(w => !w.minimized)
        .map(w => (
          <w.component
            key={w.id}
            title={w.title}
            id={w.id}
            isActive={activeWindow === w.id}
            zIndex={w.zIndex}
            initialSize={w.initialSize}
            onClose={() => closeWindow(w.id)}
            onMinimize={() => minimizeWindow(w.id)}
            onMaximize={(isMax) => maximizeWindow(w.id, isMax)}
            onFocus={() => bringToFront(w.id)}
            isMobile={isMobile}
          />
        ))}
      
      <Taskbar
        windows={windows}
        activeWindow={activeWindow}
        onStartClick={() => setStartMenuVisible(v => !v)}
        onTaskClick={(id) => {
          const win = windows.find(w => w.id === id);
          if (!win) return;
          if (win.minimized) restoreWindow(id);
          bringToFront(id);
        }}
      />
      
      <StartMenu
        visible={startMenuVisible}
        onOpenWindow={makeWindow}
        onClose={() => setStartMenuVisible(false)}
      />
    </div>
  );
}