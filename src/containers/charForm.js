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


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
});

function CharForm({character, postChar, resetCharacter}){
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
                <Button onClick={createCharacter}><NavLink to="http://localhost:3001/characters">Submit</NavLink></Button> </div>

            default:
                break;
        }
    }

        return <div>
            {displayActive()}
            <MobileStepper
                variant="dots"
                steps={4}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                
            /> 
            </div>

    

}
const mapDispatchToProps = (dispatch) => { return { postChar: (character) => { dispatch(postCharacter(character)) }, resetCharacter: () => dispatch(resetChar())}}
const mapStateToProps = (state) => {
    return { character: state.character }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharForm)