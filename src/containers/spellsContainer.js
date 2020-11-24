import React from 'react'
import { connect } from 'react-redux'
import SpellCard from '../components/spellCard'


const SpellsContainer = ({ spells }) => {

    function renderSpells() {
        console.log(spells)
        return spells.filter(spell => spell.attributes.class_list.includes("Warlock")).filter(spell => spell.attributes.level===1).map(spell=><SpellCard spell={spell} key={spell.id}/>)

        
    }


    return (
        <div>
            {renderSpells()}

        </div>
    )
}

const mapStateToProps = (state) => { return { spells: state.spells } }


export default connect(mapStateToProps)(SpellsContainer)