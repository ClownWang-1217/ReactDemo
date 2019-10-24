import Jsdemo from './jsdemo';
import Jsdemob from './jsdemob';
import Jsdemoc from './jsdemoc';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import React from'react';
export default function RouterComponent()
{
    return (<Router>
        <Link to='/'>首页1</Link>
        <Link to='/2'>首页2</Link>
        <Link to='/3'>首页3</Link>
        <Route exact path='/' component = {Jsdemo}></Route>
        <Route exact path='/2' component = {Jsdemob}></Route>
        <Route exact path='/3' component = {Jsdemoc}></Route>
    </Router>);
}