import { Button, useTheme } from "@mui/material";
import React, { FC } from "react";
import { ToolTip } from "../Tooltip/ToolTip";
import "./styles.css";

type PrimaryButtonProps = {
  onClick: (e?: any) => void;
  disabled?: boolean;
  children: React.ReactNode | string;
  variant?: any;
  className?: string;
  fullWidth?: boolean;
  title?: string;
  sx?: Object;
  type?: any;
  tooltipInfo?: string;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({
  onClick,
  disabled,
  variant = "contained",
  fullWidth = false,
  className,
  children,
  title,
  type,
  sx,
  tooltipInfo,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <ToolTip title={tooltipInfo}>
      <Button
        type={type}

        title={title}
        fullWidth={fullWidth}
        sx={{
          ...sx,fontSize: '16px', '&.defaultButton': {
            background: theme.palette.primary.dark,
            color: theme.palette.secondary.contrastText,
          },
        }}
        className={`${variant === "contained" ? "defaultButton" : "textButton"
          } ${className}`}
        disabled={disabled}
        onClick={onClick}
        variant={variant}
        {...rest}
      >
        {children}
      </Button>
    </ToolTip>
  );
};
export default PrimaryButton;
