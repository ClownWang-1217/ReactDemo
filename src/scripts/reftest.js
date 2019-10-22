import React from 'react';




    
function Parent(props)
{
    function handleOnchange()
    {

        console.log('tiaoshi')
    }
    return (
        <div>
            <input type="text"  onChange = {props.handleOnchange} ref = {props.InputRef}/>
        </div>
    );
}
export default class CustomTextInput extends React.Component
{
    constructor(props)
    {
        super(props);
        this.textInput = React.createRef();
        this._foucusTextInput = this.focusTextInput.bind(this);
        this.inputElement = React.createRef();
        
    }

    handleOnchange(e)
    {
       console.log(this.inputElement.current.value);
    }
    componentDidMount()
    {
        console.log('componentDidMount');
        this.textInput.current.focus();
    }
    focusTextInput()
    {
        console.log(this.inputElement.current.defaultValue);
        console.log(this.inputElement.current.value);
    }

    render()
    {
        
        return(
            <div>
                <input type='text' defaultValue = '' ref={this.textInput}></input>
                <input type='button' defaultValue = 'Focus the text input' onClick = {this._foucusTextInput}></input>
                <Parent InputRef = {this.inputElement} handleOnchange = {this.handleOnchange.bind(this)}/>
            </div>
        );
    }
}