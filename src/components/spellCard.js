import React from 'react'




function SpellCard({ spell }) {

    console.log(spell)
    return (
        <div>
            <h3>name:{spell.attributes.name}</h3>
            <h4>level:{spell.attributes.level}</h4>
            <p>{spell.attributes.description} </p>

        </div>
    )
}




export default SpellCard