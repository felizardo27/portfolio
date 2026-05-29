import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { ButtonAnchor, ContentSide, IconWrapper, ArrowWrapper } from './styles';

export interface SocialButtonProps {
  platform: 'github' | 'linkedin' | 'email' | string;
  url: string;
  label: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ platform, url, label }) => {
  const getIcon = () => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github />;
      case 'linkedin':
        return <Linkedin />;
      case 'email':
      case 'mail':
        return <Mail />;
      default:
        return <ExternalLink />;
    }
  };

  return (
    <ButtonAnchor href={url} target="_blank" rel="noreferrer" aria-label={label}>
      <ContentSide>
        <IconWrapper>{getIcon()}</IconWrapper>
        <span>{label}</span>
      </ContentSide>
      <ArrowWrapper>
        <ExternalLink />
      </ArrowWrapper>
    </ButtonAnchor>
  );
};
