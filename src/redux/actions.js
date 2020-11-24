export const addNote =(obj)=>({type:"add", payload: obj})
export const dsi = (inc) => ({ type: "incDex", payload: inc })
export const str = (inc) => ({ type: "incStr", payload: inc })
export const con = (inc) => ({ type: "incCon", payload: inc })
export const int = (inc) => ({ type: "incInt", payload: inc })
export const wis = (inc) => ({ type: "incWis", payload: inc })
export const cha = (inc) => ({ type: "incCha", payload: inc })
export const setRace = (inc) => ({ type: "setRace", payload: inc })
export const setClass = (inc) => ({ type: "setClass", payload: inc })
export const setVision = (inc) => ({ type: "vis", payload: inc })
export const setSpeed = (inc) => ({ type: "setSpeed", payload: inc })
export const setName = (inc) => ({ type: "setName", payload: inc })
export const setImage = (inc) => ({ type: "setImage", payload: inc })
export const setHealth = (inc) => ({ type: "setHealth", payload: inc })
export const setInit = (inc) => ({ type: "INIT", payload: inc })
export const vis = (inc) => ({ type: "VIS", payload: inc })


export const getCharacter=()=>{
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/characters/1")
        .then(resp=>resp.json())
        .then(data=>{console.log(data)
            dispatch({type:"fetchChar",payload:data.data.attributes})})
    }
}

export const getCharacters = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/users/1")
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                dispatch({ type: "fetchChars", payload: data.data.attributes.characters })
            })
    }
}

export const getSpells = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/spells")
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                dispatch({ type: "fetchSpells", payload: data.data })
            })
    }
}

export const getCharSpells = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/characters/1")
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                dispatch({ type: "fetchCharSpells", payload: data.data.attributes.spells })
            })
    }
}

export const getRaces = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/races")
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: "fetchRaces", payload: data.data })
            })
    }
}

export const getClasses = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/class_types")
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: "fetchClasses", payload: data.data })
            })
    }
}

export const postCharacter = (char) => {
    console.log(JSON.stringify({character:char}))
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/characters", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
        body: JSON.stringify({character:
                {health: char.health,
                strength:char.strength,
                wisdom:char.wisdom,
                dexterity:char.dexterity,
                intelligence: char.intelligence,
                charisma: char.charisma,
                constitution: char.constitution,
                level: char.level,
                image: char.image,
                darkvision: char.darkvision,
                speed: char.speed,
                proficiency: char.proficiency,
                name: char.name,
                class_type: char.class_type,
                race: char.race,
                armor: char.armor,
                initiative: char.initiative,
                user_id: 1}
            }
            )
        }
    
    )
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: "postChar", payload: data.data.attributes })
            })
    }
}
