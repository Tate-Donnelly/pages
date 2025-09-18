export default function DesktopIcon({icon, label, onActivate}) {
    const handleActivate = () => {
        onActivate();
    };

    return (
        <div
            className="desktop-icon"
            role="button"
            tabIndex={0}
            onDoubleClick={handleActivate}
            onClick={(e) => {
                // On mobile, use single click instead of double click
                if ('ontouchstart' in window || window.innerWidth <= 820) {
                    e.preventDefault();
                    handleActivate();
                }
            }}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleActivate()}
            aria-label={label}
        >
            <div className={`icon icon-${icon}`}/>
            <div className="icon-label">{label}</div>
        </div>
    );
}
