import React, {useState, useEffect, useReducer } from 'react';
import axios from 'axios';

function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return{
                loading: true,
                data :null,
                error:null
            };
        case 'SUCCESS':
            return{
                loading : false, /* 로딩이 완료됨과 동시에 loading false로 설정하여 리렌더링 */
                data: action.data,
                error:null
            };
        case 'ERROR':
            return{
                loading: false,
                data : null,
                error : action.error
            }
        default :
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}


function Users(){
    const [state, dispatch] = useReducer(reducer,{
        loading : false,
        data : null,
        error: null
    })

    const fetchUsers = async () =>{
        dispatch({ type : 'LOADING'})
        try{
            //loading setTrue
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({ type : 'SUCCESS', data : res.data});
        }catch(e){
            dispatch({type :'ERROR', error : e});
        }
    }

    useEffect(()=>{
        fetchUsers();
    },[]);

    const { loading, data: users, error } = state; //state.data를 users 키워드로 조회

    if(loading) return  <div>로딩중...</div>;
    if(error) return <div>에러가 발생했습니다.</div>
    if(!users) return null;

    console.log(users);

    return(
        <>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li>  
            ))}
        </ul>
        <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    )
}

export default Users;

