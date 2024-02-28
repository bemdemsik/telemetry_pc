import React, { useState, useEffect } from 'react';
import { Card, CardMedia, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Box} from "@mui/material";

const images = [
    "https://avatars.dzeninfra.ru/get-zen_doc/5236792/pub_637040f1e3e3bb15f1c0be08_6370412ecbf5170d1489e3f7/scale_1200",
    "https://terasale.com/ru/wp-content/uploads/sites/2/2023/11/scale-1200-96-1-1280x853.jpeg",
    "https://oclab.ru/wp-content/uploads/2020/01/13BSFUWgOcCwIhWO-1024x685.jpg"]

const Slider = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [index]);

    const moveSlide = (step: any) => {
        const newIndex = (index + step + images.length) % images.length;
        setIndex(newIndex);
    };

    return (
        <Box className={classes.sliderContainer}>
            <IconButton className={classes.leftArrow} onClick={() => moveSlide(-1)}>
                <NavigateBeforeIcon style={{ color: 'white' }}/>
            </IconButton>
            <Card>
                <CardMedia
                    component="img"
                    alt={`Slide ${index}`}
                    style={{ height: 400, width: 400, objectFit: "cover" }}
                    image={images[index]}
                />
            </Card>
            <IconButton className={classes.rightArrow} onClick={() => moveSlide(1)}>
                <NavigateNextIcon style={{ color: 'white' }}/>
            </IconButton>
        </Box>
    );
};

const useStyles = makeStyles({
    sliderContainer: {
        position: 'relative',
        display: 'inline-block',
        margin: '0 auto',
    },
    leftArrow: {
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
    },
    rightArrow: {
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
    },
});

export default Slider;