import { Button, Grid, Paper } from '@material-ui/core'
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

    return <Grid container 
    direction="column"
        justify="space-between"
        alignItems="center"
        >
    <Paper width={40} className="nameForm" >
        <form onSubmit={e => localSubmitHandler(e)}>
            <Grid xs={12}>
            <label for="name"  >Name</label>
            </Grid>
                <Grid xs={12}>
            <input type="text" name="name" value={name} onChange={e=>nameHandler(e)}/>
                </Grid>
            <label for="image" >Image</label>
                <Grid xs={12}>
            <input type="text" name="image" value={image} onChange={e=>imageHandler(e)}/>
            </Grid>
            <Grid xs={12}>
            <Button type="submit" >Next</Button>
            </Grid>
        </form>
    </Paper>
    </Grid>
    

}
const mapDispatchToProps = (dispatch) => { return { localSetName: (charName) => dispatch(setName(charName)), localSetImage: (image) => dispatch(setImage(image))}}




export default connect(null, mapDispatchToProps)(NameForm)