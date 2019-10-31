import {CHANGE_INPUT,ADD_LIST,DEL_LIST} from './actionTypes'


export const changeInputAction = (value)=>{
    return {
        type:CHANGE_INPUT,
        value:value
    }
};

export const addListAction = (value)=>{
    return {
        type:ADD_LIST,
        value:value
    }
};

export const delListAction = (value)=>{
    return {
        type:DEL_LIST,
        value:value
    }
};