import React from 'react';
import {useSelector , useDispatch } from 'react-redux';
import Counter from '../Counter';
import { increase, decrease, setDiff } from '../modules/counter';
import { increaseAsync, decreaseAsync } from '../modules/counter'


//container component란 리덕스 스토어의 상태를 조회하거나 액션을 dispatch할 수 있는 컴포넌트 

function CounterContainer(){
    //useSelector는 리덕스 스토어의 상태를 조회하는 hook
    const { number, diff } = useSelector(state => ({
        number : state.counter.number,
        diff : state.counter.diff
    }));
    
    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할수 있게 하는 hook
    const dispatch = useDispatch();
    //각 액션들을 디스패치하는 함수
    const onIncrease = () => dispatch(increaseAsync());
    const onDecrease = () => dispatch(decreaseAsync());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return(
        <Counter
            number ={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
            />
    )
}
export default CounterContainer;