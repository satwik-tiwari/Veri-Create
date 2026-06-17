import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Wallet, Shield, Download, Upload } from 'lucide-react';

const Profile = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const pageStyles = {
    container: {
      minHeight: '100vh',
      paddingTop: '5rem',
      paddingBottom: '4rem',
    },
    content: {
      maxWidth: '64rem',
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
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '2rem',
    },
    card: {
      background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
      padding: '1px',
      borderRadius: '1rem',
    },
    cardContent: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
    },
    statCard: {
      textAlign: 'center',
      padding: '1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '0.75rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    button: {
      width: '100%',
      padding: '1rem',
      borderRadius: '0.75rem',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    quickAction: {
      width: '100%',
      textAlign: 'left',
      padding: '0.75rem',
      background: 'transparent',
      borderRadius: '0.5rem',
      color: '#d1d5db',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
  };

  const stats = [
    { label: 'Content Generated', value: '47', icon: Download },
    { label: 'Content Signed', value: '32', icon: Shield },
    { label: 'Platforms Used', value: '6', icon: Upload },
  ];

  const quickActions = [
    { label: 'Generate New Content', icon: Download },
    { label: 'View Signed Items', icon: Shield },
    { label: 'Export History', icon: Upload },
  ];

  const recentActivity = [
    { action: 'Generated', item: 'Summer Campaign', time: '2 hours ago' },
    { action: 'Signed', item: 'Product Launch', time: '1 day ago' },
    { action: 'Generated', item: 'Weekly Posts', time: '2 days ago' },
  ];

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
            Your <span style={{ background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Profile</span>
          </h1>
          <p style={pageStyles.subheading}>
            Manage your account and connected wallets
          </p>
        </motion.div>

        <div style={pageStyles.grid}>
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* User Info */}
            <div style={pageStyles.card}>
              <div style={pageStyles.cardContent}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{ width: '5rem', height: '5rem', background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <User size={32} color="white" />
                  </motion.div>
                  <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Welcome, Astha Singh</h2>
                    <p style={{ color: '#d1d5db' }}>Premium Member</p>
                  </div>
                </div>

                {/* Stats */}
                <div style={pageStyles.statsGrid}>
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      style={pageStyles.statCard}
                    >
                      <stat.icon size={32} color="#d8b4fe" style={{ margin: '0 auto 0.5rem' }} />
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{stat.value}</div>
                      <div style={{ fontSize: '0.875rem', color: '#d1d5db' }}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wallet Section */}
            <div style={pageStyles.card}>
              <div style={pageStyles.cardContent}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Wallet size={20} />
                  Wallet Connection
                </h3>
                
                {isWalletConnected ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                  >
                    <div style={{ background: 'rgba(34, 197, 94, 0.2)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '0.75rem', padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ color: '#86efac', fontWeight: 600 }}>Connected</div>
                          <div style={{ fontSize: '0.875rem', color: '#d1d5db', marginTop: '0.25rem' }}>
                            0x742d35Cc6634C0532925a3b8D...
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsWalletConnected(false)}
                          style={{
                            padding: '0.5rem 1rem',
                            background: '#ef4444',
                            borderRadius: '0.5rem',
                            color: 'white',
                            fontSize: '0.875rem',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          Disconnect
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsWalletConnected(true)}
                    style={{
                      ...pageStyles.button,
                      background: 'linear-gradient(45deg, #f97316, #eab308)',
                      color: 'white',
                    }}
                  >
                    <Wallet size={20} />
                    Connect MetaMask Wallet
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Quick Actions */}
            <div style={pageStyles.card}>
              <div style={pageStyles.cardContent}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Quick Actions</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      whileHover={{ x: 5, background: 'rgba(255, 255, 255, 0.1)' }}
                      style={pageStyles.quickAction}
                    >
                      <action.icon size={16} />
                      {action.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div style={pageStyles.card}>
              <div style={pageStyles.cardContent}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Recent Activity</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}
                    >
                      <div>
                        <span style={{ color: 'white' }}>{activity.action}</span>
                        <span style={{ color: '#9ca3af' }}> {activity.item}</span>
                      </div>
                      <span style={{ color: '#6b7280' }}>{activity.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;