'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import 'motion' from framer-motion
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      {/* Logo or Title */}
      <div className="logo">
        <h1>CharitySite</h1>
      </div>

      {/* Menu Toggle Button for Mobile */}
      <button className="menu-btn" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>

      {/* Navbar Links */}
      <motion.nav
        className={`nav-links ${isOpen ? 'open' : ''}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/donate">Donate</Link>
          </li>
        </ul>
      </motion.nav>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #333;
          color: white;
        }

        .logo h1 {
          margin: 0;
          font-size: 1.5rem;
        }

        .menu-btn {
          display: block;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }

        .menu-icon::before {
          content: '☰';
        }

        .nav-links {
          display: none;
        }

        .nav-links.open {
          display: block;
        }

        .nav-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav-links li {
          margin: 1rem 0;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
        }

        @media (min-width: 768px) {
          .menu-btn {
            display: none;
          }

          .nav-links {
            display: flex;
            justify-content: space-around;
            width: 100%;
          }

          .nav-links ul {
            flex-direction: row;
          }

          .nav-links li {
            margin: 0 1.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;