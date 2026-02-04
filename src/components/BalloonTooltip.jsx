import React, { useEffect, useState } from 'react';
import './BalloonTooltip.css';
import { X } from 'lucide-react';

const BalloonTooltip = ({ onClose, onOpenWindow }) => {
    return (
        <div className="xp-balloon-tooltip">
            <div className="xp-balloon-header">
                <div className="xp-balloon-title">
                    <img src="/icons/Windows XP Icons/Information.png" alt="Info" style={{ width: 14, height: 14 }} />
                    Welcome to Alya XP
                </div>
                <button className="xp-balloon-close" onClick={onClose}>
                    <X size={10} />
                </button>
            </div>
            <div className="xp-balloon-content">
                A faithful XP-inspired interface, custom-built to showcase my work and attention to detail.
                <div className="xp-balloon-links">
                    Get Started:
                    <a onClick={() => { onOpenWindow({ title: 'About Me', content: 'about' }); onClose(); }}>About Me</a> |
                    <a onClick={() => { onOpenWindow({ title: 'My Projects', content: 'projects' }); onClose(); }}>My Projects</a>
                </div>
            </div>
        </div>
    );
};

export default BalloonTooltip;
