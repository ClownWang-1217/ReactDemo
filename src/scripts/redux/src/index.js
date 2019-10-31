import React from 'react';
import store from '../index';
// import css from'./style/style.css'
// import './style/style.less'
import './style/style.scss'
import SimpleBarcode from '../../barcode'

import {changeInputAction,addListAction,delListAction} from './config/actionCreator'

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(store.getState());
        this._handleOnChange = this.handleOnChange.bind(this);
        this._handleOnClick = this.handleOnClick.bind(this);
        this._handleStoreChange = this.handleStoreChange.bind(this);
        this._handleItemOnClick = this.handleItemBtnOnClick.bind(this);
        store.subscribe(this._handleStoreChange);
    }

    componentDidMount() {

    }
    handleOnChange(event) {
        const action = changeInputAction(event.target.value);
        store.dispatch(action);
    }
    handleOnClick(event) {
        console.log('handleOnClick====>' + this.inputText.value);
        const action = addListAction(this.inputText.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleItemBtnOnClick(event) {
        let json = JSON.parse(event.target.value);
        console.log("key=>>" + json.Index + "||||value==>" + json.value);
        const action = delListAction(json.Index);
        store.dispatch(action);
    }
    render() {
        const list = this.state.list;
        let index = 0;
        return (
            <div>
                 <h1 style = {{textAlign:'center'}}>---------------以下是数据改变--------------</h1>
                <br/><br/>
                <div><input type='text' placeholder={this.state.inputValue} onChange={this._handleOnChange} ref={input => { this.inputText = input }}></input><button type="button" onClick={this._handleOnClick}>Add</button>
                
                </div>
                <div>
                    {
                        list.map
                            (
                                item => 
                                {
                                    return <div key={index}><button className='testbtn'  value={JSON.stringify({ Index: index++, value: item })} onClick={this._handleItemOnClick}>{item}</button><span style={{color:'red'}}>点击删除</span></div>
                                }
                            )
                    }
                </div>
                <br/><br/>
                <h1 style = {{textAlign:'center'}}>---------------以下是数据同步显示-----------------</h1>
                <br/><br/>
                <div>
                <SimpleBarcode/>    
                </div>
                
            </div>
        );
    }
}