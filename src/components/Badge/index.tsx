import React from "react";
import { StyledBadge } from "./styles";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "green" | "violet" | "amber" | "blue" | "slate";
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "slate",
  pulse = false,
  children,
  ...props
}) => {
  let color = "#64748B";
  let bg = "rgba(100, 116, 139, 0.06)";
  let border = "rgba(100, 116, 139, 0.15)";
  let glow = "rgba(100, 116, 139, 0.2)";

  switch (variant) {
    case "green":
      color = "#10B981";
      bg = "rgba(16, 185, 129, 0.08)";
      border = "rgba(16, 185, 129, 0.2)";
      glow = "rgba(16, 185, 129, 0.4)";
      break;
    case "violet":
      color = "#9D4EDD";
      bg = "rgba(157, 78, 221, 0.08)";
      border = "rgba(157, 78, 221, 0.2)";
      glow = "rgba(157, 78, 221, 0.4)";
      break;
    case "amber":
      color = "#F59E0B";
      bg = "rgba(245, 158, 11, 0.08)";
      border = "rgba(245, 158, 11, 0.2)";
      glow = "rgba(245, 158, 11, 0.4)";
      break;
    case "blue":
      color = "#0066FF";
      bg = "rgba(0, 102, 255, 0.08)";
      border = "rgba(0, 102, 255, 0.2)";
      glow = "rgba(0, 102, 255, 0.4)";
      break;
  }

  return (
    <StyledBadge
      id={props.id}
      $variant={variant}
      $pulse={pulse}
      $color={color}
      $bg={bg}
      $border={border}
      $glow={glow}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};
