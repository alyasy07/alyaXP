import React from 'react';
import { motion } from 'framer-motion';
import './LinkConfirmationModal.css';

const LinkConfirmationModal = ({ link, onConfirm, onCancel }) => {
    if (!link) return null;

    const { url, title, icon } = link;
    const displayTitle = title || new URL(url).hostname;

    return (
        <div className="link-modal-overlay">
            <motion.div
                className="link-modal-window"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.1 }}
            >
                <div className="link-modal-titlebar">
                    <div className="link-modal-title-text">
                        <span>Open Link</span>
                    </div>
                    <button className="link-modal-close" onClick={onCancel}>×</button>
                </div>
                <div className="link-modal-body">
                    <div className="link-modal-main">
                        <img
                            src={icon || "./icons/Windows XP Icons/Internet Explorer 6.png"}
                            alt="Icon"
                            className="link-modal-icon-large"
                        />
                        <div className="link-modal-message">
                            <h3 style={{ marginTop: 0, marginBottom: 10 }}>Open Link</h3>
                            <p>Are you sure you want to open "{displayTitle}"?</p>
                        </div>
                    </div>

                    <div className="link-modal-footer">
                        <button className="xp-modal-btn" onClick={onCancel}>Cancel</button>
                        <button className="xp-modal-btn focus" onClick={onConfirm} autoFocus>Visit Site</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LinkConfirmationModal;
