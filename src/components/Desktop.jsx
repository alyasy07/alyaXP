import DesktopIcon from './DesktopIcon';
import Window from './Window';
import './Desktop.css';

function Desktop({ windows, onOpenWindow, onCloseWindow, onMinimizeWindow, onFocusWindow, onLink }) {
  const desktopIcons = [
    {
      id: 'about',
      title: 'About Me',
      icon: '/icons/utilities/explorer.ico', // Replaced with local icon
      content: 'about'
    },
    {
      id: 'projects',
      title: 'My Projects',
      icon: '/icons/browsers/ie1.ico', // Replaced with local icon
      content: 'projects',
      width: 800,
      height: 600
    },
    {
      id: 'paint',
      title: 'Paint',
      icon: '/icons/Windows XP Icons/Paint.png', // Updated to correct Paint icon
      content: 'paint',
      width: 800,
      height: 600
    },
    {
      id: 'resume',
      title: 'Resume',
      icon: '/icons/windows_vista/vista_sticky_notes.ico', // Using sticky notes as resume
      content: 'resume'
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: '/icons/communication/wlm1.ico', // Using messenger for contact
      content: 'contact'
    },
    {
      id: 'recycle',
      title: 'Recycle Bin',
      icon: '/icons/utilities/trashbin1.ico', // Replaced with local icon
      content: 'recycle'
    }
  ];

  return (
    <div className="desktop">
      <div className="desktop-icons">
        {desktopIcons.map((icon, index) => (
          <DesktopIcon
            key={icon.id}
            title={icon.title}
            icon={icon.icon}
            onClick={() => onOpenWindow({
              title: icon.title,
              content: icon.content,
              width: 600,
              height: 400,
              x: 100 + (index * 30),
              y: 100 + (index * 30),
            })}
          />
        ))}
      </div>

      {windows.map(window => (
        !window.isMinimized && (
          <Window
            key={window.id}
            {...window}
            onClose={() => onCloseWindow(window.id)}
            onMinimize={() => onMinimizeWindow(window.id)}
            onFocus={() => onFocusWindow(window.id)}
            onOpenWindow={onOpenWindow}
            zIndex={window.zIndex}
            onLink={onLink}
          />
        )
      ))}
    </div>
  );
}

export default Desktop;
