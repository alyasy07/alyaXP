import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './BootScreen.css';

function BootScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="boot-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="boot-content">
        <img src="./images/windows.png" alt="Windows Logo" className="boot-logo" />
        <h1 className="boot-title">Microsoft Windows XP</h1>
        <p className="boot-subtitle">Portfolio Edition</p>
        <div className="loading-bar">
          <motion.div
            className="loading-progress"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default BootScreen;
