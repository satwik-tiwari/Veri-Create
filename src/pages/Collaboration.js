import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../App';
import { Users, MessageSquare, CheckCircle, Clock, Edit3, Share2, Bell, Settings } from 'lucide-react';

const Collaboration = () => {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState('team');

  const collaborationStyles = {
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
    tabs: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '3rem',
      flexWrap: 'wrap',
    },
    tab: {
      padding: '1rem 2rem',
      background: 'transparent',
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      color: colors.text,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    activeTab: {
      background: colors.gradient,
      color: 'white',
      borderColor: 'transparent',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    teamCard: {
      background: colors.cardGradient,
      padding: '2rem',
      borderRadius: '20px',
      border: `1px solid ${colors.border}`,
      backdropFilter: 'blur(10px)',
    },
    member: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      background: colors.surface,
      borderRadius: '12px',
      marginBottom: '1rem',
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: colors.gradient,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
  };

  const teamMembers = [
    { name: 'Alex Johnson', role: 'Content Strategist', status: 'online' },
    { name: 'Sarah Chen', role: 'AI Specialist', status: 'online' },
    { name: 'Mike Rodriguez', role: 'Editor', status: 'away' },
    { name: 'Emily Davis', role: 'Social Media Manager', status: 'offline' },
  ];

  const projects = [
    { name: 'Q4 Campaign', progress: 75, members: 4, deadline: '2024-12-15' },
    { name: 'Product Launch', progress: 30, members: 6, deadline: '2024-11-30' },
    { name: 'Brand Refresh', progress: 90, members: 3, deadline: '2024-10-20' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={collaborationStyles.container}
    >
      <div style={collaborationStyles.content}>
        <div style={collaborationStyles.header}>
          <h1 style={collaborationStyles.heading}>
            Team <span style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Collaboration</span>
          </h1>
          <p style={collaborationStyles.subheading}>
            Streamline your content workflow with real-time collaboration tools
          </p>
        </div>

        {/* Tabs */}
        <div style={collaborationStyles.tabs}>
          {['Team', 'Projects', 'Approvals', 'Settings'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.toLowerCase())}
              style={{
                ...collaborationStyles.tab,
                ...(activeTab === tab.toLowerCase() && collaborationStyles.activeTab),
              }}
            >
              <Users size={18} />
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Team Members */}
        <div style={collaborationStyles.teamGrid}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={collaborationStyles.teamCard}
          >
            <h3 style={{ color: colors.text, marginBottom: '1.5rem', fontSize: '1.25rem' }}>
              Team Members
            </h3>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                style={collaborationStyles.member}
              >
                <div style={collaborationStyles.avatar}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div style={{ color: colors.text, fontWeight: '600' }}>{member.name}</div>
                  <div style={{ color: colors.textSecondary, fontSize: '0.9rem' }}>{member.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Projects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={collaborationStyles.teamCard}
          >
            <h3 style={{ color: colors.text, marginBottom: '1.5rem', fontSize: '1.25rem' }}>
              Active Projects
            </h3>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: colors.surface,
                  padding: '1.5rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ color: colors.text, fontWeight: '600' }}>{project.name}</div>
                  <div style={{ color: colors.textSecondary, fontSize: '0.9rem' }}>
                    {project.members} members
                  </div>
                </div>
                <div style={{ background: colors.border, borderRadius: '10px', height: '6px', marginBottom: '0.5rem' }}>
                  <div 
                    style={{ 
                      background: colors.gradient, 
                      height: '100%', 
                      borderRadius: '10px',
                      width: `${project.progress}%`
                    }} 
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: colors.textSecondary, fontSize: '0.9rem' }}>
                  <span>{project.progress}% complete</span>
                  <span>Due: {project.deadline}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Collaboration;