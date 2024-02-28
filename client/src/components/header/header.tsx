import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon  from '@mui/icons-material/Brightness4';
import Brightness7Icon  from '@mui/icons-material/Brightness7';
import {ColorModeContext, useTheme} from '../../hooks/useTheme';


const Header: React.FC = () => {
    const { theme } = useTheme()
    const colorMode = React.useContext(ColorModeContext);
    return (
        <AppBar position="static">
            <Toolbar style={{ width: '100%' }}>
                <IconButton edge={"start"} color={"inherit"} arial-label="menu" sx={{mr: 2}}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Bemdemsik
                </Typography>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit" style={{ marginLeft: 'auto', marginRight: '20px' }}>
                    {theme.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;