import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import BootScreen from './components/BootScreen';
import LoginScreen from './components/LoginScreen';
import LinkConfirmationModal from './components/LinkConfirmationModal';
import './App.css';

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [windows, setWindows] = useState([]);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [linkToConfirm, setLinkToConfirm] = useState(null);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLink = (linkConfig) => {
    setLinkToConfirm(linkConfig);
  };

  const openWindow = (windowConfig) => {
    const newWindow = {
      id: Date.now(),
      ...windowConfig,
      zIndex: nextZIndex,
      isMinimized: false,
    };
    setWindows([...windows, newWindow]);
    setNextZIndex(nextZIndex + 1);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const minimizeWindow = (id) => {
    setWindows(windows.map(w =>
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  };

  const restoreWindow = (id) => {
    setWindows(windows.map(w =>
      w.id === id ? { ...w, isMinimized: false, zIndex: nextZIndex } : w
    ));
    setNextZIndex(nextZIndex + 1);
  };

  const focusWindow = (id) => {
    setWindows(windows.map(w =>
      w.id === id ? { ...w, zIndex: nextZIndex } : w
    ));
    setNextZIndex(nextZIndex + 1);
  };

  if (!bootComplete) {
    return <BootScreen onComplete={() => setBootComplete(true)} />;
  }

  if (!loggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Desktop
        windows={windows}
        onOpenWindow={openWindow}
        onCloseWindow={closeWindow}
        onMinimizeWindow={minimizeWindow}
        onFocusWindow={focusWindow}
        onLink={handleLink}
      />
      <Taskbar
        windows={windows}
        onStartClick={() => setShowStartMenu(!showStartMenu)}
        onWindowClick={restoreWindow}
        onOpenWindow={openWindow}
      />
      {showStartMenu && (
        <StartMenu
          onClose={() => setShowStartMenu(false)}
          onOpenWindow={openWindow}
          onLink={handleLink}
        />
      )}

      <AnimatePresence>
        {linkToConfirm && (
          <LinkConfirmationModal
            link={linkToConfirm}
            onConfirm={() => {
              window.open(linkToConfirm.url, '_blank');
              setLinkToConfirm(null);
            }}
            onCancel={() => setLinkToConfirm(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
