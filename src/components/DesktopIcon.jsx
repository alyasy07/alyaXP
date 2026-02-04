import { motion } from 'framer-motion';
import './DesktopIcon.css';

function DesktopIcon({ title, icon, onClick }) {
  const isImage = typeof icon === 'string' && (icon.startsWith('http') || icon.endsWith('.png') || icon.endsWith('.ico') || icon.endsWith('.jpg') || icon.endsWith('.jpeg') || icon.endsWith('.svg'));

  return (
    <motion.div
      className="desktop-icon"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onDoubleClick={onClick}
    >
      <div className="icon-image">
        {isImage ? (
          <img src={icon} alt={title} draggable="false" />
        ) : (
          icon
        )}
      </div>
      <div className="icon-label">{title}</div>
    </motion.div>
  );
}

export default DesktopIcon;
