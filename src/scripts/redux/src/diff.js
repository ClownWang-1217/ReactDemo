import React from'react';
import store from '../index';
export default class Diff extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = store.getState();
        this._handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this._handleStoreChange);
    }



    handleStoreChange()
    {
        this.setState(store.getState());
    }

    render()
    {
        let list = this.state.list;
        console.log(this.state.list);
        return(
            <div>
                
                 {list.map(item => {return <div key = {item + Math.random()}><button >{item}</button></div>})}
                
            </div>
        );
    }
}