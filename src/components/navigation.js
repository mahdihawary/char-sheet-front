import React from 'react'
import {NavLink} from 'react-router-dom'


function Navigation(){


    return(
       <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/creator">Create</NavLink>
        </div>
    )

}

export default Navigation