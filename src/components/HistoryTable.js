import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, XCircle, Clock } from 'lucide-react';

const HistoryTable = () => {
  const tableStyles = {
    container: {
      background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
      padding: '1px',
      borderRadius: '1rem',
    },
    content: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    heading: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1.5rem',
    },
    tableHeader: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '1rem',
      padding: '1rem 1.5rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#d1d5db',
    },
    tableRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '1rem',
      padding: '1rem 1.5rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    viewAllButton: {
      width: '100%',
      padding: '0.75rem',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '0.75rem',
      color: 'white',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1.5rem',
    },
  };

  const historyData = [
    {
      id: 1,
      title: 'Summer Marketing Campaign',
      date: '2024-01-15',
      hash: '0x4a7b9c83e45d29f8b7a6c2d1e...',
      status: 'signed',
    },
    {
      id: 2,
      title: 'Product Launch Announcement',
      date: '2024-01-14',
      hash: '0x8d3e92a47b1c6f5a2e9d8c7b...',
      status: 'pending',
    },
    {
      id: 3,
      title: 'Weekly Newsletter',
      date: '2024-01-13',
      hash: '0x2b5c8a9d7e3f1a4c6b9e8d2a...',
      status: 'signed',
    },
    {
      id: 4,
      title: 'Social Media Posts',
      date: '2024-01-12',
      hash: '0x7e4a9c2b8d6f3a1e5b9c7d8a...',
      status: 'failed',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'signed':
        return <CheckCircle size={20} color="#86efac" />;
      case 'pending':
        return <Clock size={20} color="#fcd34d" />;
      case 'failed':
        return <XCircle size={20} color="#f87171" />;
      default:
        return null;
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'signed':
        return { background: 'rgba(34, 197, 94, 0.2)', color: '#86efac', border: '1px solid rgba(34, 197, 94, 0.3)' };
      case 'pending':
        return { background: 'rgba(251, 191, 36, 0.2)', color: '#fcd34d', border: '1px solid rgba(251, 191, 36, 0.3)' };
      case 'failed':
        return { background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)' };
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={tableStyles.container}
    >
      <div style={tableStyles.content}>
        <h2 style={tableStyles.heading}>Content History</h2>
        
        {/* Table Header */}
        <div style={tableStyles.tableHeader}>
          <div>Title</div>
          <div>Date</div>
          <div>Hash</div>
          <div style={{ textAlign: 'center' }}>Status</div>
        </div>

        {/* Table Rows */}
        {historyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02, 
              background: 'rgba(255, 255, 255, 0.05)' 
            }}
            style={tableStyles.tableRow}
          >
            <div style={{ fontWeight: 500 }}>{item.title}</div>
            <div style={{ color: '#d1d5db' }}>{item.date}</div>
            <div>
              <code style={{ fontSize: '0.75rem', color: '#d8b4fe', fontFamily: 'monospace' }}>
                {item.hash}
              </code>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  ...getStatusStyle(item.status)
                }}
              >
                {getStatusIcon(item.status)}
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </motion.span>
            </div>
          </motion.div>
        ))}

        {/* View All Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={tableStyles.viewAllButton}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.15)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          }}
        >
          <ExternalLink size={18} />
          View All History
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HistoryTable;