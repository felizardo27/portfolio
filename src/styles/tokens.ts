export const tokens = {
  colors: {
    dark: {
      background: '#08090C',
      backgroundAlt: '#0E1116',
      card: '#12161F',
      cardHover: '#181E2A',
      border: '#202635',
      borderHover: '#30394F',
      textPrimary: '#F1F5F9',
      textSecondary: '#94A3B8',
      textMuted: '#64748B',
      accent: {
        blue: '#9D4EDD', // Electric Purple
        blueGlow: 'rgba(157, 78, 221, 0.15)',
        cyan: '#C77DFF', // Cyber Orchid/Lilac
        cyanGlow: 'rgba(199, 125, 255, 0.15)',
        violet: '#7B2CBF', // Deep Royal Violet
        violetGlow: 'rgba(123, 44, 191, 0.15)',
        green: '#10B981',
        greenGlow: 'rgba(16, 185, 129, 0.15)',
      },
      gridColor: 'rgba(255, 255, 255, 0.03)',
    },
    light: {
      background: '#F8FAFC',
      backgroundAlt: '#F1F5F9',
      card: '#FFFFFF',
      cardHover: '#F8FAFC',
      border: '#E2E8F0',
      borderHover: '#CBD5E1',
      textPrimary: '#0F172A',
      textSecondary: '#475569',
      textMuted: '#64748B',
      accent: {
        blue: '#7B2CBF', // Rich Purple
        blueGlow: 'rgba(123, 44, 191, 0.08)',
        cyan: '#9D4EDD', // Mid Purple
        cyanGlow: 'rgba(157, 78, 221, 0.08)',
        violet: '#5A189A', // Deep Velvet Purple
        violetGlow: 'rgba(90, 24, 154, 0.08)',
        green: '#059669',
        greenGlow: 'rgba(5, 150, 105, 0.08)',
      },
      gridColor: 'rgba(0, 0, 0, 0.02)',
    }
  },
  fonts: {
    sans: "'Outfit', 'Inter', system-ui, -apple-system, sans-serif",
    mono: "'Fira Code', 'JetBrains Mono', monospace",
  },
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    md: '1rem',        // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    xxl: '1.5rem',     // 24px
    xxxl: '2rem',      // 32px
    display: '3rem',   // 48px
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  transitions: {
    default: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    glowBlue: '0 0 20px rgba(157, 78, 221, 0.15)',
    glowCyan: '0 0 20px rgba(199, 125, 255, 0.15)',
  }
};
