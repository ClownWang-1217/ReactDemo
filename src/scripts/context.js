import React from 'react';


function ThemedButton(props)
{
    return(<div>
        <button theme = {props.theme}><h1>CONTEXT：{props.theme}</h1></button>
    </div>);
}

function Toobar(props)
{
    return (<div>
        <ThemedButton theme = {props.theme}/>
    </div>);
}


export default class App extends React.Component
{
    render()
    {
        return (
            <div >
                <Toobar theme='dark' />
            </div>
        );
    }
}