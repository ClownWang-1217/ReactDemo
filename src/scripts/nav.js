import React from 'react';
import {NavLink} from 'react-router-dom';



function NavBar()
{
    return(<div>
        <div>
            <NavLink exact to = '/'>Jsdemo</NavLink>| &nbsp;
            <NavLink to = '/Jsdemob'>Jsdemob</NavLink>| &nbsp;
            <NavLink to = '/Jsdemoc'>Jsdemoc</NavLink>
        </div>
    </div>);
    
}
export default NavBar;
