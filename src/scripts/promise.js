import React from 'react';


export default class MyPromise extends React.Component {

    constructor(props) {
        super(props);
        this.state = { result: 'Promise' };
        this._handleOnClick = this.handleOnClick.bind(this);
    };

   asyncDo() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                resolve('success');
            }, 3000);
        }
        );

    };


    async handleOnClick() {
        let res = await this.asyncDo();
        this.setState({result:res });
        
    }


    render() {
        return <button onClick={this._handleOnClick}>{this.state.result}</button>;
    }
}