import { useState, useEffect } from 'react';
import './Taskbar.css';
import BalloonTooltip from './BalloonTooltip';

function Taskbar({ windows, onStartClick, onWindowClick, onOpenWindow }) {
  // Use Windows logo icon if available, otherwise fallback to text/symbol
  const startIcon = "https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png";
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a short delay on mount
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="taskbar">
      {showTooltip && (
        <BalloonTooltip
          onClose={() => setShowTooltip(false)}
          onOpenWindow={onOpenWindow}
        />
      )}
      <button className="start-button" onClick={onStartClick}>
        <span className="start-icon">
          <img src={startIcon} alt="Start" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        </span>
        <span className="start-text">Start</span>
      </button>

      <div className="taskbar-items">
        {windows.map(window => (
          <button
            key={window.id}
            className={`taskbar-item ${window.isMinimized ? 'minimized' : 'active'}`}
            onClick={() => onWindowClick(window.id)}
          >
            {window.title}
          </button>
        ))}
      </div>

      <div className="system-tray">
        <img src="./icons/Windows XP Icons/Volume.png" alt="Volume" className="tray-icon" style={{ marginRight: '8px' }} />
        <img src="./icons/Windows XP Icons/Wireless Network Connection.png" alt="Network" className="tray-icon" style={{ marginRight: '8px' }} />
        <img
          src="./icons/Windows XP Icons/Information.png"
          alt="Info"
          className="tray-icon"
          style={{ marginRight: '8px' }}
          onClick={() => setShowTooltip(!showTooltip)}
        />
        <span className="clock">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </div>
  );
}

export default Taskbar;
