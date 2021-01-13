import React from 'react'
import { connect } from 'react-redux'
import ClassCard from './classCard'

function ClassForm({ classTypes, character, submitHandler }) {
    const renderRaces = () => {
        return classTypes.map(classT => <ClassCard classT={classT} key={classT.attributes.name} topSubmitHandler={submitHandler} />)
    }

    return <div>{renderRaces()}
        </div>

}
const mapStateToProps = (state) => { return ({ classTypes: state.classTypes, character: state.character }) }


export default connect(mapStateToProps)(ClassForm)
