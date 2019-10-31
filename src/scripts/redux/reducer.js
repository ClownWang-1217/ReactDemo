import {CHANGE_INPUT,ADD_LIST,DEL_LIST} from './src/config/actionTypes'
const defaultState = {
    inputValue:'write something',
    list:[
        '获取store中的state——当我们用action触发reducer改变了state时',
        '需要再拿到新的state里的数据',
        '毕竟数据才是我们想要的'

    ]
};
export default (state = defaultState,action) =>{

    console.log(action);

    if(action.type === CHANGE_INPUT)
    {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_LIST)
    {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.value);
        return newState;
    }
    if(action.type === DEL_LIST)
    {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        console.log('newstate'+newState.list);
        return newState;
    }
    return state;
}