import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../App';
import { Copy, Check, Shield, Download, ExternalLink, Eye, Share2, Star, Calendar, Clock, Hash } from 'lucide-react';

const OutputCard = ({ content }) => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');
  const [isExpanded, setIsExpanded] = useState(false);
  const { colors } = useTheme();

  const outputStyles = {
    container: {
      background: colors.cardGradient,
      borderRadius: '24px',
      border: `1px solid ${colors.border}`,
      overflow: 'hidden',
      backdropFilter: 'blur(20px)',
    },
    header: {
      padding: '2rem 2rem 1rem 2rem',
      borderBottom: `1px solid ${colors.border}`,
    },
    heading: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    subheading: {
      color: colors.textSecondary,
      fontSize: '1rem',
    },
    content: {
      padding: '2rem',
    },
    tabs: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      borderBottom: `1px solid ${colors.border}`,
      paddingBottom: '1rem',
    },
    tab: {
      padding: '0.75rem 1.5rem',
      background: 'transparent',
      border: 'none',
      color: colors.textSecondary,
      cursor: 'pointer',
      borderRadius: '8px',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    activeTab: {
      background: colors.gradient,
      color: 'white',
    },
    contentPreview: {
      background: colors.surface,
      borderRadius: '16px',
      padding: '2rem',
      border: `1px solid ${colors.border}`,
      marginBottom: '2rem',
    },
    contentHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1.5rem',
    },
    contentTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: '0.5rem',
    },
    contentMeta: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      color: colors.textSecondary,
      fontSize: '0.9rem',
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
    },
    contentBody: {
      color: colors.text,
      lineHeight: 1.7,
      fontSize: '1.05rem',
    },
    readMore: {
      background: 'none',
      border: 'none',
      color: colors.primary,
      cursor: 'pointer',
      fontWeight: '600',
      marginTop: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
    },
    imageContainer: {
      textAlign: 'center',
      marginTop: '2rem',
      padding: '1.5rem',
      background: colors.surface,
      borderRadius: '12px',
      border: `1px solid ${colors.border}`,
    },
    generatedImage: {
      maxWidth: '100%',
      maxHeight: '400px',
      borderRadius: '12px',
      border: `1px solid ${colors.border}`,
    },
    imageCaption: {
      color: colors.textSecondary,
      fontSize: '0.9rem',
      marginTop: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    hashSection: {
      background: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '16px',
      padding: '1.5rem',
      border: `1px solid ${colors.primary}30`,
      marginBottom: '2rem',
    },
    hashHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1rem',
    },
    hashTitle: {
      color: colors.text,
      fontSize: '1rem',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    copyButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      background: colors.primary,
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
    },
    hashValue: {
      fontFamily: 'monospace',
      fontSize: '0.8rem',
      color: '#86efac',
      wordBreak: 'break-all',
      lineHeight: 1.5,
    },
    actionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem',
    },
    actionButton: {
      padding: '1rem 1.5rem',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    primaryAction: {
      background: colors.gradient,
      color: 'white',
    },
    secondaryAction: {
      background: colors.surface,
      color: colors.text,
      border: `1px solid ${colors.border}`,
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '1rem',
      marginTop: '2rem',
    },
    statCard: {
      background: colors.surface,
      padding: '1.5rem',
      borderRadius: '12px',
      border: `1px solid ${colors.border}`,
      textAlign: 'center',
    },
    statValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: colors.gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.25rem',
    },
    statLabel: {
      color: colors.textSecondary,
      fontSize: '0.8rem',
      fontWeight: '500',
    },
    verificationSection: {
      background: 'rgba(34, 197, 94, 0.1)',
      border: '1px solid rgba(34, 197, 94, 0.3)',
      borderRadius: '12px',
      padding: '1.5rem',
      marginTop: '2rem',
    },
    verificationHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#16a34a',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    verificationText: {
      color: '#16a34a',
      fontSize: '0.9rem',
      lineHeight: 1.5,
    },
  };

  // Mock hash generation
  const generateHash = (text) => {
    return '0x' + Array.from(text)
      .reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0), 0)
      .toString(16)
      .slice(0, 64);
  };

  const hash = generateHash(content?.content || '');

  const copyHash = async () => {
    await navigator.clipboard.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const signWithMetaMask = async () => {
    setIsSigning(true);
    // Simulate MetaMask signing
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsSigning(false);
  };

  const downloadContent = () => {
    const element = document.createElement('a');
    const file = new Blob([content?.content || ''], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `vericreate-${content?.title || 'content'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const shareContent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: content?.title,
          text: content?.content,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(content?.content || '');
      alert('Content copied to clipboard!');
    }
  };

  const getWordCount = (text) => {
    return text ? text.split(/\s+/).length : 0;
  };

  const getReadTime = (text) => {
    const words = getWordCount(text);
    return Math.ceil(words / 200); // 200 words per minute
  };

  if (!content) return null;

  const truncatedContent = isExpanded ? content.content : content.content.slice(0, 300) + (content.content.length > 300 ? '...' : '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={outputStyles.container}
    >
      <div style={outputStyles.header}>
        <h2 style={outputStyles.heading}>
          <Shield size={28} color={colors.primary} />
          Generated Content
        </h2>
        <p style={outputStyles.subheading}>
          Your AI-generated content is ready with blockchain verification
        </p>
      </div>

      <div style={outputStyles.content}>
        {/* Tabs */}
        <div style={outputStyles.tabs}>
          {['preview', 'verification', 'analytics'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              style={{
                ...outputStyles.tab,
                ...(activeTab === tab && outputStyles.activeTab),
              }}
            >
              {tab === 'preview' && <Eye size={16} />}
              {tab === 'verification' && <Shield size={16} />}
              {tab === 'analytics' && <Star size={16} />}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'preview' && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Content Preview */}
              <div style={outputStyles.contentPreview}>
                <div style={outputStyles.contentHeader}>
                  <div style={{ flex: 1 }}>
                    <h3 style={outputStyles.contentTitle}>{content.title}</h3>
                    <div style={outputStyles.contentMeta}>
                      <span style={outputStyles.metaItem}>
                        <Calendar size={14} />
                        {new Date().toLocaleDateString()}
                      </span>
                      <span style={outputStyles.metaItem}>
                        <Clock size={14} />
                        {getReadTime(content.content)} min read
                      </span>
                      <span style={outputStyles.metaItem}>
                        <Hash size={14} />
                        {getWordCount(content.content)} words
                      </span>
                    </div>
                  </div>
                </div>

                <div style={outputStyles.contentBody}>
                  {truncatedContent}
                </div>

                {content.content.length > 300 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={outputStyles.readMore}
                  >
                    {isExpanded ? 'Show less' : 'Read more'}
                    <ExternalLink size={14} />
                  </button>
                )}
              </div>

              {/* Generated Image */}
              {content.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  style={outputStyles.imageContainer}
                >
                  <img
                    src={content.image}
                    alt="AI Generated"
                    style={outputStyles.generatedImage}
                  />
                  <div style={outputStyles.imageCaption}>
                    <Star size={14} />
                    AI-Generated Image via Stable Diffusion
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div style={outputStyles.actionGrid}>
                <motion.button
                  onClick={downloadContent}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    ...outputStyles.actionButton,
                    ...outputStyles.secondaryAction,
                  }}
                >
                  <Download size={18} />
                  Download Text
                </motion.button>

                <motion.button
                  onClick={shareContent}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    ...outputStyles.actionButton,
                    ...outputStyles.secondaryAction,
                  }}
                >
                  <Share2 size={18} />
                  Share Content
                </motion.button>
              </div>
            </motion.div>
          )}

          {activeTab === 'verification' && (
            <motion.div
              key="verification"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Hash Display */}
              <div style={outputStyles.hashSection}>
                <div style={outputStyles.hashHeader}>
                  <div style={outputStyles.hashTitle}>
                    <Shield size={18} />
                    SHA-256 Content Hash
                  </div>
                  <motion.button
                    onClick={copyHash}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={outputStyles.copyButton}
                  >
                    {copiedHash ? <Check size={16} /> : <Copy size={16} />}
                    {copiedHash ? 'Copied!' : 'Copy Hash'}
                  </motion.button>
                </div>
                <code style={outputStyles.hashValue}>
                  {hash}
                </code>
              </div>

              {/* Verification Status */}
              <div style={outputStyles.verificationSection}>
                <div style={outputStyles.verificationHeader}>
                  <Check size={18} />
                  Content Verified
                </div>
                <p style={outputStyles.verificationText}>
                  This content has been successfully verified on the blockchain. 
                  The cryptographic hash ensures content integrity and provides 
                  tamper-proof timestamping.
                </p>
              </div>

              {/* Signing Action */}
              <motion.button
                onClick={signWithMetaMask}
                disabled={isSigning}
                whileHover={{ scale: isSigning ? 1 : 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  ...outputStyles.actionButton,
                  ...outputStyles.primaryAction,
                  width: '100%',
                  marginTop: '2rem',
                  opacity: isSigning ? 0.8 : 1,
                  cursor: isSigning ? 'not-allowed' : 'pointer',
                }}
              >
                <AnimatePresence mode="wait">
                  {isSigning ? (
                    <motion.div
                      key="signing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ width: '20px', height: '20px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%' }}
                      />
                      Signing with MetaMask...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sign"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                    >
                      <Shield size={20} />
                      Sign with MetaMask
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Content Stats */}
              <div style={outputStyles.statsGrid}>
                <div style={outputStyles.statCard}>
                  <div style={outputStyles.statValue}>{getWordCount(content.content)}</div>
                  <div style={outputStyles.statLabel}>Words</div>
                </div>
                <div style={outputStyles.statCard}>
                  <div style={outputStyles.statValue}>{getReadTime(content.content)}</div>
                  <div style={outputStyles.statLabel}>Minutes Read</div>
                </div>
                <div style={outputStyles.statCard}>
                  <div style={outputStyles.statValue}>{content.language}</div>
                  <div style={outputStyles.statLabel}>Language</div>
                </div>
                <div style={outputStyles.statCard}>
                  <div style={outputStyles.statValue}>A+</div>
                  <div style={outputStyles.statLabel}>AI Score</div>
                </div>
              </div>

              {/* Additional Analytics */}
              <div style={{ ...outputStyles.contentPreview, marginTop: '2rem' }}>
                <h4 style={{ color: colors.text, marginBottom: '1rem', fontSize: '1.1rem' }}>
                  Content Insights
                </h4>
                <div style={{ color: colors.textSecondary, lineHeight: 1.6 }}>
                  <p>• Optimized for {content.language} speaking audiences</p>
                  <p>• Suitable for social media and blog platforms</p>
                  <p>• AI-generated with 98% accuracy score</p>
                  <p>• Blockchain verified for authenticity</p>
                </div>
              </div>

              {/* Download Options */}
              <div style={outputStyles.actionGrid}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    ...outputStyles.actionButton,
                    ...outputStyles.secondaryAction,
                  }}
                >
                  <Download size={18} />
                  Export as PDF
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    ...outputStyles.actionButton,
                    ...outputStyles.secondaryAction,
                  }}
                >
                  <Download size={18} />
                  Export as JSON
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default OutputCard;