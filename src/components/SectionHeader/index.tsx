import React from 'react';
import { HeaderWrapper, PrefixLabel, Title } from './styles';

export interface SectionHeaderProps {
  prefix?: string;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ prefix, title }) => {
  return (
    <HeaderWrapper>
      {prefix && <PrefixLabel>{prefix}</PrefixLabel>}
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};
