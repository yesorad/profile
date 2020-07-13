import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { darkTheme, lightTheme } from '../styles/theme';

function ProviderContainer({ children }) {
  const theme = useSelector((state) => state.theme);

  const themeMode = useCallback(() => (theme.isDark ? darkTheme : lightTheme), [
    theme.isDark,
  ]);

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
}

export default ProviderContainer;
