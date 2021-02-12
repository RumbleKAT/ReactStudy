import React ,{useState , useRef} from 'react'; //특정 DOM을 접근하기 위한 useRef

function InputSample(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });//여러개 input 값의 status를 바꿀 때 사용

    const nameInput = useRef();
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
        nameInput.current.focus();
    }

    /*
        1. useRef()를 사용하여 Ref 객체를 만든다.
        2. 선택하고 싶은 DOM에 매핑하면 .current는 해당 DOM을 가르키게된다. 
    */

    return(
        <>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}  />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>{name} ({nickname})
            </div>
        </>
    )
}

export default InputSample