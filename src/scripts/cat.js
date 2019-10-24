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
        this.state = {x:0,y:0,laterx:0,latery:0};
        this._handleMouseMove = this.handleMouseMove.bind(this);
        this._handleScroll = this.handleScroll.bind(this);
        
    }


    componentDidMount()
    {
        window.addEventListener('scroll',this._handleScroll);
    }
    
    handleMouseMove(event)
    {

        this.setState({
             x:event.clientX +this.state.laterx,
             y:event.clientY +this.state.latery          
        });
    }
   
    handleScroll(event)
    {
  
       var scrollX = document.documentElement.scrollLeft;
       var scrollY = document.documentElement.scrollTop;
        console.log('handleScroll>>>>>>>>>>>>>>>>>'+scrollX + '============='+scrollY);
        this.setState({
             x:this.state.x+(scrollX - this.state.laterx),
             y:this.state.y+(scrollY - this.state.latery),
             laterx:scrollX,
             latery:scrollY
        },()=>{

        })
    }
    render()
    {
        console.log('render>>>>>>>>>>>>>>>>>>'+this.state.x + '============='+this.state.y);
        return (
            <div style = {{position:"relative"}} id = 'sroll' onMouseMove = {this._handleMouseMove} >
                <img src='../images/1.jpg'></img>
                {this.props.myrender(this.state)}
            </div>
            
        );
    }
}