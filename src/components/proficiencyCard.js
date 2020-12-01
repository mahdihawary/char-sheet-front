import React from 'react'




function ProficiencyCard({ skill }) {

    return (
        <div>
            <h3>name:{skill.attributes.name}</h3>
            <h4>level:{skill.attributes.level}</h4>
            <p>{skill.attributes.description} </p>

        </div>
    )
}




export default ProficiencyCard