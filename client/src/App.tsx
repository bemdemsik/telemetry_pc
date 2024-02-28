import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Slider from './components/slider/slider'
import { ThemeProvider } from '@mui/material/styles'
import { Box, CssBaseline } from '@mui/material'
import { useTheme, ColorModeContext } from './hooks/useTheme'
import Menu from './components/menu/menu'
import './App.css'

function App() {
    const { theme, colorMode } = useTheme()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Box className={'container'}>
                    <Box className={'columnMenu'}>
                        <Menu />
                    </Box>
                    <Box className={'columnApp'}>
                        <Slider />
                        <Footer />
                    </Box>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
