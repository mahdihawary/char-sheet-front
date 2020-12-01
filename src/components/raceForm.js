import React from 'react'
import{connect}from 'react-redux'
import RaceCard from './raceCard'

function RaceForm({races, character, submitHandler}){
const renderRaces=()=>{
    return races.map(race => <RaceCard race={race} key={race.attributes.name} topSubmitHandler={submitHandler}/>)
}

return <div>{renderRaces()}</div>

}
const mapStateToProps=(state)=>{return ({races:state.races, character:state.character})}


export default connect(mapStateToProps)(RaceForm)

