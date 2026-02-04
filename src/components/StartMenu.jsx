import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './StartMenu.css';

function StartMenu({ onClose, onOpenWindow, onLink }) {

    const handleItemClick = (action, params = {}) => {
        if (action === 'openWindow') {
            onOpenWindow(params);
        } else if (action === 'link') {
            if (onLink) {
                onLink(params);
            } else {
                window.open(params.url, '_blank');
            }
        }
        onClose();
    };

    return (
        <>
            <div className="start-menu-overlay" onClick={onClose} />
            <AnimatePresence>
                <motion.div
                    className="start-menu"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.1 }}
                >
                    {/* Orange Header */}
                    <div className="start-header">
                        <div className="user-account-pic">
                            <img src="./icons/Windows XP Icons/User Accounts.png" alt="User" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <span className="user-account-name">Portfolio User</span>
                    </div>

                    {/* Split Body */}
                    <div className="start-body">
                        {/* Left Column (White) */}
                        <div className="start-column-left">
                            <div className="start-item" onClick={() => handleItemClick('openWindow', { title: 'My Projects', content: 'projects', width: 800, height: 600 })}>
                                <img src="./icons/Windows XP Icons/My Documents.png" alt="" />
                                <div className="label-group">
                                    <span className="main-text">My Projects</span>
                                    <span className="sub-text">View my work</span>
                                </div>
                            </div>
                            <div className="start-item" onClick={() => handleItemClick('openWindow', { title: 'Contact Me', content: 'contact', width: 400, height: 300 })}>
                                <img src="./icons/Windows XP Icons/Email.png" alt="" />
                                <div className="label-group">
                                    <span className="main-text">Contact Me</span>
                                    <span className="sub-text">Send me a message</span>
                                </div>
                            </div>
                            <div className="start-item" onClick={() => handleItemClick('openWindow', { title: 'About Me', content: 'about', width: 700, height: 500 })}>
                                <img src="./icons/Windows XP Icons/Start Menu Programs.png" alt="" />
                                <div className="label-group">
                                    <span className="main-text">About Me</span>
                                </div>
                            </div>

                            <div className="separator"></div>

                            <div className="start-item" onClick={() => handleItemClick('openWindow', { title: 'Paint', content: 'paint', width: 800, height: 600 })}>
                                <img src="./icons/Windows XP Icons/Paint.png" alt="" />
                                <span className="main-text">Paint</span>
                            </div>

                            <div className="start-item" onClick={() => handleItemClick('openWindow', { title: 'Media Player', content: 'image-viewer', width: 600, height: 400, data: { image: './images/windows_xp_49.jpg', title: 'Wallpaper' } })}>
                                <img src="./icons/Windows XP Icons/Windows Media Player 9.png" alt="" />
                                <span className="main-text">Media Player</span>
                            </div>

                            <div className="start-item">
                                <img src="./icons/media/wmp1.ico" alt="" />
                                <span className="main-text">Music Player</span>
                            </div>

                            <div className="all-programs">
                                All Programs ▶
                            </div>
                        </div>

                        {/* Right Column (Blue) */}
                        <div className="start-column-right">
                            <div className="start-item" onClick={() => handleItemClick('link', { url: 'https://github.com/alyasy07', title: 'Github', icon: './images/github.png' })}>
                                <img src="./images/github.png" alt="" />
                                <span className="main-text">Github</span>
                            </div>
                            <div className="start-item" onClick={() => handleItemClick('link', { url: 'https://linkedin.com', title: 'LinkedIn', icon: './images/linkedin.png' })}>
                                <img src="./images/linkedin.png" alt="" />
                                <span className="main-text">LinkedIn</span>
                            </div>

                            <div className="separator"></div>

                            <div className="start-item">
                                <img src="./icons/Windows XP Icons/Recent Documents.png" alt="" />
                                <span className="main-text">Recently Used</span>
                                <span style={{ marginLeft: 'auto', fontSize: '10px' }}>▶</span>
                            </div>

                            <div className="separator"></div>

                            <div className="start-item" onClick={() => handleItemClick('openWindow', { title: 'Command Prompt', content: 'cmd', width: 700, height: 500 })}>
                                <img src="./icons/Windows XP Icons/Command Prompt.png" alt="" />
                                <span className="main-text">Command Prompt</span>
                            </div>
                            <div className="start-item" onClick={() => handleItemClick('openWindow', { title: 'Image Viewer', content: 'image-viewer', width: 600, height: 450, data: { image: './images/windows_xp_49.jpg' } })}>
                                <img src="./icons/Windows XP Icons/Windows Picture and Fax Viewer.png" alt="" />
                                <span className="main-text">Image Viewer</span>
                            </div>
                            <div className="start-item" onClick={() => handleItemClick('openWindow', { title: 'My Resume', content: 'resume-viewer', width: 850, height: 650, data: { image: './images/RESUME NUR SYAFIKA ALYA (1).pdf' } })}>
                                <img src="./icons/Windows XP Icons/Wordpad.png" alt="" />
                                <span className="main-text">My Resume</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="start-footer">
                        <button className="footer-btn" onClick={() => window.location.reload()} title="This just reloads the page">
                            <img src="./icons/Windows XP Icons/Logout.png" alt="" style={{ width: 20, height: 20 }} />
                            <span>Log Off</span>
                        </button>
                        <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.3)' }}></div>
                        <button className="footer-btn">
                            <img src="./icons/Windows XP Icons/Power.png" alt="" style={{ width: 20, height: 20 }} />
                            <span>Shut Down</span>
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default StartMenu;
