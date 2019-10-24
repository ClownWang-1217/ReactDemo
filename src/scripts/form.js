import React from 'react';



export default class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this._handleOnSubmit = this.handleOnSubmit.bind(this);
        this._handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnSubmit(e) {
        console.log(this.state.value)
        // e.preventDefault();
    }
    handleOnChange(e) {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    componentDidCatch() {
        console.log("componentDidCatch");
    }
    render() {
        console.log('重新更新');
        return (
            <div>
                <form onSubmit={this._handleOnSubmit}>
                <label>
                    {/* <input type='text' name='name' value={this.state.value} onChange={this._handleOnChange}>
                    </input> */}
                    <input type='text' name = 'aa'></input>
                </label>
                <input type="submit" value="Submit" />
                <button type = 'submit'> Submit</button>
                {/* <input type="radio" name="yes-no" id='yes'/>确定
            
                    <input type="radio" name="yes-no" id='no' />取消 */}
            

                </form>

                <label htmlFor='yes'>点击这里也可选择 确定 选项 </label>
                <label htmlFor='no'>点击这里也可选择 确定 选项</label>
            </div>
            
            
      
        );
    }
}