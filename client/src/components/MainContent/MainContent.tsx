import React from "react";
import {Box} from "@mui/material";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Routing from "../Routing/Routing";

const MainContent: React.FC = () => {
    return (
        <Box>
            <Header />
            <Box className={'container'}>
                <Box className={'columnMenu'}>
                    <Menu />
                </Box>
                <Box className={'columnApp'}>
                    <Routing />
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
};

export default MainContent;