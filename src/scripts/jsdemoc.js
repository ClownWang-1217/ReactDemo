import React from 'react';

export default class Jsdemoc extends React.Component
{


    componentDidMount()
    {
        console.log('Jsdemo_C 已经成功挂载');
    }
    
    render(){
        return(
            <div> C页面</div>
        );
    }
}