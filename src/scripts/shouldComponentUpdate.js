import React from 'react';



export default class ShouldComponentUpdate extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            value:1,
            value1:1
        };
    }


    shouldComponentUpdate(nextProps,nextState)
    {
         console.log('this.state.value1:'+this.state.value1);
         console.log("nextState.value1:"+nextState.value1);
        if(this.state.value != nextState.value || this.state.value1 != nextState.value1)
            return true;
        else 
            return false;
    }
    render()
    {
        // console.log('this.state.value:'+this.state.value);
        // console.log("this.state.value1:"+this.state.value1);
        return (
            <div>
                <button type = 'button' onClick = {()=>{   this.setState({value1 :this.state.value1+1},()=>{console.log('=========this.state.value:'+this.state.value); });}} >点我</button>
                <div>value:{this.state.value}</div>
                <div>value1:{this.state.value1}</div>
                
            </div>

        );
    }
}