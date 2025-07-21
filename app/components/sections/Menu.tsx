'use client';
import React, { useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SiTiktok, SiLine } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export default function SocialButtons() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const socialLinks = [
        {
            icon: <FacebookIcon />,
            href: 'https://www.facebook.com/ExclusiveFurnitureCOLLECTION/',
            bgcolor: '#1877F2',
            hover: '#145dc9',
        },
        {
            icon: <InstagramIcon />,
            href: 'https://www.instagram.com/exclusivefurniture___/',
            bgcolor: '#E4405F',
            hover: '#c0324d',
        },
        {
            icon: <SiLine size={28} color="white" />,
            href: 'https://line.me/ti/p/6ruaUhje6S',
            bgcolor: '#00C300',
            hover: '#00a900',
        },
        {
            icon: <SiTiktok size={28} color="white" />,
            href: 'https://www.tiktok.com/@exclusivefurniture__',
            bgcolor: '#000000',
            hover: '#000000',
        },
        {
            icon: <FaYoutube size={28} color="white" />,
            href: 'https://www.youtube.com/channel/UC5zdKyTUstRkBPEA66Y6k5g',
            bgcolor: '#FF0000',
            hover: '#cc0000',
        },
    ];

    return (
        <div
            style={{
                position: 'fixed',
                top: '75%',
                right: 16,
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                zIndex: 9999,
            }}
        >
            {socialLinks.map((item, index) => (
                <Zoom in={open} key={index}>
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: item.bgcolor,
                            color: 'white',
                            borderRadius: '50%',
                            width: 48,
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            transition: 'background-color 0.3s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = item.hover)}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = item.bgcolor)}
                    >
                        {item.icon}
                    </a>
                </Zoom>
            ))}

            {/* ปุ่มหลัก */}
            <Fab
                color="primary"
                onClick={handleToggle}
                sx={{
                    bgcolor: '#1976d2',
                    '&:hover': { bgcolor: '#115293' },
                }}
            >
                <ArrowCircleUpIcon />
            </Fab>
        </div>
    );
}
