import React, { useMemo, useState } from 'react'
import { Button, Toolbar, AppBar } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

const MyMenu: React.FC = () => {
    const classes = useStyles()
    return (
            <Toolbar className={classes.tool}>
                <Button >Главная</Button>
                <Button >Услуги</Button>
                <Button >Контакты</Button>
                <Button >О нас</Button>
            </Toolbar>
    )
}

const useStyles = makeStyles({
    tool: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})

export default MyMenu