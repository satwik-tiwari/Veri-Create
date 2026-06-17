import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../App';
import GenerateCard from './GenerateCard';
import OutputCard from './OutputCard';

const Dashboard = () => {
  const [generatedContent, setGeneratedContent] = useState(null);
  const { colors } = useTheme();

  const dashboardStyles = {
    container: {
      minHeight: '100vh',
      padding: '120px 2rem 2rem 2rem',
    },
    content: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: '1rem',
    },
    subheading: {
      fontSize: '1.25rem',
      color: colors.textSecondary,
      maxWidth: '600px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
    },
    emptyState: {
      background: colors.cardGradient,
      padding: '4rem 2rem',
      borderRadius: '24px',
      border: `1px solid ${colors.border}`,
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
    },
  };

  const handleGenerate = (content) => {
    setGeneratedContent(content);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={dashboardStyles.container}
    >
      <div style={dashboardStyles.content}>
        <div style={dashboardStyles.header}>
          <h1 style={dashboardStyles.heading}>
            AI Content <span style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Studio</span>
          </h1>
          <p style={dashboardStyles.subheading}>
            Generate text content and AI-powered images with Stable Diffusion integration
          </p>
        </div>

        <div style={dashboardStyles.grid}>
          <GenerateCard onGenerate={handleGenerate} />
          
          <div>
            {generatedContent ? (
              <OutputCard content={generatedContent} />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={dashboardStyles.emptyState}
              >
                <div style={{ width: '80px', height: '80px', background: colors.gradient, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{ width: '40px', height: '40px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: colors.text, marginBottom: '1rem' }}>
                  Ready to Create Magic
                </h3>
                <p style={{ color: colors.textSecondary, fontSize: '1.1rem' }}>
                  Generate content and AI images to see the output here. 
                  Your creations will appear in this section with full verification details.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;