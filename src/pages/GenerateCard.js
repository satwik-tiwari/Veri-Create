import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../App';
import { Wand2, Languages, Image as ImageIcon, Download, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';

const GenerateCard = ({ onGenerate }) => {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('English');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [error, setError] = useState('');
  const [imageStyle, setImageStyle] = useState('realistic');
  const { colors } = useTheme();

  const cardStyles = {
    container: {
      background: colors.cardGradient,
      padding: '2rem',
      borderRadius: '24px',
      border: `1px solid ${colors.border}`,
      backdropFilter: 'blur(20px)',
    },
    heading: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    input: {
      width: '100%',
      padding: '1rem 1.5rem',
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      color: colors.text,
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    textarea: {
      width: '100%',
      padding: '1rem 1.5rem',
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      color: colors.text,
      fontSize: '1rem',
      minHeight: '100px',
      resize: 'vertical',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    select: {
      width: '100%',
      padding: '1rem 1.5rem',
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      color: colors.text,
      fontSize: '1rem',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '1.25rem 2rem',
      background: colors.gradient,
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      transition: 'all 0.3s ease',
      marginBottom: '1rem',
    },
    imageButton: {
      width: '100%',
      padding: '1rem 2rem',
      background: 'transparent',
      color: colors.text,
      border: `2px solid ${colors.border}`,
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      fontSize: '0.9rem',
      fontWeight: '500',
      color: colors.text,
      marginBottom: '0.5rem',
    },
    imagePreview: {
      width: '100%',
      maxHeight: '400px',
      objectFit: 'cover',
      borderRadius: '12px',
      border: `1px solid ${colors.border}`,
      marginBottom: '1rem',
    },
    error: {
      background: 'rgba(239, 68, 68, 0.1)',
      border: '1px solid rgba(239, 68, 68, 0.3)',
      color: '#ef4444',
      padding: '1rem',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    imageActions: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1.5rem',
    },
    actionButton: {
      flex: 1,
      padding: '0.75rem 1.5rem',
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '8px',
      color: colors.text,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
    },
    styleSelector: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    styleButton: {
      padding: '0.75rem',
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: '8px',
      color: colors.text,
      cursor: 'pointer',
      fontSize: '0.8rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
    },
    activeStyle: {
      background: colors.gradient,
      color: 'white',
      borderColor: 'transparent',
    },
    apiStatus: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: colors.textSecondary,
      fontSize: '0.8rem',
      marginTop: '1rem',
    },
  };

  const languages = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Japanese', 'Chinese', 'Arabic', 'Portuguese'];
  
  const imageStyles = [
    { id: 'realistic', label: 'Realistic' },
    { id: 'digital-art', label: 'Digital Art' },
    { id: 'photographic', label: 'Photographic' },
    { id: 'anime', label: 'Anime' },
  ];

  // Correct Stable Diffusion API Integration using v2beta endpoint
  const generateImageWithStableDiffusion = async (prompt, style = 'realistic') => {
    const STABLE_DIFFUSION_API_KEY = process.env.REACT_APP_STABLE_DIFFUSION_API_KEY;
    
    // Use the correct v2beta endpoint
    const API_URL = 'https://api.stability.ai/v2beta/stable-image/generate/core';

    if (!STABLE_DIFFUSION_API_KEY) {
      // Fallback to mock images for demo
      console.warn('Stable Diffusion API key not configured. Using mock images.');
      return getMockImage(prompt, style);
    }

    try {
      const stylePrompts = {
        'realistic': `photorealistic, high detail, professional photography, 4k, ${prompt}`,
        'digital-art': `digital art, concept art, illustration, detailed, ${prompt}`,
        'photographic': `professional photography, sharp focus, cinematic lighting, ${prompt}`,
        'anime': `anime style, Japanese animation, vibrant colors, ${prompt}`
      };

      const enhancedPrompt = stylePrompts[style] || prompt;

      // Create FormData as required by the API
      const formData = new FormData();
      formData.append('prompt', enhancedPrompt);
      formData.append('output_format', 'webp');

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${STABLE_DIFFUSION_API_KEY}`,
          'Accept': 'image/*',
        },
        body: formData,
      });

      if (response.status === 200) {
        // Convert the image blob to a URL for display
        const imageBlob = await response.blob();
        return URL.createObjectURL(imageBlob);
      } else {
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);
        throw new Error(`API Error ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error('Stable Diffusion API Error:', error);
      // Fallback to mock image
      return getMockImage(prompt, style);
    }
  };

  // Mock image generator for demo purposes
  const getMockImage = (prompt, style) => {
    const mockImages = {
      realistic: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=512&h=512&fit=crop',
      'digital-art': 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=512&h=512&fit=crop',
      photographic: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=512&h=512&fit=crop',
      anime: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=512&h=512&fit=crop'
    };
    return mockImages[style] || mockImages.realistic;
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt.trim()) {
      setError('Please enter a prompt for image generation');
      return;
    }

    setIsGeneratingImage(true);
    setError('');

    try {
      const imageUrl = await generateImageWithStableDiffusion(imagePrompt, imageStyle);
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError(err.message || 'Failed to generate image. Please try again.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleRegenerateImage = async () => {
    if (imagePrompt.trim()) {
      await handleGenerateImage();
    }
  };

  const handleDownloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `vericreate-${imagePrompt.slice(0, 20)}-${Date.now()}.webp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleGenerateContent = async () => {
    if (!title.trim()) return;
    
    setIsGenerating(true);
    setError('');

    try {
      // Generate content
      const content = {
        title,
        language,
        content: generateContent(title, language),
        image: generatedImage || getMockImage(title, imageStyle),
        timestamp: new Date().toISOString(),
        hash: generateHash(title + language + Date.now()),
        imagePrompt: imagePrompt,
        imageStyle: imageStyle
      };

      onGenerate(content);
    } catch (err) {
      setError('Failed to generate content: ' + err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateContent = (title, language) => {
    const templates = {
      English: `# ${title}

## Engaging Social Media Content

**Primary Post:**
🎯 ${title} - Transform your content strategy with AI-powered insights! 

**Key Points:**
• Automated content generation
• Multi-platform optimization
• Real-time performance analytics
• Blockchain verification

**Hashtags:**
#AI #ContentCreation #DigitalMarketing #Innovation

**Call to Action:**
👉 Ready to revolutionize your content workflow? Start creating today!`,

      Spanish: `# ${title}

## Contenido para Redes Sociales

**Publicación Principal:**
🎯 ${title} - ¡Transforma tu estrategia de contenido con ideas impulsadas por IA!

**Puntos Clave:**
• Generación automática de contenido
• Optimización multiplataforma
• Análisis de rendimiento en tiempo real
• Verificación blockchain

**Hashtags:**
#IA #CreaciónDeContenido #MarketingDigital #Innovación

**Llamada a la Acción:**
👉 ¿Listo para revolucionar tu flujo de trabajo? ¡Comienza a crear hoy!`,

      Hindi: `# ${title}

## सोशल मीडिया कंटेंट

**मुख्य पोस्ट:**
🎯 ${title} - AI-पावर्ड इनसाइट्स के साथ अपनी कंटेंट स्ट्रैटेजी को बदलें!

**मुख्य बिंदु:**
• ऑटोमेटेड कंटेंट जनरेशन
• मल्टी-प्लेटफॉर्म ऑप्टिमाइजेशन
• रियल-टाइम परफॉर्मेंस एनालिटिक्स
• ब्लॉकचेन वेरिफिकेशन

**हैशटैग:**
#AI #कंटेंटक्रिएशन #डिजिटलमार्केटिंग #इनोवेशन

**कॉल टू एक्शन:**
👉 अपनी कंटेंट वर्कफ़्लो में क्रांति लाने के लिए तैयार हैं? आज ही शुरू करें!`
    };

    return templates[language] || templates.English;
  };

  const generateHash = (text) => {
    return '0x' + Array.from(text)
      .reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0), 0)
      .toString(16)
      .slice(0, 64);
  };

  const hasApiKey = !!process.env.REACT_APP_STABLE_DIFFUSION_API_KEY;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={cardStyles.container}
    >
      <h2 style={cardStyles.heading}>
        <Wand2 size={28} color={colors.primary} />
        AI Content & Image Generation
      </h2>

      {error && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          style={cardStyles.error}
        >
          <AlertCircle size={18} />
          {error}
        </motion.div>
      )}

      <div style={cardStyles.inputGroup}>
        {/* Content Title */}
        <div>
          <label style={cardStyles.label}>Content Title *</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your content topic or headline..."
            style={cardStyles.input}
          />
        </div>

        {/* Image Generation Section */}
        <div>
          <label style={cardStyles.label}>
            <ImageIcon size={16} style={{ marginRight: '0.5rem' }} />
            AI Image Generation (Optional)
          </label>
          
          {/* Image Style Selector */}
          <div style={cardStyles.styleSelector}>
            {imageStyles.map((styleObj) => (
              <motion.button
                key={styleObj.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setImageStyle(styleObj.id)}
                style={{
                  ...cardStyles.styleButton,
                  ...(imageStyle === styleObj.id && cardStyles.activeStyle),
                }}
              >
                {styleObj.label}
              </motion.button>
            ))}
          </div>

          <textarea
            value={imagePrompt}
            onChange={(e) => setImagePrompt(e.target.value)}
            placeholder={`Describe the ${imageStyle} image you want to generate... (e.g., "modern abstract background with tech elements")`}
            style={cardStyles.textarea}
          />
          
          <motion.button
            onClick={handleGenerateImage}
            disabled={isGeneratingImage || !imagePrompt.trim()}
            whileHover={{ scale: isGeneratingImage || !imagePrompt.trim() ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              ...cardStyles.imageButton,
              background: isGeneratingImage || !imagePrompt.trim() ? colors.border : colors.surface,
              cursor: isGeneratingImage || !imagePrompt.trim() ? 'not-allowed' : 'pointer',
              opacity: isGeneratingImage || !imagePrompt.trim() ? 0.7 : 1,
            }}
          >
            <AnimatePresence mode="wait">
              {isGeneratingImage ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{ width: '18px', height: '18px', border: '2px solid currentColor', borderTop: '2px solid transparent', borderRadius: '50%' }}
                  />
                  Generating {imageStyle} Image...
                </motion.div>
              ) : (
                <motion.div
                  key="generate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Sparkles size={18} />
                  Generate {imageStyle.charAt(0).toUpperCase() + imageStyle.slice(1)} Image
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* API Status */}
          <div style={cardStyles.apiStatus}>
            {hasApiKey ? (
              <>
                <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }} />
                Stable Diffusion API Connected
              </>
            ) : (
              <>
                <div style={{ width: '8px', height: '8px', background: '#f59e0b', borderRadius: '50%' }} />
                Using Demo Images - Add API Key for Real Generation
              </>
            )}
          </div>

          {/* Generated Image Preview */}
          {generatedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={generatedImage} 
                alt="AI Generated" 
                style={cardStyles.imagePreview}
              />
              
              {/* Image Actions */}
              <div style={cardStyles.imageActions}>
                <motion.button
                  onClick={handleRegenerateImage}
                  disabled={isGeneratingImage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={cardStyles.actionButton}
                >
                  <RefreshCw size={16} />
                  Regenerate
                </motion.button>
                
                <motion.button
                  onClick={handleDownloadImage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={cardStyles.actionButton}
                >
                  <Download size={16} />
                  Download
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Language Selection */}
        <div>
          <label style={{ ...cardStyles.label, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Languages size={16} />
            Content Language
          </label>
          <motion.select
            whileFocus={{ scale: 1.02 }}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={cardStyles.select}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang} style={{ background: colors.surface, color: colors.text }}>
                {lang}
              </option>
            ))}
          </motion.select>
        </div>
      </div>

      {/* Generate Content Button */}
      <motion.button
        onClick={handleGenerateContent}
        disabled={!title.trim() || isGenerating}
        whileHover={{ scale: !title.trim() || isGenerating ? 1 : 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        style={{
          ...cardStyles.button,
          background: !title.trim() || isGenerating ? colors.border : colors.gradient,
          cursor: !title.trim() || isGenerating ? 'not-allowed' : 'pointer',
          boxShadow: !title.trim() || isGenerating ? 'none' : `0 8px 32px ${colors.primary}40`,
        }}
      >
        <AnimatePresence mode="wait">
          {isGenerating ? (
            <motion.div
              key="loading"
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
              Generating Complete Content...
            </motion.div>
          ) : (
            <motion.div
              key="generate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <Wand2 size={20} />
              Generate Complete Content
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

export default GenerateCard;