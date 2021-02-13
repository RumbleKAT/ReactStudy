import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInput';
// import Users from './Users';
import CounterContainer from './containers/CounterContainer';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initalState = {
  inputs : {
    username : '',
    email : ''
  },
  users : [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
}

function reducer(state, action){
  switch(action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name] : action.value
        }
      };
    case 'CREATE_USER':
      return{
        inputs : initalState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER' :
      return{
        ...state,
        users : state.users.map(user => 
          user.id === action.id ? {...user, active : !user.active} : user  
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users : state.users.filter(user => user.id !== action.id)
      }
    default:
      return state;
  }
}

//userDispatch  
export const UserDispatch = React.createContext(null);

function App() {
  // const [state, dispatch] = useReducer(reducer, initalState);
  // const { users } = state;
  // const count = useMemo(() => countActiveUsers(users), [users]);

  // const onChange = useCallback(e =>{
  //   const {name, value} = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // },[]);
  // const onCreate = useCallback(()=>{
  //   dispatch({
  //     type : 'CREATE_USER',
  //     user : {
  //       id : nextId.current,
  //       username,
  //       email
  //     }
  //   });
  //   onReset();
  //   nextId.current += 1;
  // },[username,email, onReset]);

  // const onToggle = useCallback(id=>{
  //   dispatch({
  //     type : 'TOGGLE_USER',
  //     id
  //   })
  // },[]);

  // const onRemove = useCallback(id=>{
  //   dispatch({
  //     type : 'REMOVE_USER',
  //     id
  //   })
  // },[]);

  return (
    <>
      <CounterContainer/>
    </>
  )
}

export default App;
