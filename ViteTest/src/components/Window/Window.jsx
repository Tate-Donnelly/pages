import {useEffect, useRef, useState} from "react";
import WindowControls from "./WindowControls.jsx";
import {useDraggable} from "../../hooks/useDraggable.js";
import "../../styles/window.css";

export default function Window({
                                   id,
                                   title,
                                   children,
                                   initialSize = {width: 600, height: 400},
                                   zIndex,
                                   isActive,
                                   onMinimize,
                                   onMaximize,
                                   onClose,
                                   onFocus,
                                   isMobile = false
                               }) {
    const ref = useRef(null);
    const [maximized, setMaximized] = useState(false);
    const [pos, setPos] = useState({top: 100, left: 150});
    const [size, setSize] = useState(initialSize);

    // Only enable dragging on desktop
    useDraggable(ref, {
        handleSelector: ".window-header",
        onMove: (p) => setPos(p),
        enabled: !isMobile
    });

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.zIndex = String(zIndex);

        // Set data attribute for mobile CSS targeting
        if (isMobile) {
            el.setAttribute('data-top', 'true');
        } else {
            el.removeAttribute('data-top');
        }
    }, [zIndex, isMobile]);

    const handleMax = () => {
        if (maximized) {
            setSize(initialSize);
            setPos({top: 100, left: 150});
            setMaximized(false);
            onMaximize(false);
        } else {
            setSize({width: window.innerWidth - 4, height: window.innerHeight - 40});
            setPos({top: 0, left: 0});
            setMaximized(true);
            onMaximize(true);
        }
    };

    // On mobile, windows should always be maximized
    useEffect(() => {
        if (isMobile && !maximized) {
            handleMax();
        }
    }, [isMobile]);

    return (
        <div
            ref={ref}
            className={`window ${isActive ? "active" : ""}`}
            style={{
                top: isMobile ? 0 : pos.top + 'px',
                left: isMobile ? 0 : pos.left + 'px',
                width: isMobile ? '100vw' : size.width + 'px',
                height: isMobile ? '100vh' : size.height + 'px'
            }}
            onMouseDown={onFocus}
            role="dialog"
            aria-label={title}
            data-top={isMobile ? "true" : "false"}
        >
            <div className="window-header">
                <div className="window-title">{title}</div>
                <WindowControls
                    onMinimize={onMinimize}
                    onMaximize={isMobile ? undefined : handleMax} // Hide maximize on mobile
                    onClose={onClose}
                />
            </div>
            <div className="window-content">{children}</div>
        </div>
    );
}