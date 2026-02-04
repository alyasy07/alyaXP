import { motion } from 'framer-motion';
import './LoginScreen.css';

function LoginScreen({ onLogin }) {
  return (
    <motion.div
      className="login-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="login-top-bar" />

      <div className="login-middle">
        <div className="login-content">
          {/* Left Side: Branding */}
          <div className="login-brand-side">
            <img src="./images/windows.png" alt="Windows XP" className="xp-logo-large"
              style={{ width: 120, height: 120, objectFit: 'contain', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }} />
            <div style={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold', lineHeight: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Microsoft<br />
              <span style={{ fontSize: '3rem' }}>Windows</span><sup style={{ fontSize: '1.5rem', marginLeft: 5, color: '#F76B1C' }}>xp</sup>
            </div>
            <div style={{ color: '#fff', fontSize: '1.2rem', marginTop: 10, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Portfolio Edition
            </div>
          </div>

          <div className="login-divider" />

          {/* Right Side: Users */}
          <div className="login-user-side">
            <h2 className="login-instruction">To begin, click your user name</h2>

            <motion.div
              className="user-profile"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onLogin}
            >
              <div className="user-icon-frame">
                <img src="./icons/Windows XP Icons/User Accounts.png" alt="User" />
              </div>
              <div className="user-info">
                <span className="user-name">Nur Syafika Alya</span>
                <span className="user-status">Click to log in</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="login-bottom-bar">
        <button className="turn-off-btn" onClick={() => window.location.reload()}>
          <img src="./icons/Windows XP Icons/Power.png" alt="" style={{ width: 24, height: 24 }} />
          Turn off computer
        </button>
        <div className="xp-footer-logo">
          After you log in, you can explore!
        </div>
      </div>
    </motion.div>
  );
}

export default LoginScreen;
