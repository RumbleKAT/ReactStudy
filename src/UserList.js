import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);
    // useEffect(()=>{
    //     console.log('user 값이 설정됨')
    //     console.log(user);
    //     return ()=>{ //clean up 함수 
    //         console.log('user가 바뀌기 전...'); //unmount 시 호출 
    //         console.log(user)
    //     }
    // },[user]);//의존값 배열이 비어있다면, 컴포넌트가 처음 나타날때만 useEffect 에 등록한 함수가 호출됨
/*
    useEffect(()=>{
        console.log(user);
    })
    deps 파라미터를 생략했기 때문에 컴포넌트가 리렌더링 될 때마다 호출

    실제 DOM은 바뀐 내용이 있는 컴포넌트만 변경 but Virtual DOM에는 모든 걸다 렌더링한다.
*/
  return (
    <div>
        <b style={{
            cursor : 'pointer',
            color : user.active ? 'green' : 'black'
        }} onClick={()=>{
          dispatch({type : 'TOGGLE_USER' , id: user.id})
        }}>
        {user.username}</b> <span>({user.email})</span>
        <button onClick={()=> {
          dispatch({type : 'REMOVE_USER' , id: user.id})
        }}>삭제</button>
    </div>
  );
});

function UserList({ users}) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id}/>
      ))}
    </div>
  );
}

export default React.memo(UserList);
