import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { setRace, setSpeed, dsi, str, con, wis, int, cha,vis } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function RaceCard({ race, topSubmitHandler, localSetRace, localSetSpeed, localSetVision, localCha, localCon, localDsi, localInt, localStr, localWis, localVis}) {
    const classes = useStyles();

    const asi=()=>{
        switch (race.attributes.ability) {
            case "dex":                
                return "Your dexterity increases by "
            case "all":
                return "All of your ability scores increase by "
            case "con":
                return "Your constitution increases by "
            case "str":
                return "Your strength increases by "
            case "int":
                return "Your intelligence increases by "
        
            default:
                break;
        }
    }
    
    const knowVision=()=>{
        if (race.attributes.darkvision===0)
            return "You do not have dark vision. "
        else
            return `You can see in darkness up to ${race.attributes.darkvision}ft. `
    }

    const abilityScoreIncrease=()=>{
        switch (race.attributes.ability) {
            case "str":
                localStr(race.attributes.ability_score)
                break;
            case "dex":
                localDsi(race.attributes.ability_score)
                break;
            case "con":
                localCon(race.attributes.ability_score)
                break;
            case "int":
                localInt(race.attributes.ability_score)
                break;
            case "wis":
                localWis(race.attributes.ability_score)
                break;
            case "cha":
                localCha(race.attributes.ability_score)
                break;
            default:
                break;
        }
    }

    function submitHandler(){
        abilityScoreIncrease()
        localSetRace(race.attributes.name)
        localSetSpeed(race.attributes.speed)
        localVis(race.attributes.darkvision)
        topSubmitHandler()
    }

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{race.attributes.name}</Typography>
                    
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >{race.attributes.desc} </Typography>
                    <Typography >Your speed is {race.attributes.speed}ft. </Typography>
                    <Typography >{knowVision()}</Typography>
                    <Typography>{asi()} {race.attributes.ability_score}. </Typography>
                    
                </AccordionDetails>
                <Button onClick={submitHandler}>Choose Race</Button>
            </Accordion>
        </div>
    );
}
const mdp = (dispatch) => {
    return {
        localDsi: (increment) => dispatch(dsi(increment)), localSetRace: (race) => dispatch(setRace(race)), localSetSpeed: (speed) => dispatch(setSpeed(speed)), localVis: (vision) => dispatch(vis(vision)),
    localStr: (increment) => dispatch(str(increment)), localInt: (increment) => dispatch(int(increment)),
    localWis: (increment) => dispatch(wis(increment)), localCon: (increment) => dispatch(con(increment)), localCha: (increment) => dispatch(cha(increment))}}

export default connect(null,mdp)(RaceCard)