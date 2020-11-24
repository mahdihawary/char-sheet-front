import React from 'react'
import {connect}from 'react-redux'
import {Box, Container, Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import SpellsContainer from '../containers/spellsContainer';

const useStyles = makeStyles((theme) => ({
    root: {flexGrow:1,
        padding: theme.spacing(1),
    },
    paper:{
        display: 'flex',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        }

    
}));


function CharShow({character}){
    const classes = useStyles();
console.log(character)
    return <Container>
    <Paper elevation={5}>
    <Grid container className={classes.root}>
        <Grid item xs={3} className={classes.paper}>
        <Box >
            <img src={character.image} alt="" className="charImage"/></Box>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
            <h2>Name: {character.name}</h2>
            <h4>Level: {character.level}</h4>
            <h4>Class: {character.class_type}</h4>
            <h4>Race: {character.race}</h4>
        </Paper>
        </Grid>
            <Grid item xs={3}>
                <h3>AbilityS Scores</h3>
                <h4>Strength: {character.strength}</h4>
                <h4>Wisdom: {character.wisdom}</h4>
                <h4>Constitution: {character.constitution}</h4>
                <h4>Intelligence: {character.intelligence}</h4>
                <h4>Dexterity: {character.dexterity}</h4>
                <h4>Charisma: {character.charisma}</h4>
            </Grid>
                <Grid item xs={3}>
                    <h3>Saving throws</h3>
                    <h4>Strength: {Math.floor((character.strength-10)/2+character.proficiency)}</h4>
                    <h4>Wisdom: {Math.floor((character.wisdom-10)/2+character.proficiency)}</h4>
                    <h4>Constitution: {Math.floor((character.constitution-10)/2+character.proficiency)}</h4>
                    <h4>Intelligence: {Math.floor((character.intelligence-10)/2+character.proficiency)}</h4>
                    <h4>Dexterity: {Math.floor((character.dexterity-10)/2+character.proficiency)}</h4>
                    <h4>Charisma: {Math.floor((character.charisma-10)/2+character.proficiency)}</h4>
                </Grid>
                <Grid item xs={3}>
                    <h3>Skills</h3>
                    <h4>Acrobatics: {Math.floor((character.dexterity-10)/2+character.proficiency)}</h4>
                    <h4>Animal Handling: {Math.floor((character.wisdom-10)/2+character.proficiency)}</h4>
                    <h4>Arcana: {Math.floor((character.intelligence-10)/2+character.proficiency)}</h4>
                    <h4>Athletics: {Math.floor((character.strength-10)/2+character.proficiency)}</h4>
                    <h4>Deception: {Math.floor((character.charisma-10)/2+character.proficiency)}</h4>
                    <h4>History: {Math.floor((character.intelligence-10)/2+character.proficiency)}</h4>
                    <h4>Insight: {Math.floor((character.wisdom-10)/2+character.proficiency)}</h4>
                    <h4>Intimidation: {Math.floor((character.charisma-10)/2+character.proficiency)}</h4>
                    <h4>Investigation: {Math.floor((character.intelligence-10)/2+character.proficiency)}</h4>
                    <h4>Medicine: {Math.floor((character.wisdom-10)/2+character.proficiency)}</h4>
                    <h4>Nature: {Math.floor((character.intelligence-10)/2+character.proficiency)}</h4>
                    <h4>Perception: {Math.floor((character.wisdom-10)/2+character.proficiency)}</h4>
                    <h4>Performance: {Math.floor((character.charisma-10)/2+character.proficiency)}</h4>
                    <h4>Persuasion: {Math.floor((character.charisma-10)/2+character.proficiency)}</h4>
                    <h4>Religion: {Math.floor((character.wisdom-10)/2+character.proficiency)}</h4>
                    <h4>Sleight of Hand: {Math.floor((character.dexterity-10)/2+character.proficiency)}</h4>
                    <h4>Stealth: {Math.floor((character.dexterity-10)/2+character.proficiency)}</h4>
                    <h4>Survival: {Math.floor((character.wisdom-10)/2+character.proficiency)}</h4>
                </Grid>
            <Grid item xs={3}>
                <h4>Darkvision:{character.darkvision}</h4>
                <h4>speed:{character.speed}</h4>
                <h4>proficiency:{character.proficiency}</h4>
                {/* <h4>AC: {character.armor}</h4> */}
                <h4>Initiative: {character.initiative}</h4>
            </Grid>
                <Grid item xs={6}>
                <SpellsContainer/>
                </Grid>
            
        </Grid>
    </Paper>
    </Container>
 

    
}
// const mapStateToProps=(state)=>{
// return {character:state.showChar}
//}

export default connect()(CharShow)
