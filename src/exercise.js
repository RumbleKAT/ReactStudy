import { createStore } from 'redux';

//createStore는 스토어를 만들어주는 함수, react 프로젝트 당 1개

const initalState ={
    counter : 0,
    text : '',
    list : []
}

/* 액션 타입 */
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'

/* 액션 생성함수 정의 */
function increase(){
    return{
        type : INCREASE
    }
}

const decrease = () =>({
    type : DECREASE
})

const changeText = text => ({
    type : CHANGE_TEXT,
    text
})

const addToList = item => ({
    type : ADD_TO_LIST,
    item
})

function reducer(state = initalState, action){
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return{
                ...state,
                counter: state.counter -1
            }
        case CHANGE_TEXT:
            return{
                ...state,
                text : action.text
            }
        case  ADD_TO_LIST:
            return{
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state;
    }
}

//스토어 생성 
const store = createStore(reducer);

console.log(store.getState());

const listener = () =>{
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener)

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText('안녕하세요'))
store.dispatch(addToList({id: 1, text : 'ㅇㅇㅇ'}))







