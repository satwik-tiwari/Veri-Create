import React from 'react';
import { motion } from 'framer-motion';
import HistoryTable from '../components/HistoryTable';

const History = () => {
  const pageStyles = {
    container: {
      minHeight: '100vh',
      paddingTop: '5rem',
      paddingBottom: '4rem',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem',
    },
    subheading: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      maxWidth: '32rem',
      margin: '0 auto',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={pageStyles.container}
    >
      <div style={pageStyles.content}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={pageStyles.header}
        >
          <h1 style={pageStyles.heading}>
            Content <span style={{ background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>History</span>
          </h1>
          <p style={pageStyles.subheading}>
            Track all your generated content and its verification status
          </p>
        </motion.div>

        {/* History Table */}
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <HistoryTable />
        </div>
      </div>
    </motion.div>
  );
};

export default History;