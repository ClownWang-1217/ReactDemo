import React from 'react';
import ReactDOM from 'react-dom';
import Json from './json'

function Logining(props) {
    return (
        <button onClick={props.onClick} >登录</button>
    )
}

function Loginout(props) {
    console.log(Json.r);
    return (
        <button onClick={props.onClick} >退出登录</button>
    )
}

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLogined: false };
        this.handleLoginClick = this.handleloginClick.bind(this);
        this.handleLogoutClick = this.handlelogoutClick.bind(this);
    }

    handleloginClick() {
        console.log(this.state.isLogined);
        this.setState({ isLogined: true });
    }
    handlelogoutClick() {
        console.log(this.state.isLogined);
        this.setState({ isLogined: false });
    }

    render() {
        if (this.state.isLogined) {
            console.log(this.state.isLogined);
            return (

                <div>
                    <Loginout onClick={this.handleLogoutClick} />
                    {false && <h1>false</h1>}

                </div>
            );
        }
        else {
            return (
                

                <div>
                    <Logining onClick={this.handleLoginClick} />
                    {true && <h1>true</h1>}
                </div>
            );
        }

    }
}