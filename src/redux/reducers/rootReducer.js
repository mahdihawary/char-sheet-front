import {combineReducers} from 'redux'

const defaultState={
    user:{},
    showChar:{},
    character: {
        health: 0,
        strength: 8,
        wisdom: 8,
        dexterity: 8,
        intelligence: 8,
        charisma: 8,
        constitution: 8,
        level: 1,
        image: '',
        darkvision: 0,
        speed: 30,
        proficiency: 2,
        name: '',
        class_type: '',
        race: '',
        armor: 8,
        initiative: 0,
        user_id: 1
    },
    races:[],
    classTypes:[],
    characters:[],
    spells:[],
    charSpells:[],
    skills:[],
    abilities:[],
    charId:0
}

function userReducer(state=defaultState.user, action){
    switch (action.type) {
        case "fetchUser":
            return action.payload
    
        default:
            return state
    }}

function charIndexReducer(state = defaultState.characters, action) {
    switch (action.type) {
        case "fetchChars":
            return action.payload
        case "postChar":
            return [...state,action.payload]
        case "changeChar":
            let newChars = [...state]
            let index = newChars.findIndex(x => x.id === action.payload.id)
            newChars[index] = action.payload
            return newChars 

        default:
            return state
    }
}


function spellsReducer(state = defaultState.spells, action) {
    switch (action.type) {
        case "fetchSpells":
            return action.payload

        default:
            return state
    }
}

function skillsReducer(state = defaultState.skills, action) {
    switch (action.type) {
        case "fetchSkills":
            return action.payload

        default:
            return state
    }
}

function charSpellsReducer(state = defaultState.charSpells, action) {
    switch (action.type) {
        case "fetchCharSpells":
            return action.payload

        default:
            return state
    }
}

    function charReducer(state = defaultState.character, action) {
        console.log( state)
        switch (action.type) {
            case "post":
                return action.payload
            case "incDex":
                return { ...state, dexterity: action.payload + state.dexterity }
            case "incStr":
                return { ...state, strength: action.payload + state.strength }
            case "incCon":
                return { ...state, constitution: action.payload + state.constitution }
            case "incInt":
                return { ...state, intelligence: action.payload + state.intelligence }
            case "incWis":
                return { ...state, wisdom: action.payload + state.wisdom }
            case "incCha":
                return { ...state, charisma: action.payload + state.charisma }
            // case "incAll":
            //     return { ...state, dexterity: action.payload + state.dexterity }
            case "setRace":
                return { ...state, race: action.payload }
            case "setClass":
                console.log("in case")
                return{...state, class_type: action.payload}
            case "VIS":
                return { ...state, darkvision: action.payload }
            case "setSpeed":
                return {...state, speed:action.payload}
            case "setName":
                return { ...state, name: action.payload }
            case "setImage":
                return { ...state, image: action.payload }
            case "setHealth":
                return { ...state, health: action.payload }
            case "INIT":
                return { ...state, initiative: action.payload }
            case "resetChar":
                return defaultState.character
            case "setChar":
                return action.payload
            case "level":
                return { ...state, level: state.level+1}
            case "prof":
                return { ...state, proficiency: state.proficiency + 1 }
            default:
                return state
        }
    }

function racesReducer(state = defaultState.races, action) {
    switch (action.type) {
        case "fetchRaces":
            return action.payload

        default:
            return state
    }
}


function classReducer(state = defaultState.classTypes, action) {
    switch (action.type) {
        case "fetchClasses":
            return action.payload

        default:
            return state
    }
}

function charIdReducer(state = defaultState.charId, action) {
    switch (action.type) {
        case "setId":
            return action.payload

        default:
            return state
    }
}

function showCharReducer(state = defaultState.showChar, action) {
    switch (action.type) {
        case "fetchChar":
            return action.payload

        default:
            return state
            }
    }


const rootReducer = combineReducers({
    user: userReducer,
    character: charReducer,
    showChar: showCharReducer,
    races: racesReducer,
    classTypes:classReducer,
    characters:charIndexReducer,
    spells:spellsReducer,
    charSpells:charSpellsReducer,
    skills:skillsReducer,
    CharId: charIdReducer
})

export default rootReducer