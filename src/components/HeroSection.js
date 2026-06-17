import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';
import { Brain, Zap, Shield, Globe, TrendingUp, Users, Target, Clock, Play, Star, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const { colors } = useTheme();

  const heroStyles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 2rem 2rem 2rem',
      overflow: 'hidden',
    },
    content: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '4rem',
      alignItems: 'center',
    },
    textContent: {
      textAlign: 'center',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: colors.gradient,
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      fontSize: '0.875rem',
      fontWeight: '600',
      marginBottom: '2rem',
      boxShadow: `0 8px 32px ${colors.primary}40`,
    },
    heading: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: colors.text,
      lineHeight: 1.1,
      marginBottom: '1.5rem',
    },
    highlight: {
      background: colors.gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subheading: {
      fontSize: '1.25rem',
      color: colors.textSecondary,
      lineHeight: 1.6,
      marginBottom: '2.5rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '4rem',
    },
    primaryButton: {
      background: colors.gradient,
      color: 'white',
      padding: '1.25rem 2.5rem',
      borderRadius: '16px',
      fontWeight: '600',
      fontSize: '1.1rem',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      transition: 'all 0.3s ease',
      boxShadow: `0 8px 32px ${colors.primary}40`,
    },
    secondaryButton: {
      background: colors.surface,
      color: colors.text,
      padding: '1.25rem 2.5rem',
      borderRadius: '16px',
      fontWeight: '600',
      fontSize: '1.1rem',
      textDecoration: 'none',
      border: `2px solid ${colors.border}`,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      transition: 'all 0.3s ease',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    featureCard: {
      background: colors.cardGradient,
      padding: '2.5rem 2rem',
      borderRadius: '20px',
      border: `1px solid ${colors.border}`,
      textAlign: 'center',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem',
      marginTop: '4rem',
      padding: '2rem',
      background: colors.cardGradient,
      borderRadius: '20px',
      border: `1px solid ${colors.border}`,
    },
    statItem: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: colors.gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.5rem',
    },
    statLabel: {
      color: colors.textSecondary,
      fontSize: '1rem',
      fontWeight: '500',
    },
    trustedBy: {
      textAlign: 'center',
      marginTop: '4rem',
      padding: '2rem',
    },
    trustedTitle: {
      color: colors.textSecondary,
      fontSize: '1rem',
      fontWeight: '500',
      marginBottom: '1.5rem',
    },
    logos: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '3rem',
      flexWrap: 'wrap',
    },
    logoItem: {
      color: colors.textSecondary,
      fontSize: '1.25rem',
      fontWeight: '600',
      opacity: 0.7,
    },
  };

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Generation',
      description: 'Create high-quality content in seconds using advanced AI models'
    },
    {
      icon: Shield,
      title: 'Blockchain Verification',
      description: 'Prove content authenticity with immutable blockchain timestamps'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Support',
      description: 'Optimize content for all social media and publishing platforms'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless workflow management for enterprise teams'
    },
  ];

  const stats = [
    { number: '10x', label: 'Faster Creation' },
    { number: '50+', label: 'Languages' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
  ];

  const trustedCompanies = ['MediaCorp', 'EduTech Global', 'AdVenture', 'NewsNetwork', 'LearnSphere'];

  return (
    <div style={heroStyles.container}>
      <div style={heroStyles.content}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          style={heroStyles.grid}
        >
          <div style={heroStyles.textContent}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div style={heroStyles.badge}>
                <Zap size={18} />
                Enterprise AI Content Platform
              </div>
            </motion.div>

            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={heroStyles.heading}
            >
              End Content Bottlenecks with{' '}
              <span style={heroStyles.highlight}>Intelligent Automation</span>
            </motion.h1>

            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={heroStyles.subheading}
            >
              Transform your content pipeline with AI-powered generation, multi-language support, 
              and blockchain verification. Scale production without compromising quality or authenticity.
            </motion.p>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={heroStyles.buttonGroup}
            >
              <Link to="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={heroStyles.primaryButton}
                >
                  <Brain size={22} />
                  Start Creating Free
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={heroStyles.secondaryButton}
              >
                <Play size={22} />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={heroStyles.statsGrid}
            >
              {stats.map((stat, index) => (
                <div key={index} style={heroStyles.statItem}>
                  <div style={heroStyles.statNumber}>{stat.number}</div>
                  <div style={heroStyles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              style={heroStyles.featuresGrid}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={heroStyles.featureCard}
                >
                  <feature.icon 
                    size={48} 
                    style={{ 
                      color: colors.primary,
                      margin: '0 auto 1.5rem'
                    }} 
                  />
                  <h3 style={{ 
                    color: colors.text, 
                    marginBottom: '1rem', 
                    fontSize: '1.5rem', 
                    fontWeight: '600' 
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ 
                    color: colors.textSecondary, 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Trusted By Section */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              style={heroStyles.trustedBy}
            >
              <div style={heroStyles.trustedTitle}>
                Trusted by leading organizations worldwide
              </div>
              <div style={heroStyles.logos}>
                {trustedCompanies.map((company, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    style={heroStyles.logoItem}
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;