import React from 'react'
import { Button, Toolbar } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import {useRouter} from "../../hooks/Router";

const MyMenu: React.FC = () => {
    const classes = useStyles()
    const router = useRouter()
    return (
            <Toolbar className={classes.tool}>
                <Button className={classes.but} onClick={() => router.push("/main")}>Главная</Button>
                <Button className={classes.but} onClick={() => router.push("/service")}>Услуги</Button>
                <Button className={classes.but} onClick={() => router.push("/s")}>Контакты</Button>
                <Button className={classes.but} onClick={() => router.push("/info")}>О нас</Button>
            </Toolbar>
    )
}

const useStyles = makeStyles({
    tool: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    but: {
        width: '100%'
    },
})

export default MyMenu