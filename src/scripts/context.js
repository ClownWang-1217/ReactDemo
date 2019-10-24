import React from 'react';



const ThemeContext = React.createContext('light');
function ThemedButton(props) {
    return (<div>
        <ThemeContext.Consumer>
            {theme=>{return <button ><h1>CONTEXT：{theme} {props.propTheme}</h1></button>}}
            
        </ThemeContext.Consumer>

    </div>);
}

function Toobar(props) {
    return (<div>
        <ThemeContext.Provider value='green'><ThemedButton {...props} /></ThemeContext.Provider>
        
    </div>);
}


export default class App extends React.Component {
    render() {
        return (
            <div >
                <ThemeContext.Provider value='blue'><Toobar propTheme = 'red' /></ThemeContext.Provider>

            </div>
        );
    }
}