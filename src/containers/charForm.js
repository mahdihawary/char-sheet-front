import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { postCharacter, resetChar } from '../redux/actions';
import RaceForm from '../components/raceForm';
import ClassForm from '../components/classForm';
import AbilityForm from '../components/abilityForm';
import NameForm from '../components/nameForm';
import CharShow from '../components/charShow';
import ProficiencyContainer from './proficiencyContainer';
import { Grid, Paper } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
});

function CharForm({character, postChar, resetCharacter}){
    console.log(character)
    const classes = useStyles();
    // const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    // const [activeRace, setActiveRace]= React.useState('')

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    const createCharacter=()=>{
        postChar(character)

        resetCharacter()

    }

    const displayActive =()=>{
        switch (activeStep) {
            case 0:
                return <NameForm submitHandler={handleNext} />
            case 1:
                return <RaceForm submitHandler={handleNext}/>
            case 2:
                return <ClassForm submitHandler={handleNext} />
            case 3:
                return <AbilityForm submitHandler={handleNext}/>
            // case 4:
            //     return <ProficiencyContainer submitHandler={handleNext}/>
            case 4:
                return <div><CharShow character={character} />
                <Paper><Button onClick={createCharacter}><NavLink to="/characters">Submit</NavLink></Button> </Paper></div>

            default:
                break;
        }
    }

        return <Grid container justify='center' spacing={0}>
            
            <Grid xs={12}>
            {displayActive()}
            </Grid>
            <Grid xs={12}><p> </p></Grid>
            <Grid xs={3}>
            <MobileStepper
                variant="dots"
                steps={4}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
        <Button size="small"  disabled={true}>
        </Button>
      }
      backButton={
        <Button size="small"  disabled={true}>
        </Button>
      }
                
            /> 
            </Grid>
            <Grid xs={12}><p> </p></Grid>
            
            </Grid>

    

}
const mapDispatchToProps = (dispatch) => { return { postChar: (character) => { dispatch(postCharacter(character)) }, resetCharacter: () => dispatch(resetChar())}}
const mapStateToProps = (state) => {
    return { character: state.character }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharForm)