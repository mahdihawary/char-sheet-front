import { Button, Grid, Paper } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux'
import { dsi, str, con, wis, int, cha, setHealth, setInit } from '../redux/actions';


function AbilityForm({ localCha, character, localCon, localDsi, localInt, localStr, localWis, submitHandler,localHealth, localInit }) {
    
    const [points, changePoints]=React.useState(27)
    const handleInc = (stat) => {
        
        if (points> 0)
        {changePoints((prevPoints) => prevPoints - 1)
            switch (stat) {
                case "str":
                    localStr(1)
                    break;
                case "dex":
                    localDsi(1)
                    break;
                case "con":
                    localCon(1)
                    break;
                case "int":
                    localInt(1)
                    break;
                case "wis":
                    localWis(1)
                    break;
                case "cha":
                    localCha(1)
                    break;

                default:
                    break;
            }
        }
    };

    const handleDec = (stat) => {
        if (points <= 26) {
            changePoints((prevPoints) => prevPoints + 1)
            switch (stat) {
                case "str":
                    localStr(-1)
                    break;
                case "dex":
                    localDsi(-1)
                    break;
                case "con":
                    localCon(-1)
                    break;
                case "int":
                    localInt(-1)
                    break;
                case "wis":
                    localWis(-1)
                    break;
                case "cha":
                    localCha(-1)
                    break;

                default:
                    break;
            }
        }
    }

    const localSubmitHandler=()=>{
        localHealth(8+character.constitution)
        localInit((character.dexterity-10)/2+character.proficiency)
         submitHandler()
        
    }




    return <div>
        
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                
                <Paper >
                    <h2>Abilities</h2>
                    <Grid container>
                        <Grid xs={12}>
                            <h4>Points</h4>
                            <p>{points}</p>
                        </Grid>
                        <Grid xs={6}>
                            <h4>Strength</h4><p>{character.strength}</p><Button name={'str'} onClick={()=>handleDec("str")}>-</Button><Button name={'str'} onClick={()=>handleInc("str")}>+</Button >
                        </Grid>
                        <Grid xs={6}>
                            <h4>Dexterity</h4><p>{character.dexterity}</p> <Button name={'dex'} onClick={()=>handleDec("dex")}>-</Button><Button name={'dex'} onClick={()=>handleInc("dex")}>+</Button >
                        </Grid>
                        <Grid xs={6}>
                            <h4>Constitution</h4><p>{character.constitution}</p> <Button name={'con'} onClick={()=>handleDec("con")}>-</Button><Button name={'con'} onClick={()=>handleInc("con")}>+</Button >
                        </Grid>
                        <Grid xs={6}>
                            <h4>Intelligence</h4><p>{character.intelligence}</p> <Button name={'int'} onClick={()=>handleDec("int")}>-</Button><Button name={'int'} onClick={()=>handleInc("int")}>+</Button >
                        </Grid>
                        <Grid xs={6}>
                            <h4>Wisdom</h4><p>{character.wisdom}</p> <Button name={'wis'} onClick={()=>handleDec("wis")}>-</Button><Button name={'wis'} onClick={()=>handleInc("wis")}>+</Button >
                        </Grid>
                        <Grid xs={6}>
                            <h4>Charisma</h4><p>{character.charisma}</p> <Button name={'cha'} onClick={()=>handleDec("cha")}>-</Button><Button name={'cha'} onClick={()=>handleInc("cha")}>+</Button >
                        </Grid>
                        <Grid xs={12}><Button onClick={localSubmitHandler}>Confirm</Button></Grid>
                        <Grid xs={12}><p></p></Grid>
                    </Grid>

                </Paper>
            </Grid>
        </Grid>
    </div>

}
const mapStateToProps = (state) => { return ({  character: state.character }) }
const mapDispatchToProps = (dispatch) => {
    return { localDsi: (increment) => dispatch(dsi(increment)), localStr: (increment) => dispatch(str(increment)), localInt: (increment) => dispatch(int(increment)),
        localWis: (increment) => dispatch(wis(increment)), localCon: (increment) => dispatch(con(increment)), localCha: (increment) => dispatch(cha(increment)),
        localHealth: (increment) => dispatch(setHealth(increment)), localInit: (increment) => dispatch(setInit(increment))}}


export default connect(mapStateToProps, mapDispatchToProps)(AbilityForm)