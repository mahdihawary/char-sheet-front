import React from 'react'
import { Box, Button, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    paper: {
        display: 'flex',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }


}));

function CharCard({character}) {
    const classes = useStyles();


console.log(character)

    return (
            <Container>
                <Paper elevation={5}>
                    <Grid container className={classes.root}>
                        <Grid item xs={3} className={classes.paper}>
                            <Box >
                                <img src={character.image} alt="" className="charImage" /></Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <h2>Name: {character.name}</h2>
                                <h4>Level: {character.level}</h4>
                                <h4>Class: {character.class_type}</h4>
                                <h4>Race: {character.race}</h4>
                            </Paper>
                        <Button><NavLink to={`/characters/${character.id}`} exact >View</NavLink></Button>
                        
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
    )
}




export default CharCard