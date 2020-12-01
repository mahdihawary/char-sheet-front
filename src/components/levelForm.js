import React from 'react'
import { connect } from 'react-redux'
import { incLevel, dsi, str, con, wis, int, cha, incProf } from '../redux/actions';
import { NavLink } from 'react-router-dom'

function LevelForm({ localinProf, localCha, character, localCon, localDsi, localInt, localStr, localWis, submitHandler, localIncLevel, charId }) {

    const [points, changePoints] = React.useState(2)
    const url =`/characters/${charId}`
    const handleInc = (e) => {

        if (points > 0) {
            changePoints((prevPoints) => prevPoints - 1)
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
        if (points <= 1) {
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

    const localSubmitHandler = () => {
        localIncLevel(character.level+1)


        submitHandler(character,charId)
    }

    return<div>Stat increase
        <div>
            <h3>Abilities</h3>
            <p>points:{points}</p>
            <p>Strength:{character.strength} <button name={'str'} onClick={handleDec}>-</button><button name={'str'} onClick={handleInc}>+</button ></p>
            <p>dexterity:{character.dexterity} <button name={'dex'} onClick={handleDec}>-</button><button name={'dex'} onClick={handleInc}>+</button ></p>
            <p>constitution:{character.constitution} <button name={'con'} onClick={handleDec}>-</button><button name={'con'} onClick={handleInc}>+</button ></p>
            <p>intelligence:{character.intelligence} <button name={'int'} onClick={handleDec}>-</button><button name={'int'} onClick={handleInc}>+</button ></p>
            <p>wisdom:{character.wisdom} <button name={'wis'} onClick={handleDec}>-</button><button name={'wis'} onClick={handleInc}>+</button ></p>
            <p>charisma:{character.charisma} <button name={'cha'} onClick={handleDec}>-</button><button name={'cha'} onClick={handleInc}>+</button ></p>
            <button onClick={localSubmitHandler}><NavLink to={url}>Confirm</NavLink></button>
        </div>
        
    </div>

}
const mapStateToProps = (state) => { 
    return ({ abilities: state.abilities, character: state.character, charId: state.CharId }) }
const mapDispatchToProps = (dispatch) => {
    return { localDsi: (increment) => dispatch(dsi(increment)), localStr: (increment) => dispatch(str(increment)), localInt: (increment) => dispatch(int(increment)),
        localWis: (increment) => dispatch(wis(increment)), localCon: (increment) => dispatch(con(increment)), localCha: (increment) => dispatch(cha(increment)), localIncLevel: (level) => dispatch(incLevel(level)),
    localincProf:(inc)=>dispatch(incProf(inc)) }}


export default connect(mapStateToProps, mapDispatchToProps)(LevelForm)