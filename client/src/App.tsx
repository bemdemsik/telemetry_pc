import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { useTheme, ColorModeContext } from './hooks/Theme'
import MainContent from './components/MainContent/MainContent'
import './App.css'

function App() {
    const { theme, colorMode } = useTheme()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Router>
                    <CssBaseline />
                    <MainContent />
                </Router>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
