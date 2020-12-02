import { Grid } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import CharCard from '../components/charCard'

const CharIndex=({characters})=>{

function renderChars(){
    return characters.map(char=><CharCard character={char} key={char.id}/>)
}


    return(
        <div className='charIndex'>
            <Grid container justify='center'>
                <Grid xs={8} >
            {renderChars()}
            </Grid>
            </Grid>
            
        </div>
    )
}

const mapStateToProps=(state)=>{return {characters:state.characters}}


export default connect(mapStateToProps)(CharIndex) 