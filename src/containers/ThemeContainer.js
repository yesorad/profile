import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../modules/theme';
import Theme from '../components/Theme';

function ThemeContainer() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const ToggleTheme = useCallback(() => dispatch(toggleTheme()), [dispatch]);

  return <Theme theme={theme} ToggleTheme={ToggleTheme} />;
}

export default ThemeContainer;
