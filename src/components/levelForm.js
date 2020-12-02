import React from 'react'
import { connect } from 'react-redux'
import { incLevel, dsi, str, con, wis, int, cha, incProf } from '../redux/actions';
import { NavLink } from 'react-router-dom'
import { Button, Grid, Paper } from '@material-ui/core';

function LevelForm({ localinProf, localCha, character, localCon, localDsi, localInt, localStr, localWis, submitHandler, localIncLevel, charId }) {

    const [points, changePoints] = React.useState(2)
    const url =`/characters/${charId}`
    const handleInc = (stat) => {

        if (points > 0) {
            changePoints((prevPoints) => prevPoints - 1)
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
        if (points <= 1) {
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

    const localSubmitHandler = () => {
        localIncLevel(character.level+1)


        submitHandler(character,charId)
    }

    return <div >
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
                <Grid xs={12}><Button onClick={localSubmitHandler}><NavLink to={url}>Confirm</NavLink></Button></Grid>
                <Grid xs={12}><p></p></Grid>
            </Grid>
            
        </Paper>
        <div className="levelPaper"> </div>
            </Grid>
        </Grid>
    </div>

}
const mapStateToProps = (state) => { 
    return ({ abilities: state.abilities, character: state.character, charId: state.CharId }) }
const mapDispatchToProps = (dispatch) => {
    return { localDsi: (increment) => dispatch(dsi(increment)), localStr: (increment) => dispatch(str(increment)), localInt: (increment) => dispatch(int(increment)),
        localWis: (increment) => dispatch(wis(increment)), localCon: (increment) => dispatch(con(increment)), localCha: (increment) => dispatch(cha(increment)), localIncLevel: (level) => dispatch(incLevel(level)),
    localincProf:(inc)=>dispatch(incProf(inc)) }}


export default connect(mapStateToProps, mapDispatchToProps)(LevelForm)