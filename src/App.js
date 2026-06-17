import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Profile from './pages/Profile';
import Footer from './components/Footer';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      // Premium purple/blue gradient theme
      background: isDark 
        ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      surface: isDark 
        ? 'rgba(30, 30, 46, 0.9)'
        : 'rgba(255, 255, 255, 0.95)',
      primary: isDark ? '#6366f1' : '#4f46e5',
      secondary: isDark ? '#8b5cf6' : '#7c3aed',
      accent: isDark ? '#ec4899' : '#db2777',
      text: isDark ? '#f8fafc' : '#1e293b',
      textSecondary: isDark ? '#cbd5e1' : '#475569',
      border: isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(79, 70, 229, 0.2)',
      gradient: isDark 
        ? 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)'
        : 'linear-gradient(135deg, #4f46e5, #7c3aed, #db2777)',
      cardGradient: isDark
        ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))'
        : 'linear-gradient(135deg, rgba(79, 70, 229, 0.05), rgba(124, 58, 237, 0.05))',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemedApp />
      </Router>
    </ThemeProvider>
  );
}

const ThemedApp = () => {
  const { colors } = useTheme();

  const appStyles = {
    minHeight: '100vh',
    background: colors.background,
    transition: 'all 0.5s ease',
    position: 'relative',
  };

  return (
    <div style={appStyles}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, ${colors.primary}15 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${colors.secondary}15 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, ${colors.accent}10 0%, transparent 50%)
        `,
        zIndex: 0,
      }} />
      
      <style>
        {`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transition: all 0.3s ease;
          }
        `}
      </style>
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};

export default App;