import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Jsdemo from './jsdemo';
import Jsdemob from './jsdemob';
import Jsdemoc from './jsdemoc';
import Clock from './clock';
import LoginControl from './login'
import NavBar from './nav';
import CustomTextInput from './reftest';
import FormComponent from './form';

import ShouldComponentUpdate from './shouldComponentUpdate';

import App from './context';

import { Cat, Mouse } from './cat';


import MyPromise from './promise';

import RouterComponent from './route';

import Index from './redux/src/index';
import Diff from './redux/src/diff'


// if(0)
// {
//     class Index extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = { route: props.indexRout }
//         }

//         componentDidMount() {
//             window.addEventListener('hashchange', () => {
//                 this.setState({
//                     route: window.location.hash.substr(1)
//                 })
//             })
//         }

//         render() {
//             let Child;
//             switch (this.state.route) {
//                 case '/jsdemo':
//                     Child = Jsdemo;
//                     break;
//                 case '/jsdemob':
//                     Child = Jsdemob;
//                     break;
//                 case '/jsdemoc':
//                     Child = Jsdemoc;
//                     break;
//             }

//             return (
//                 <div>
//                     <div className='list-group list-group-horizontal'>

//                             <a className='list-group-item active' href='#/jsdemo'> 跳转jsdemo</a>


//                             <a className='list-group-item ' href='#/jsdemob'> 跳转jsdemob</a>


//                             <a className='list-group-item ' href='#/jsdemoc'> 跳转jsdemoc</a>

//                     </div>
//                     <Child />
//                 </div>


//             );
//         }
//     }


//     ReactDOM.render(
//         <Index indexRout='/jsdemo' />,
//         document.getElementById('root')
//     );
// }
//else{
// class Index extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { route: props.indexRout };
//         this._handleAonClick = this.handleAonClick;
//     }

//     handleAonClick(e) {
//         // e.preventDefault();
//         console.log('this link was clicked!');
//     }
//     componentDidMount() {
//         window.addEventListener('hashchange', () => {
//             this.setState({
//                 route: window.location.hash.substr(1)
//             })
//         })
//     }

//     renderCat(mouse) {
//         return (
//             <Cat mouse={mouse} />
//         );
//     }


//     render() {


//         return (

//             <div>
//                 <div style={{ position: 'absolute ' ,zIndex:'-100'}}>
//                     <Mouse myrender={this.renderCat} >


//                     </Mouse>
//                 </div>


//                 <div>
//                     <Router>
//                         <div>
//                             <ul>
//                                 <li><Link to='/'>首页</Link></li>
//                                 <li><Link to='/jsdemob'>关于</Link></li>
//                                 <li><Link to='/jsdemoc'>主题列表</Link></li>
//                                 <li><Clock></Clock></li>
//                             </ul>
//                             <hr />
//                             {this.props.children}
//                             <a href='http://www.baidu.com' onClick={this._handleAonClick}>test jump</a>
//                             <a href="mailto:449127919@qq.com">发送邮件</a>
//                             <a href="tel://18092958684">一键拨打电话</a>
//                             <a href="sms:18092958684">一键发送短信</a>
//                             <a href="../images/1.jpg" download="../images/1.jpg">下载图片</a>
//                             <LoginControl />

//                             <div>
//                                 <h1>下面这是一个表单</h1>
//                                 <FormComponent />
//                                 <ShouldComponentUpdate />
//                                 <h1>Context Test</h1>
//                                 <App />
//                                 <MyPromise />
//                             </div>
//                         </div>



//                     </Router>
//                 </div>


//             </div>


//         );
//     }
// }


// ReactDOM.render(
//     <Index >
//         <Route exact path="/" component={Jsdemo} />
//         <Route exact path="/jsdemob" component={Jsdemob} />
//         <Route exact path="/jsdemoc" component={Jsdemoc} />
//         <CustomTextInput></CustomTextInput>

//     </Index>,
//     document.getElementById('root')
// );
//}


ReactDOM.render(<div>
    <Index/>
    <Diff />
</div>, document.getElementById('root'));

