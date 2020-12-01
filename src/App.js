
import './App.css';
import React from 'react'
import {connect} from 'react-redux'
import CharShow from "./components/charShow"
import { getCharacter, getRaces, getClasses, getCharacters, getSpells, getCharSpells, getSkills, resetChar, patchCharacter} from './redux/actions';
import { Button, StylesProvider } from '@material-ui/core';
import {Route,Switch, BrowserRouter} from 'react-router-dom'
import CharForm from './containers/charForm';
import Navigation from './components/navigation'
import CharIndex from './containers/charIndex';
import LevelForm from './components/levelForm';
import Diceroller from './components/diceRoller';

class App extends React.Component {

componentDidMount(){

  this.props.fetchRaces()
  this.props.fetchSkills()
  this.props.fetchClasses()
  this.props.fetchCharacters()
  // this.props.fetchCharSpells()
  this.props.fetchSpells()
}

    submitHandler = (char,charId) => {

      this.props.localPatchCharacter(char, charId)
      this.props.localResetChar()

    }

  render(){

    return (
      <StylesProvider injectFirst>
      <div className="App">
        <BrowserRouter>
        <Navigation/>
        <Switch>
        <Route path="/characters/:id/level" render={() => <LevelForm submitHandler={this.submitHandler}/>}/>
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
      <Route path="/" render={() => <Diceroller />} />
        </Switch>
        </BrowserRouter>
      </div>
      </StylesProvider>
    );
  }
  
}

const mapStateToProps=(state)=>{
  return{character: state.character, characters:state.characters, races:state.races}
}
const mapDispatchToProps=(dispatch)=>{
  return {fetchChar: ()=>{dispatch(getCharacter())},fetchRaces:()=>{dispatch(getRaces())},fetchClasses:()=>{dispatch(getClasses())},fetchCharacters:()=>{dispatch(getCharacters())},
  fetchSpells:()=>{dispatch(getSpells())},fetchCharSpells:()=>{dispatch(getCharSpells())},fetchSkills:()=>{dispatch(getSkills())},localResetChar: () => {dispatch(resetChar())}, localPatchCharacter: (inc, id) => {dispatch(patchCharacter(inc, id))}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
