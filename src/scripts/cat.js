import React from 'react';


export function Cat(props)
{
    const mouse = props.mouse;
    return(
        
        <div>
            
            <img src='../images/logo.png' style={{ position: 'absolute', left: mouse.x, top: mouse.y }} ></img>
            X:{mouse.x} &nbsp&nbsp Y:{mouse.y}
        </div>
            
        
    );
}
 
export class Mouse extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {x:0,y:0};
        this._handleMouseMove = this.handleMouseMove.bind(this);
    }


    handleMouseMove(event)
    {
        this.setState({
            x:event.clientX,
            y:event.clientY
        });
    }
    render()
    {
        console.log('')
        return (
            <div  onMouseMove = {this._handleMouseMove}>
                <img src='../images/1.jpg'></img>
                {this.props.myrender(this.state)}
            </div>
            
        );
    }
}