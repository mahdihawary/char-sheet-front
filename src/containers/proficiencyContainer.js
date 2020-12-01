import React from 'react'
import { connect } from 'react-redux'
import ProficiencyCard from '../components/proficiencyCard'


const SkillsContainer = ({ skills }) => {

    function renderSkills() {

        
    }


    return (
        <div>
            {renderSkills()}

        </div>
    )
}

const mapStateToProps = (state) => { return { skills: state.skills } }


export default connect(mapStateToProps)(SkillsContainer)