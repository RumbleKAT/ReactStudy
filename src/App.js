import React, { useRef, useState, useMemo,useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중...')
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback( e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  },[inputs]);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : true
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
      active : false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(e => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  },[users,username, email]);
  
  const onToggle = useCallback(id =>{
    setUsers(
      users.map(user=>{
        return user.id === id ? {...user, active: !user.active}  : user
      })
    )
  },[users]);

  const onRemove = useCallback(id => {
      setUsers(users.filter(user => user.id !== id));
    },[users]
  ); 
  /*
    함수 안에 사용하는 상태 혹은 props 가 있다면, 꼭 deps 배열 안에 포함해야한다. 
    만약 그렇지 않으면, 현재 있는 값을 가장 최신의 값으로 참조 
  */

  //const로 설정한 함수들이 새로 리렌더링할때 마다 새로 만들어짐 -> 한번 만든 함수를 필요할때만 새로만들고 재사용을 위해 useCallback을 사용한다.


  const count = useMemo(()=> countActiveUsers(users),[users]); //리렌더링할때, 바뀐것만 체크해서 렌더링한다.
  return (
  <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자 수 : {count}</div>
    </div>
  );
}

export default App;
