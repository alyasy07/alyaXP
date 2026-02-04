import React from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import WindowContent from './WindowContent';
import './Window.css';

function Window({ id, title, content, width, height, x, y, zIndex, onClose, onMinimize, onFocus, onOpenWindow, data, onLink }) {
  // Determine if this window should have the browser chrome (navigation, address bar)
  // For this portfolio, let's say all windows effectively act like Explorer windows
  const isImageViewer = content === 'image-viewer';
  const isPaint = content === 'paint';
  const isCmd = content === 'cmd' || content === 'terminal';
  const showToolbar = !isPaint && !isCmd; // Hide toolbar for Paint and CMD
  const nodeRef = React.useRef(null);
  const [isMaximized, setIsMaximized] = React.useState(false);

  const toggleMaximize = (e) => {
    e.stopPropagation(); // Prevent drag start if clicking maximize
    setIsMaximized(!isMaximized);
    // Bring to front
    onFocus();
  };

  return (
    <Draggable
      handle=".window-titlebar"
      defaultPosition={{ x, y }}
      position={isMaximized ? { x: 0, y: 0 } : undefined}
      disabled={isMaximized}
      bounds="parent"
      cancel="input,textarea,button,select,option,.window-controls,.no-drag"
      onMouseDown={onFocus}
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={isMaximized ? "window-wrapper maximized" : "window-wrapper"}
        style={{
          position: isMaximized ? 'fixed' : 'absolute',
          zIndex,
          top: isMaximized ? 0 : undefined,
          left: isMaximized ? 0 : undefined,
          width: isMaximized ? '100%' : undefined,
          height: isMaximized ? 'calc(100% - 40px)' : undefined // 40px for taskbar safety
        }}
      >
        <motion.div
          className="window"
          style={{
            width: isMaximized ? '100%' : width,
            height: isMaximized ? '100%' : height
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div className="window-titlebar" onMouseDown={onFocus} onDoubleClick={toggleMaximize}>
            <div className="window-title-area">
              {/* Optional: Add icon here if passed */}
              <span className="window-title">{title}</span>
            </div>
            <div className="window-controls">
              <button className="window-btn minimize" onClick={onMinimize} title="Minimize">
                _
              </button>
              <button className="window-btn maximize" onClick={toggleMaximize} title={isMaximized ? "Restore" : "Maximize"}>
                {isMaximized ? '❐' : '□'}
              </button>
              <button className="window-btn close" onClick={onClose} title="Close">
                ×
              </button>
            </div>
          </div>

          {showToolbar && (
            <div className="window-toolbar">
              <div className="menubar">
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Favorites</span>
                <span>Tools</span>
                <span>Help</span>
              </div>

              {!isImageViewer && (
                <div className="toolbar-buttons">
                  <div className="toolbar-btn disabled">
                    <img src="./icons/Windows XP Icons/Back.png" alt="Back" />
                    <span>Back</span>
                  </div>
                  <div className="toolbar-btn disabled">
                    <img src="./icons/Windows XP Icons/Forward.png" alt="Forward" />
                  </div>
                  <div className="toolbar-btn">
                    <img src="./icons/utilities/explorer.ico" alt="Up" style={{ width: 18, height: 18 }} />
                  </div>
                  <div className="toolbar-separator" />
                  <div className="toolbar-btn">
                    <img src="./icons/Windows XP Icons/Search.png" alt="Search" />
                    <span>Search</span>
                  </div>
                  <div className="toolbar-btn">
                    <img src="./icons/utilities/explorer.ico" alt="Folders" />
                    <span>Folders</span>
                  </div>
                </div>
              )}

              <div className="address-bar">
                <span className="address-label">Address</span>
                <div className="address-input-wrapper">
                  <img src="./icons/utilities/explorer.ico" alt="icon" className="address-icon" />
                  <input type="text" readOnly value={`C:\\Desktop\\${title}`} className="address-input" />
                  <button className="go-button">Go</button>
                </div>
              </div>
            </div>
          )}

          <div className="window-content">
            <WindowContent type={content} onOpenWindow={onOpenWindow} data={data} onLink={onLink} />
          </div>
        </motion.div>
      </div>
    </Draggable>
  );
}

export default Window;
