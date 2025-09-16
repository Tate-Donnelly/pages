import { useEffect, useRef } from "react";
export function useDraggable(ref, { handleSelector = ".window-header", onMove } = {}) {
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = el.querySelector(handleSelector) || el;
    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      dragging.current = true;
      const rect = el.getBoundingClientRect();
      offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      e.preventDefault();
    };
    const onMouseMove = (e) => {
      if (!dragging.current) return;
      let left = e.clientX - offset.current.x;
      let top = e.clientY - offset.current.y;
      const maxLeft = window.innerWidth - el.offsetWidth - 2;
      const maxTop = window.innerHeight - el.offsetHeight - 40;
      if (left < 0) left = 0;
      if (top < 0) top = 0;
      if (left > maxLeft) left = maxLeft;
      if (top > maxTop) top = maxTop;
      if (onMove) onMove({ top, left });
    };
    const onMouseUp = () => { dragging.current = false; };
    handle.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      handle.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [ref, handleSelector, onMove]);
}
