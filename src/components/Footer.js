import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../App';
import { Brain, Twitter, Linkedin, Github, Mail, ArrowRight, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { colors } = useTheme();

  const footerStyles = {
    footer: {
      background: colors.surface,
      borderTop: `1px solid ${colors.border}`,
      marginTop: '6rem',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '4rem 2rem 2rem 2rem',
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '3rem',
      marginBottom: '3rem',
    },
    brandSection: {
      marginBottom: '2rem',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      textDecoration: 'none',
      marginBottom: '1.5rem',
    },
    logoText: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      background: colors.gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    description: {
      color: colors.textSecondary,
      lineHeight: 1.6,
      fontSize: '1.1rem',
      marginBottom: '2rem',
      maxWidth: '400px',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: colors.textSecondary,
      textDecoration: 'none',
    },
    newsletter: {
      background: colors.cardGradient,
      padding: '2rem',
      borderRadius: '16px',
      border: `1px solid ${colors.border}`,
      marginBottom: '2rem',
    },
    newsletterTitle: {
      color: colors.text,
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    newsletterInput: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem',
    },
    input: {
      flex: 1,
      padding: '1rem 1.5rem',
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      color: colors.text,
      fontSize: '1rem',
    },
    newsletterButton: {
      background: colors.gradient,
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontWeight: '600',
    },
    linksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
    },
    linkSection: {
      marginBottom: '2rem',
    },
    sectionTitle: {
      color: colors.text,
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
    },
    linkList: {
      listStyle: 'none',
    },
    link: {
      color: colors.textSecondary,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.75rem',
      fontSize: '1rem',
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem',
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '44px',
      height: '44px',
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      color: colors.text,
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    bottom: {
      borderTop: `1px solid ${colors.border}`,
      paddingTop: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
      textAlign: 'center',
    },
    copyright: {
      color: colors.textSecondary,
      fontSize: '0.9rem',
    },
    legalLinks: {
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    legalLink: {
      color: colors.textSecondary,
      textDecoration: 'none',
      fontSize: '0.9rem',
    },
  };

  const productLinks = [
    { name: 'AI Content Generation', icon: ArrowRight },
    { name: 'Blockchain Verification', icon: ArrowRight },
    { name: 'Multi-language Support', icon: ArrowRight },
    { name: 'Team Collaboration', icon: ArrowRight },
    { name: 'Analytics Dashboard', icon: ArrowRight },
  ];

  const companyLinks = [
    { name: 'About Us', icon: ArrowRight },
    { name: 'Enterprise Solutions', icon: ArrowRight },
    { name: 'Case Studies', icon: ArrowRight },
    { name: 'Careers', icon: ArrowRight },
    { name: 'Press Kit', icon: ArrowRight },
  ];

  const resourceLinks = [
    { name: 'Documentation', icon: ArrowRight },
    { name: 'Help Center', icon: ArrowRight },
    { name: 'API Reference', icon: ArrowRight },
    { name: 'Community Forum', icon: ArrowRight },
    { name: 'Status Page', icon: ArrowRight },
  ];

  const socialLinks = [
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Github, url: '#', label: 'GitHub' },
    { icon: Mail, url: '#', label: 'Email' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      style={footerStyles.footer}
    >
      <div style={footerStyles.container}>
        <div style={footerStyles.mainContent}>
          {/* Brand & Contact Section */}
          <div style={footerStyles.brandSection}>
            <div style={footerStyles.logo}>
              <Brain size={32} style={{ color: colors.primary }} />
              <span style={footerStyles.logoText}>VeriCreate</span>
            </div>
            <p style={footerStyles.description}>
              Transforming content production for media, education, and advertising 
              with enterprise-grade AI automation and blockchain verification.
            </p>
            
            <div style={footerStyles.contactInfo}>
              <a href="tel:+1-555-1234" style={footerStyles.contactItem}>
                <Phone size={18} />
                +1 (555) 123-4567
              </a>
              <a href="mailto:hello@vericreate.com" style={footerStyles.contactItem}>
                <Mail size={18} />
                hello@vericreate.com
              </a>
              <div style={footerStyles.contactItem}>
                <MapPin size={18} />
                San Francisco, CA
              </div>
            </div>

            <div style={footerStyles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.1, background: colors.gradient, color: 'white' }}
                  style={footerStyles.socialLink}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div style={footerStyles.newsletter}>
            <h3 style={footerStyles.newsletterTitle}>Stay Updated</h3>
            <p style={{ color: colors.textSecondary, marginBottom: '1.5rem' }}>
              Get the latest updates on AI content trends and platform features.
            </p>
            <div style={footerStyles.newsletterInput}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={footerStyles.input}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={footerStyles.newsletterButton}
              >
                Subscribe
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>

          {/* Links Grid */}
          <div style={footerStyles.linksGrid}>
            <div style={footerStyles.linkSection}>
              <h3 style={footerStyles.sectionTitle}>Product</h3>
              <ul style={footerStyles.linkList}>
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a 
                      href="#" 
                      whileHover={{ x: 5 }}
                      style={footerStyles.link}
                    >
                      <link.icon size={14} />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={footerStyles.linkSection}>
              <h3 style={footerStyles.sectionTitle}>Company</h3>
              <ul style={footerStyles.linkList}>
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a 
                      href="#" 
                      whileHover={{ x: 5 }}
                      style={footerStyles.link}
                    >
                      <link.icon size={14} />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={footerStyles.linkSection}>
              <h3 style={footerStyles.sectionTitle}>Resources</h3>
              <ul style={footerStyles.linkList}>
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a 
                      href="#" 
                      whileHover={{ x: 5 }}
                      style={footerStyles.link}
                    >
                      <link.icon size={14} />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={footerStyles.bottom}>
          <div style={footerStyles.legalLinks}>
            <a href="#" style={footerStyles.legalLink}>Privacy Policy</a>
            <a href="#" style={footerStyles.legalLink}>Terms of Service</a>
            <a href="#" style={footerStyles.legalLink}>Cookie Policy</a>
            <a href="#" style={footerStyles.legalLink}>Security</a>
          </div>
          <p style={footerStyles.copyright}>
            © 2024 VeriCreate AI. All rights reserved. 
            Revolutionizing content production for enterprises worldwide.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;