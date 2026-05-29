import React from 'react';
import { StyledButton, IconWrapper } from './styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  iconPosition = 'left',
  children,
  ...props
}) => {
  return (
    <StyledButton id={props.id} $variant={variant} {...props}>
      {icon && iconPosition === 'left' && <IconWrapper>{icon}</IconWrapper>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <IconWrapper>{icon}</IconWrapper>}
    </StyledButton>
  );
};
