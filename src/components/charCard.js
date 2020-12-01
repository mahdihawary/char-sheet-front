import React from 'react'
import { Box, Button, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { setChar, localSetChar, resetChar, patchCharacter, setId, incLevel, incProf } from '../redux/actions';
import LevelForm from './levelForm';

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



function CharCard({ character, localResetChar, localSetChar, localPatchCharacter, localSetId, localIncLevel, localincProf}) {
    const classes = useStyles();



    const setCharacter = () => {
        localSetId(character.id)
        localSetChar(character)
        localIncLevel()
        console.log((character.level+1) % 4, character.level)
        if ((character.level+1) % 4 === 0) {
            console.log("incondish")
            localincProf()
        }
    }


    return (
        <Container className='charcard'>
            <Paper elevation={5} >
                {character.level < 20 ? <NavLink to={`/characters/${character.id}/level`} exact ><Button variant="outlined" onClick={setCharacter}>Level up</Button></NavLink> : null}
                    <Grid container className={classes.root}>

                        <Grid item xs={3} className={classes.paper}>
                            <Paper>
                            <Box width={75}><img src={character.image} alt="" className="charImage" /></Box>
                        </Paper>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <Paper className={classes.paper} className="charPaper">
                                <h4>{character.name} Level {character.level} {character.race} {character.class_type}</h4>
                                
                           
                            </Paper>
                        <NavLink to={`/characters/${character.id}`} exact ><Button variant="outlined">View</Button></NavLink>
                        
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return { localSetChar: (inc) => dispatch(setChar(inc)), localResetChar: () => dispatch(resetChar()), localPatchCharacter: (inc) => dispatch(patchCharacter(inc)), localSetId:(id)=>dispatch(setId(id)),
        localIncLevel: () => dispatch(incLevel()), localincProf: (inc) => dispatch(incProf(inc))
    }}

    


export default connect(null, mapDispatchToProps)(CharCard)