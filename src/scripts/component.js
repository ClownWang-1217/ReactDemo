import React from 'react';
import ReactDom from 'react-dom';

import '../images/1.jpg';
import '../images/2.jpg';
import '../images/3.jpg';
import '../images/our-team.jpg';
import '../images/our-team2.jpg';
import '../images/our-team3.jpg';
import '../images/portfolio1.jpg';
import '../images/portfolio2.jpg';
import '../images/portfolio3.jpg';
import'../style/test.css';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-muted">React.Component</h1>
                <h1 className="test">测试字体样式</h1>
                <img src="../images/portfolio5.jpg"></img>
            </div>
        );
    }
}

ReactDom.render(<MyComponent />, document.getElementById('content'));