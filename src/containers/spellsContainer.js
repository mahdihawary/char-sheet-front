import React from 'react'
import { connect } from 'react-redux'
import SpellCard from '../components/spellCard'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});




const SpellsContainer = ({ spells, classT, level}) => {
    console.log(spells)



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
        switch(true){
            case level >= 20:
                return ninthSpell()
            case level >= 18:
                return eighthSpell()
            case level >= 16:
                return seventhSpell()
            case level >= 13:
                return sixthSpell()
            case level >= 10:
                return fifthSpell()
            case level >= 7:
                return fourthSpell()
            case level >= 4:
                return thirdSpell()
            case level >= 2:
                return secondSpell()
            case level>=1:
                return firstSpell()
            default:
                return []
        }
    }

    function renderSpells() {

        return levelSpells().sort((a, b) => { return a.attributes.level - b.attributes.level }).map(spell => <SpellCard spell={spell} key={spell.id} />)
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell >Spell Level</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderSpells()}
                    </TableBody>
                </Table>
            </TableContainer>
           
        </div>
    )
}

const mapStateToProps = (state) => { return { spells: state.spells } }


export default connect(mapStateToProps)(SpellsContainer)