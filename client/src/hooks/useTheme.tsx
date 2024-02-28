import {createContext, useMemo, useState} from 'react';
import { createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useTheme = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return {
    theme,
    colorMode
  }
}
