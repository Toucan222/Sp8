import React, { useState } from 'react';
import { askDeepseek } from '../utils/deepseeksApi';
import { useToast } from '../components/ToastContext';
import { useAnalytics } from '../analytics/AnalyticsContext';
import './CaptionSpinnerStyles.scss';

export default function CaptionSpinner() {
  const [caption, setCaption] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('all');
  const { showToast } = useToast();
  const { trackEvent } = useAnalytics();

  const styles = {
    funny: '😂 Funny',
    edgy: '🔥 Edgy',
    minimal: '✨ Minimal',
    motivational: '💪 Motivational',
    sarcastic: '😏 Sarcastic'
  };

  const handleSpin = async () => {
    if (!caption.trim()) {
      showToast('Please enter a caption first!');
      return;
    }

    setLoading(true);
    trackEvent('caption_spinner_used', { style: selectedStyle });

    try {
      const stylePrompt = selectedStyle === 'all' 
        ? 'funny, edgy, minimal, motivational, and sarcastic' 
        : styles[selectedStyle].split(' ')[1].toLowerCase();

      const prompt = `Rewrite this caption in ${stylePrompt} style(s). Make each variation unique and engaging for social media:

Original: "${caption}"

Format each variation with the style name as a header, followed by the caption. Keep them short and impactful.`;

      const response = await askDeepseek(prompt);
      const variations = response
        .split('\n\n')
        .filter(v => v.trim())
        .map(v => v.trim());

      setResults(variations);
      showToast('Captions generated! 📝');
    } catch (err) {
      console.error(err);
      showToast('Error generating captions. Please try again.');
      setResults(["Error generating variations."]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    const cleanText = text.replace(/^[^:]+:\s*/, ''); // Remove style label
    navigator.clipboard.writeText(cleanText);
    showToast('Caption copied! 📋');
    trackEvent('caption_copied');
  };

  return (
    <div className="caption-spinner">
      <div className="input-section">
        <label htmlFor="caption">Enter Your Caption</label>
        <textarea
          id="caption"
          rows="3"
          placeholder="Type your caption here and we'll add some flavor..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          disabled={loading}
        />

        <div className="style-selector">
          <label>Choose Style:</label>
          <div className="style-buttons">
            <button
              className={`style-button ${selectedStyle === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedStyle('all')}
            >
              🎲 All Styles
            </button>
            {Object.entries(styles).map(([key, label]) => (
              <button
                key={key}
                className={`style-button ${selectedStyle === key ? 'active' : ''}`}
                onClick={() => setSelectedStyle(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <button 
          className="spin-button" 
          onClick={handleSpin}
          disabled={loading}
        >
          {loading ? 'Spinning... 🔄' : 'Spin Captions 🎯'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="results-section">
          <h4>Your Caption Variations:</h4>
          <div className="variations-list">
            {results.map((variation, idx) => (
              <div 
                key={idx} 
                className="variation-item"
                onClick={() => copyToClipboard(variation)}
              >
                {variation}
                <span className="copy-hint">Click to copy</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
