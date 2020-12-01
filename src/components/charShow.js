import React from 'react'
import {connect}from 'react-redux'
import {Box, Container, Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import SpellsContainer from '../containers/spellsContainer';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

const useStyles = makeStyles((theme) => ({
    root: {flexGrow:1,
        padding: theme.spacing(1),
    },
    paper:{
        // display: 'flex',
        // padding: theme.spacing(2),
         textAlign: 'center',
        // display: 'flex',
         alignItems: 'center',
        // padding: theme.spacing(0, 1)
        }

    
}));


function CharShow({character}){
    const classes = useStyles();

    const [proficiencies, changeProf]=React.useState('')

    const setProf=()=>
    {if (proficiencies==='')
        {switch(character.class_type){
        case 'Warlock':
            changeProf('arcana history investigation deception')
            break;
        case 'Bard':
            changeProf('persuasion deception sleight of hand performance')
            break;
        case 'Barbarian':
            changeProf('athletics, intimidation, survival')
            break;
        case 'Rogue':
            changeProf('stealth deception sleight of hand')
            break;
        case 'Druid':
            changeProf('nature animal handling medicine arcana')
            break;
        case 'Fighter':
            changeProf('acrobatics athletics perception intimidation')
            break;
        case 'Cleric':
            changeProf('religion history and medicine and insight')
            break;
        case 'Monk':
            changeProf('acrobatics athletics religion stealth')
            break;
        case 'Paladin':
            changeProf('religion athletics persuasion insight')
            break;
        case 'Ranger':
            changeProf('animal handling perception nature survival stealth')
            break;
        case 'Sorcerer':
            changeProf('arcana deception persuasion intimidation')
            break;
        case 'Wizard':
            changeProf('arcana history investigation insight')
            break;
            default:
                break;}
    }}

    return <Container>
        {setProf()}
    <Paper elevation={5}>
    <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Grid container className={classes.root}>
                            <Grid item xs={12}>
                        <h2>{character.name}</h2>
                            </Grid>
                            <Grid item xs={12}>
                        <h4>Level {character.level} {character.race} {character.class_type}</h4>
                        </Grid>
                            <Grid item xs={3}>
                        <img src={character.image} alt="" className="charImage" />
                        </Grid>
                        </Grid>
                        
                    </Paper>
                </Grid>

            <Grid item xs={3}>
                <h3>Ability Scores</h3>
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
                    <h4>Acrobatics: {proficiencies.includes('acro') ? Math.floor((character.dexterity - 10) / 2 + character.proficiency) : Math.floor((character.dexterity - 10) / 2)}</h4>
                    <h4>Animal Handling: {proficiencies.includes('ani') ? Math.floor((character.wisdom - 10) / 2 + character.proficiency) : Math.floor((character.wisdom - 10) / 2)}</h4>
                    <h4>Arcana: {proficiencies.includes('arc') ? Math.floor((character.intelligence - 10) / 2 + character.proficiency) : Math.floor((character.intelligence - 10) / 2)}</h4>
                    <h4>Athletics: {proficiencies.includes('ath') ? Math.floor((character.strength - 10) / 2 + character.proficiency) : Math.floor((character.strength - 10) / 2)}</h4>
                    <h4>Deception: {proficiencies.includes('dece') ? Math.floor((character.charisma - 10) / 2 + character.proficiency) : Math.floor((character.charisma - 10) / 2)}</h4>
                    <h4>History: {proficiencies.includes('his') ? Math.floor((character.intelligence - 10) / 2 + character.proficiency) : Math.floor((character.intelligence - 10) / 2)}</h4>
                    <h4>Insight: {proficiencies.includes('ins') ? Math.floor((character.wisdom - 10) / 2 + character.proficiency) : Math.floor((character.wisdom - 10) / 2)}</h4>
                    <h4>Intimidation: {proficiencies.includes('inti') ? Math.floor((character.charisma - 10) / 2 + character.proficiency) : Math.floor((character.charisma - 10) / 2)}</h4>
                    <h4>Investigation: {proficiencies.includes('inve') ? Math.floor((character.intelligence - 10) / 2 + character.proficiency) : Math.floor((character.intelligence - 10) / 2)}</h4>
                    <h4>Medicine: {proficiencies.includes('medi') ? Math.floor((character.intelligence - 10) / 2 + character.proficiency) : Math.floor((character.intelligence - 10) / 2)}</h4>
                    <h4>Nature: {proficiencies.includes('natu') ? Math.floor((character.wisdom - 10) / 2 + character.proficiency) : Math.floor((character.wisdom - 10) / 2)}</h4>
                    <h4>Perception: {proficiencies.includes('perc') ? Math.floor((character.wisdom - 10) / 2 + character.proficiency) : Math.floor((character.wisdom - 10) / 2)}</h4>
                    <h4>Performance: {proficiencies.includes('perf') ? Math.floor((character.charisma - 10) / 2 + character.proficiency) : Math.floor((character.charisma - 10) / 2)}</h4>
                    <h4>Persuasion: {proficiencies.includes('pers') ? Math.floor((character.charisma - 10) / 2 + character.proficiency) : Math.floor((character.charisma - 10) / 2)}</h4>
                    <h4>Religion: {proficiencies.includes('rel') ? Math.floor((character.dexterity - 10) / 2 + character.proficiency) : Math.floor((character.dexterity - 10) / 2)}</h4>
                    <h4>Sleight of Hand: {proficiencies.includes('hand') ? Math.floor((character.dexterity - 10) / 2 + character.proficiency) : Math.floor((character.dexterity - 10) / 2)}</h4>
                    <h4>Stealth: {proficiencies.includes('stealth') ? Math.floor((character.dexterity - 10) / 2 + character.proficiency) : Math.floor((character.dexterity - 10) / 2)}</h4>
                    <h4>Survival: {proficiencies.includes('surv') ? Math.floor((character.dexterity - 10) / 2 + character.proficiency) : Math.floor((character.dexterity - 10) / 2)}</h4>
                </Grid>
            <Grid item xs={3}>
                <h4>Darkvision:{character.darkvision}</h4>
                <h4>speed:{character.speed}</h4>
                <h4>proficiency:{character.proficiency}</h4>
                {/* <h4>AC: {character.armor}</h4> */}
                <h4>Initiative: {character.initiative}</h4>
            </Grid>
                <Grid item xs={6}>
                <SpellsContainer classT={character.class_type} level={character.level}/>
                </Grid>
            
        </Grid>
    </Paper>
    </Container>
 

    
}
// const mapStateToProps=(state)=>{
// return {character:state.showChar}
//}

export default connect()(CharShow)
