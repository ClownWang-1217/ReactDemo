import React from 'react';
export default class Jsdemo extends React.Component{


    componentDidMount()
    {
        console.log('Jsdemo 已经成功挂载');
    }
    
    render(){
        return(
            <div>
                A默认页面
            </div>
        );
    }
}