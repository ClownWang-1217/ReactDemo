import React from 'react';
import ReactDOM from 'react-dom';


export default class Clock extends React.Component
{
    constructor(props){
        super(props);
        this.state = {date:new Date()};

    }

    componentDidMount()
    {
        this.TimeID = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount()
    {
        clearInterval(TimeID);
    }
    render()
    {
        return (
            <div> <h1>date:{this.state.date.toLocaleTimeString()}</h1></div>
        );
    }
    tick() {
        this.setState(
            this.state.date = new Date()
        );
    }

}