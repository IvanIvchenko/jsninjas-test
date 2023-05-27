import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

interface ThemeControllerProps {
  children: React.ReactNode;
}

export const ThemeController: React.FC<ThemeControllerProps> = ({
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
