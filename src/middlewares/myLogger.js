const myLogger = store => next => action =>{
    console.log(action)//action을 먼저 출력
    const result = next(action) //액션을 다음 미들웨어에게 전달한다.

    //업데이트 이후의 상태를 조회
    console.log('\t', store.getState()); // '\t' 는 탭 문자 입니다.

    return result;
}

export default myLogger;