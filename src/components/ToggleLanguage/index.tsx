import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguageStore } from '../../context/useLanguageStore';
import { StyledToggle, ActiveText, MutedText } from './styles';

export const ToggleLanguage: React.FC = () => {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <StyledToggle onClick={toggleLanguage} aria-label="Toggle language locale">
      <Globe size={13} />
      <ActiveText>{language.toUpperCase()}</ActiveText>
      <MutedText>|</MutedText>
      <MutedText>{language === 'en' ? 'pt' : 'en'}</MutedText>
    </StyledToggle>
  );
};
