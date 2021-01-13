import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { setClass } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function ClassCard({ classT, topSubmitHandler, localSetClass }) {
    const classes = useStyles();

    function submitHandler() {
        localSetClass(classT.attributes.name)
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
                    <Typography className={classes.heading}>{classT.attributes.name}</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography >{classT.attributes.desc}</Typography>
                   

                </AccordionDetails>
                <Button onClick={submitHandler}>Choose Class</Button>
            </Accordion>
            
        </div>
    );
}
const mdp = (dispatch) => { return { localSetClass: (classT) => dispatch(setClass(classT)) }}


export default connect(null, mdp)(ClassCard)