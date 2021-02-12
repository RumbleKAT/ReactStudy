import React ,{useState} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });//여러개 input 값의 status를 바꿀 때 사용

    const {name,  nickname} = inputs;

    const onChange = (e) =>{
        const {value,name} = e.target;
        setInputs({
            ...inputs, //기존의 input 객체를 복사한후
            [name] : value //name 키를 가진 값을 value로 설정
        })
    }

    const onReset = () =>{
        setInputs({
            name : '',
            nickname : ''
        })
    }

    return(
        <>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}  />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>{name} ({nickname})
            </div>
        </>
    )
}

export default InputSample