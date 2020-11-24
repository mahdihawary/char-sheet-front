import React from 'react'
import { connect } from 'react-redux'
import CharCard from '../components/charCard'

const CharIndex=({characters})=>{

function renderChars(){
console.log(characters[0])
    return characters.map(char=><CharCard character={char} key={char.id}/>)
}


    return(
        <div>{renderChars()}
          
            
        </div>
    )
}

const mapStateToProps=(state)=>{return {characters:state.characters}}


export default connect(mapStateToProps)(CharIndex) 