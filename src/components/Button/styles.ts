import styled, { css } from "styled-components";

export const primaryStyles = css`
  background-color: ${(props) => props.theme.colors.accent.blue};
  color: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.accent.blue};
  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "0 4px 12px rgba(157, 78, 221, 0.2)"
      : "none"};

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.accent.violet};
    border-color: ${(props) => props.theme.colors.accent.violet};
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "0 6px 16px rgba(157, 78, 221, 0.35)"
        : "none"};
  }
`;

export const outlineStyles = css`
  background: transparent;
  color: ${(props) => props.theme.colors.textPrimary};
  border: 1px solid ${(props) => props.theme.colors.border};

  &:hover:not(:disabled) {
    border-color: ${(props) => props.theme.colors.borderHover};
    background-color: ${(props) => props.theme.colors.backgroundAlt};
    transform: translateY(-2px);
  }
`;

export const secondaryStyles = css`
  background-color: ${(props) => props.theme.colors.backgroundAlt};
  color: ${(props) => props.theme.colors.textSecondary};
  border: 1px solid ${(props) => props.theme.colors.border};

  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.textPrimary};
    background-color: ${(props) => props.theme.colors.border};
    transform: translateY(-2px);
  }
`;

export const StyledButton = styled.button<{
  $variant: "primary" | "outline" | "secondary";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.default};
  user-select: none;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props) => {
    switch (props.$variant) {
      case "primary":
        return primaryStyles;
      case "outline":
        return outlineStyles;
      case "secondary":
        return secondaryStyles;
    }
  }}
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
  }
`;
