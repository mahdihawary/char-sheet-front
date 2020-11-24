import React from 'react'
import { connect } from 'react-redux'
import { setImage, setName } from '../redux/actions'

function NameForm({  submitHandler, localSetImage,localSetName }) {

    const [name, nameChange]= React.useState('')
    const [image, imageChange] = React.useState('')

    const nameHandler=(e)=>{ nameChange( e.target.value)}
    const imageHandler=(e)=>{ imageChange( e.target.value)}


    const localSubmitHandler=(e)=>{
        e.preventDefault()
        localSetName(name)
        localSetImage(image)
        submitHandler()
    }

    return <div>
        <form onSubmit={e => localSubmitHandler(e)}>
            <label for="name"  >Name</label>
            <input type="text" name="name" value={name} onChange={e=>nameHandler(e)}/>
            <label for="image" >Image</label>
            <input type="text" name="image" value={image} onChange={e=>imageHandler(e)}/>
            <button type="submit" >Next</button>
        </form>
    </div>

}
const mapDispatchToProps = (dispatch) => { return { localSetName: (charName) => dispatch(setName(charName)), localSetImage: (image) => dispatch(setImage(image))}}




export default connect(null, mapDispatchToProps)(NameForm)