
import './App.css';
import React from 'react'
import {connect} from 'react-redux'
import CharShow from "./components/charShow"
import { getCharacter, getRaces, getClasses, getCharacters, getSpells, getCharSpells } from './redux/actions';
import { Button } from '@material-ui/core';
import {Route,Switch, BrowserRouter} from 'react-router-dom'
import CharForm from './containers/charForm';
import Navigation from './components/navigation'
import CharIndex from './containers/charIndex';

class App extends React.Component {

componentDidMount(){

  this.props.fetchRaces()
  this.props.fetchClasses()
  this.props.fetchCharacters()
  // this.props.fetchCharSpells()
  this.props.fetchSpells()
}


  render(){
    console.log(this.props)
    return (
      <div className="App">
        <BrowserRouter>
        <Navigation/>
        <Switch>
      <Route path="/home"/>
      <Route path="/characters/:id" render={(routerProps) => {
              let id = routerProps.match.params.id
              let char
              if (this.props.characters.length > 0) {
                char = this.props.characters.find(el => el.id === parseInt(id))
              }
              return (
                <>
                  {this.props.characters.length>0 ? <CharShow character={char} />
                    : <h1>Loading</h1>}
                </>)
        }} 
      />
      <Route path="/characters" render={()=><CharIndex/>}/>
      <Route path="/creator" render={()=><CharForm/>} />

        </Switch>
        </BrowserRouter>
        <Button></Button>
      </div>
    );
  }
  
}

const mapStateToProps=(state)=>{
  return{character: state.character, characters:state.characters, races:state.races}
}
const mapDispatchToProps=(dispatch)=>{
  return {fetchChar: ()=>{dispatch(getCharacter())},fetchRaces:()=>{dispatch(getRaces())},fetchClasses:()=>{dispatch(getClasses())},fetchCharacters:()=>{dispatch(getCharacters())},
  fetchSpells:()=>{dispatch(getSpells())},fetchCharSpells:()=>{dispatch(getCharSpells())}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
