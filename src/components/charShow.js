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
                    <Grid container className={classes.root}>
                        <Grid item xs={12}>
                        <h1>{character.name}</h1>
                        </Grid>
                        <Grid item xs={12}>
                                <h2> {character.race} {character.class_type} Level {character.level}</h2>
                        </Grid> 
                    </Grid>
                </Grid>

                <Grid item width={25} xs={3}>
                    <img src={character.image} alt="" className="charImage" />
                </Grid>
            <Grid item xs={9}>
                    <Grid container justify="center" >
                        <Grid item xs={12}>
                <h2>Ability Scores</h2>
                </Grid>
                        <Grid item xs={4} spacing={0}>
                <h3>STR</h3>
                <p>{character.strength}</p>
                            </Grid>
                        <Grid item xs={4}>
                <h3>WIS</h3>
                <p>{character.wisdom}</p>
                </Grid>
            <Grid item xs={4}>
                <h3>CON </h3>
                <p>{character.constitution}</p>
                </Grid>
                <Grid item xs={4}>
                <h3>INT </h3>
                <p>{character.intelligence}</p>
                </Grid>
                <Grid item xs={4}>
                <h3>DEX</h3>
                <p>{character.dexterity}</p>
                </Grid>
                <Grid item xs={4}>
                <h3>CHA </h3>
                <p>{character.charisma}</p>
                </Grid>
                        <Grid xs={4}>
                            <hr />
                        </Grid>
                    
                </Grid>

                
            </Grid>

            <Grid item xs={12}>
                
                    <h2>Stats</h2>
                    <Grid container justify='center'>
                        <Grid xs={3}></Grid>
                        <Grid item xs={3}>
                            <h3>Darkvision</h3>
                            <p>{character.darkvision} ft</p>
                        </Grid>
                        <Grid item xs={3}>
                            <h3>speed:</h3>
                            <p>{character.speed} ft</p>
                        </Grid>

                        <Grid xs={3}></Grid>
                        <Grid item xs={3}>
                            <h3>proficiency</h3>
                            <p>+{character.proficiency}</p>
                        </Grid>
                        {/* <h3>AC: {character.armor}</h3> */}
                        <Grid item xs={3}>
                            <h3>Initiative</h3>
                            <p>+{Math.floor((character.dexterity - 10) / 2 + character.proficiency) }</p>
                        </Grid>
                        <Grid xs={7}>
                            <hr />
                        </Grid>
                    </Grid>
            </Grid>
                {/* <Grid item xs={3}>
                    <h3>Saving throws</h3>
                    <h4>Strength: {Math.floor((character.strength-10)/2+character.proficiency)}</h4>
                    <h4>Wisdom: {Math.floor((character.wisdom-10)/2+character.proficiency)}</h4>
                    <h4>Constitution: {Math.floor((character.constitution-10)/2+character.proficiency)}</h4>
                    <h4>Intelligence: {Math.floor((character.intelligence-10)/2+character.proficiency)}</h4>
                    <h4>Dexterity: {Math.floor((character.dexterity-10)/2+character.proficiency)}</h4>
                    <h4>Charisma: {Math.floor((character.charisma-10)/2+character.proficiency)}</h4>
                </Grid> */}
                <Grid item xs={12}>
                    <h2>Skills</h2>
                    <Grid container justify='center'>
                    <Grid item xs={3}>
                        <h4>Acrobatics</h4>
                    <p>{proficiencies.includes('acro') ? Math.floor((character.dexterity - 10) / 2 + character.proficiency) : Math.floor((character.dexterity - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>Animal Handling</h4>
                    <p>{proficiencies.includes('ani') ? Math.floor((character.wisdom - 10) / 2 + character.proficiency) : Math.floor((character.wisdom - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Arcana</h4>
                    <p>{proficiencies.includes('arc') ? Math.floor((character.intelligence - 10) / 2 + character.proficiency) : Math.floor((character.intelligence - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Athletics</h4>
                    <p>{proficiencies.includes('ath') ? Math.floor((character.strength - 10) / 2 + character.proficiency) : Math.floor((character.strength - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Deception</h4>
                    <p>{proficiencies.includes('dece') ? Math.floor((character.charisma - 10) / 2 + character.proficiency) : Math.floor((character.charisma - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>History</h4>
                    <p>{proficiencies.includes('his') ? Math.floor((character.intelligence - 10) / 2 + character.proficiency) : Math.floor((character.intelligence - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Insight</h4>
                    <p>{proficiencies.includes('ins') ? Math.floor((character.wisdom - 10) / 2 + character.proficiency) : Math.floor((character.wisdom - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Intimidation</h4>
                    <p>{proficiencies.includes('inti') ? Math.floor((character.charisma - 10) / 2 + character.proficiency) : Math.floor((character.charisma - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Investigation</h4>
                    <p>{proficiencies.includes('inve') ? Math.floor((character.intelligence - 10) / 2 + character.proficiency) : Math.floor((character.intelligence - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Medicine</h4>
                    <p>{proficiencies.includes('medi') ? Math.floor((character.intelligence - 10) / 2 + character.proficiency) : Math.floor((character.intelligence - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Nature</h4>
                    <p>{proficiencies.includes('natu') ? Math.floor((character.wisdom - 10) / 2 + character.proficiency) : Math.floor((character.wisdom - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Perception</h4>
                    <p>{proficiencies.includes('perc') ? Math.floor((character.wisdom - 10) / 2 + character.proficiency) : Math.floor((character.wisdom - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Performance</h4>
                    <p>{proficiencies.includes('perf') ? Math.floor((character.charisma - 10) / 2 + character.proficiency) : Math.floor((character.charisma - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Persuasion</h4>
                    <p>{proficiencies.includes('pers') ? Math.floor((character.charisma - 10) / 2 + character.proficiency) : Math.floor((character.charisma - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Religion</h4>
                    <p>{proficiencies.includes('rel') ? Math.floor((character.dexterity - 10) / 2 + character.proficiency) : Math.floor((character.dexterity - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Sleight of Hand</h4>
                    <p>{proficiencies.includes('hand') ? Math.floor((character.dexterity - 10) / 2 + character.proficiency) : Math.floor((character.dexterity - 10) / 2)}</p>
                    </Grid>
                        
                    <Grid item xs={3}>
                            <h4>Stealth</h4>
                    <p>{proficiencies.includes('stealth') ? Math.floor((character.dexterity - 10) / 2 + character.proficiency) : Math.floor((character.dexterity - 10) / 2)}</p>
                    </Grid>
                    <Grid item xs={3}>
                            <h4>Survival</h4>
                    <p>{proficiencies.includes('surv') ? Math.floor((character.dexterity - 10) / 2 + character.proficiency) : Math.floor((character.dexterity - 10) / 2)}</p>
                    </Grid>

                        <Grid xs={7}>
                            <hr />
                        </Grid>
                    </Grid>
                </Grid>

                {character.class_type==='Wizard'||"Warlock"||'Bard'||'Sorcerer'||'Druid'||'Cleric'||'Paladin'||'Ranger' ?<Grid item xs={12}>
                    <h2>Spells</h2>
                <SpellsContainer classT={character.class_type} level={character.level}/>
                </Grid>:null}
                <Grid item xs={12}><p></p></Grid>
        </Grid>
    </Paper>
    </Container>
 

    
}
// const mapStateToProps=(state)=>{
// return {character:state.showChar}
//}

export default connect()(CharShow)
