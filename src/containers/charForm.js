import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';


import { connect } from 'react-redux'
import { postCharacter } from '../redux/actions';
import RaceForm from '../components/raceForm';
import ClassForm from '../components/classForm';
import AbilityForm from '../components/abilityForm';
import NameForm from '../components/nameForm';
import CharShow from '../components/charShow';


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
});

function CharForm({character, postChar}){
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    // const [activeRace, setActiveRace]= React.useState('')

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const raceFormHandler=()=>{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const classFormHandler = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const nameFormHandler = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const abilityFormHandler = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const createCharacter=()=>{
        postChar(character)
    }

    const displayActive =()=>{
        switch (activeStep) {
            case 0:
                return <NameForm submitHandler={nameFormHandler} />
            case 1:
                console.log("here")
                return <RaceForm submitHandler={raceFormHandler}/>
            case 2:
                return <ClassForm submitHandler={classFormHandler} />
            case 3:
                return <AbilityForm submitHandler={abilityFormHandler}/>
            case 4:
                return <div><CharShow character={character} /><Button onClick={createCharacter}>Submit</Button> </div>

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
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
                        Next
          {theme.direction === 'rtl' ? '<' : ">"}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? "<" : "<"}
          Back
        </Button>
                }
            /> 
            </div>

    

}
const mapDispatchToProps=(dispatch)=>{return { postChar: (character)=>{dispatch(postCharacter(character))}}}
const mapStateToProps = (state) => {
    return { character: state.character }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharForm)