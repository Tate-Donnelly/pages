import { useRef, useState } from "react";
export default function useWindows() {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const zCounter = useRef(100);
  const openWindow = ({ title, component, initialSize }) => {
    const id = `w_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const zIndex = ++zCounter.current;
    const Component = component;
    const w = {
      id,
      title,
      minimized: false,
      maximized: false,
      zIndex,
      initialSize,
      component: (props) => (
        <Component
          {...props}
          id={id}
          onClose={() => closeWindow(id)}
          onMinimize={() => minimizeWindow(id)}
          onMaximize={(isMax) => maximizeWindow(id, isMax)}
          onFocus={() => bringToFront(id)}
        />
      ),
    };
    setWindows(prev => [...prev, w]);
    setActiveWindow(id);
  };
  const closeWindow = (id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    setActiveWindow(prev => (prev === id ? null : prev));
  };
  const minimizeWindow = (id) => {
    setWindows(prev => prev.map(w => (w.id === id ? { ...w, minimized: true } : w)));
    setActiveWindow(prev => (prev === id ? null : prev));
  };
  const maximizeWindow = (id, maximized) => {
    setWindows(prev => prev.map(w => (w.id === id ? { ...w, maximized } : w)));
  };
  const restoreWindow = (id) => {
    setWindows(prev => prev.map(w => (w.id === id ? { ...w, minimized: false } : w)));
    bringToFront(id);
  };
  const bringToFront = (id) => {
    setWindows(prev => {
      const nextZ = ++zCounter.current;
      return prev.map(w => (w.id === id ? { ...w, zIndex: nextZ } : w));
    });
    setActiveWindow(id);
  };
  return {
    windows,
    activeWindow,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    bringToFront,
  };
}
