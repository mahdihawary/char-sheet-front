import React from 'react'
import { connect } from 'react-redux'
import SpellCard from '../components/spellCard'


const SpellsContainer = ({ spells, classT, level}) => {



    const classSpells = () => { return spells.filter(spell => spell.attributes.class_list.includes(classT)) }
    const firstSpell = () => { return classSpells().filter(spell => spell.attributes.level<=1)}
    const secondSpell = () => { return classSpells().filter(spell => spell.attributes.level <= 2) }
    const thirdSpell = () => { return classSpells().filter(spell => spell.attributes.level <= 3) }
    const fourthSpell = () => { return classSpells().filter(spell => spell.attributes.level <= 4)}
    const fifthSpell = () => { return classSpells().filter(spell => spell.attributes.level <= 5)}
    const sixthSpell = () => { return classSpells().filter(spell => spell.attributes.level <= 6)}
    const seventhSpell = () => { return classSpells().filter(spell => spell.attributes.level <= 7)}
    const eighthSpell = () => { return classSpells().filter(spell => spell.attributes.level <= 8)}
    const ninthSpell = () => { return classSpells().filter(spell => spell.attributes.level <= 9)}

    const levelSpells=()=>{
        switch(level){
            case 1:
                return firstSpell()
            case 2:
                return secondSpell()
            case 3:
                return thirdSpell()
            case 4:
                return fourthSpell()
            case 5:
                return fifthSpell()
            case 6:
                return sixthSpell()
            case 7:
                return seventhSpell()
            case 8:
                return eighthSpell()
            case 9:
                return ninthSpell()
                default:
                    break;
        }
    }

    function renderSpells() {

        return levelSpells().sort((a, b) => { return a.attributes.level - b.attributes.level }).map(spell => <SpellCard spell={spell} key={spell.id} />)
    }

    return (
        <div>
            {renderSpells()}
        </div>
    )
}

const mapStateToProps = (state) => { return { spells: state.spells } }


export default connect(mapStateToProps)(SpellsContainer)