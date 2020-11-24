import React from 'react'
import { connect } from 'react-redux'
import { dsi, str, con, wis, int, cha, setHealth, setInit } from '../redux/actions';


function AbilityForm({ localCha, character, localCon, localDsi, localInt, localStr, localWis, submitHandler,localHealth, localInit }) {
    
    const [points, changePoints]=React.useState(27)
    const handleInc = (e) => {
        
        if (points> 0)
        {changePoints((prevPoints) => prevPoints - 1)
            switch (e.target.name) {
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

    const handleDec = (e) => {
        if (points <= 26) {
            changePoints((prevPoints) => prevPoints + 1)
            switch (e.target.name) {
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
        <h3>Abilities</h3>
        <p>points:{points}</p>
        <p>Strength:{character.strength} <button name={'str'} onClick={handleDec}>-</button><button name={'str'}onClick={handleInc}>+</button ></p>
        <p>dexterity:{character.dexterity} <button name={'dex'} onClick={handleDec}>-</button><button name={'dex'} onClick={handleInc}>+</button ></p>
        <p>constitution:{character.constitution} <button name={'con'} onClick={handleDec}>-</button><button name={'con'}onClick={handleInc}>+</button ></p>
        <p>intelligence:{character.intelligence} <button name={'int'} onClick={handleDec}>-</button><button name={'int'}onClick={handleInc}>+</button ></p>
        <p>wisdom:{character.wisdom} <button name={'wis'} onClick={handleDec}>-</button><button name={'wis'}onClick={handleInc}>+</button ></p>
        <p>charisma:{character.charisma} <button name={'cha'} onClick={handleDec}>-</button><button name={'cha'}onClick={handleInc}>+</button ></p>
        <button onClick={localSubmitHandler}>Confirm</button>
    </div>

}
const mapStateToProps = (state) => { return ({  character: state.character }) }
const mapDispatchToProps = (dispatch) => {
    return { localDsi: (increment) => dispatch(dsi(increment)), localStr: (increment) => dispatch(str(increment)), localInt: (increment) => dispatch(int(increment)),
        localWis: (increment) => dispatch(wis(increment)), localCon: (increment) => dispatch(con(increment)), localCha: (increment) => dispatch(cha(increment)),
        localHealth: (increment) => dispatch(setHealth(increment)), localInit: (increment) => dispatch(setInit(increment))}}


export default connect(mapStateToProps, mapDispatchToProps)(AbilityForm)