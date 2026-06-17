import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Sun, Moon, Menu, X, Zap, Shield, Globe, BarChart3 } from 'lucide-react';
import { useTheme } from '../App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { colors, isDark, toggleTheme } = useTheme();

  const navStyles = {
    navbar: {
      background: `rgba(30, 30, 46, ${isDark ? '0.9' : '0.95'})`,
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${colors.border}`,
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.5s ease',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    navContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80px',
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      textDecoration: 'none',
    },
    logoIcon: {
      background: colors.gradient,
      borderRadius: '12px',
      padding: '10px',
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: colors.gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    navItems: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    navLink: {
      color: colors.text,
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '1rem',
      padding: '0.75rem 1.5rem',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    activeNavLink: {
      background: colors.gradient,
      color: 'white',
      boxShadow: `0 8px 32px ${colors.primary}40`,
    },
    themeToggle: {
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      color: colors.text,
      cursor: 'pointer',
      padding: '0.75rem',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: colors.surface,
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${colors.border}`,
      padding: '2rem',
    },
    mobileNavItems: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
  };

  const navItems = [
    { name: 'Home', path: '/', icon: Zap },
    { name: 'Create', path: '/dashboard', icon: Brain },
    { name: 'Analytics', path: '/history', icon: BarChart3 },
    { name: 'Profile', path: '/profile', icon: Globe },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={navStyles.navbar}
    >
      <div style={navStyles.container}>
        <div style={navStyles.navContent}>
          {/* Logo */}
          <div style={navStyles.logoSection}>
            <Link to="/" style={navStyles.logo}>
              <div style={navStyles.logoIcon}>
                <Brain size={28} color="white" />
              </div>
              <span style={navStyles.logoText}>VeriCreate</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'none', alignItems: 'center', gap: '2rem' }}>
            <div style={navStyles.navItems}>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item.path}
                      style={{
                        ...navStyles.navLink,
                        ...(isActive && navStyles.activeNavLink),
                      }}
                    >
                      <Icon size={18} />
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              style={navStyles.themeToggle}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div style={{ display: 'block' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                color: colors.text,
                cursor: 'pointer',
                padding: '0.75rem',
                borderRadius: '12px',
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={navStyles.mobileMenu}
          >
            <div style={navStyles.mobileNavItems}>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div key={item.name} whileHover={{ x: 5 }}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      style={{
                        ...navStyles.navLink,
                        ...(isActive && navStyles.activeNavLink),
                      }}
                    >
                      <Icon size={18} />
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                style={{
                  ...navStyles.themeToggle,
                  justifyContent: 'flex-start',
                  padding: '1rem 1.5rem',
                }}
              >
                {isDark ? <Sun size={18} style={{ marginRight: '0.75rem' }} /> : <Moon size={18} style={{ marginRight: '0.75rem' }} />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;