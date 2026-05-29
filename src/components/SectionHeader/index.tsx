import React from 'react';
import { Description, HeaderWrapper, PrefixLabel, Title } from './styles';

export interface SectionHeaderProps {
  prefix?: string;
  title: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ prefix, title, description }) => {
  return (
    <HeaderWrapper>
      {prefix && <PrefixLabel>{prefix}</PrefixLabel>}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </HeaderWrapper>
  );
};
