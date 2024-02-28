import React from 'react';
import {Typography, Container, Link} from '@material-ui/core';

const Footer = () => {
    return (
        <Container maxWidth="sm" style={{ marginTop: 'auto' }}>
            <Typography variant="body1" align="center">
                Лебедев Артем
            </Typography>
            <Typography variant="body1" align="center">
                My git:
                <Link href="https://github.com/bemdemsik">
                    https://github.com/bemdemsik
                </Link>
            </Typography>
        </Container>
    );
};

export default Footer;