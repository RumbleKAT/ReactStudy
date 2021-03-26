---
description: React Study 21.02.19
---

# React Study

## 1. **브라우저의 역사 + JS 역사 그리고 call stack ...ES6**

{% embed url="https://www.youtube.com/watch?v=wcsVjmHrUQg" %}

### [https://alstn2468.github.io/Javascript/2020-02-28-callstack/](https://alstn2468.github.io/Javascript/2020-02-28-callstack/) 

call stack 관련 설명 블로그 URL

{% embed url="https://reactjs-kr.firebaseapp.com/docs/jsx-in-depth.html" %}

[https://mc.coupang.com/ssr/desktop/order/list?orderType=ALL](https://mc.coupang.com/ssr/desktop/order/list?orderType=ALL)

## **2. 리엑트란 무엇인가?**

**2-1. 리엑트의 역사 / 관련 경쟁자**

**2-2. 리엑트 생명주기**

**2-3. 리엑트의 장점 / Virtual DOM**

**2-4. 함수형 컴포넌트와 클래스형 컴포넌트의 차이**

## **3. 고차원 리엑트 사용법**

**3-1. 커링\(curring\)** [**https://sujinlee.me/currying-in-functional-javascript/**](https://sujinlee.me/currying-in-functional-javascript/)\*\*\*\*

\*\*\*\*[**3-2. 하이어 오더 컴포넌트 \(aka Interface\)**](undefined.md)\*\*\*\*

**3-3. Reducer / Context API**

**3-4. Redux Thunk / Redux** 

\*\*\*\*

## **DOM 렌더링 과정**

1. DOM, CSSOM 생성
2. 렌더트리 생성 \(스타일정보, 실제화면에 표현되는 노드로 구성\) ㄴ display :none 은 화면에서 어떠한 공간도 차지하지 않아 Render Tree를 만드는 과정에서 제외
3. Layout 브라우저의 viewport 내에서 각 노드들의 정확한 위치와 크기를 계산한다. -&gt; 렌더링 최적화 Reflow, Repaint 줄이기
   * 페이지 초기 렌더링시
   * 윈도우 리사이징시
   * 노드 추가 또는 제거
   * 요소의 위치, 크기 변경
   * 폰트변경

     visibilty : none -&gt; display : none

     Reflow, Repaint 속성 사용 줄이기

     -&gt; absolute, fixed
4. Virtual DOM, Angular Change Detector DOM에 접근하여, 여러번의 속성변화, 스타일변화를 수행하면, Reflow, Repaint가 발생 =&gt; Virtual DOM은 이러한 변화를 한번에 묶어서 DOM에 전달 반복적으로 일어나는 부분이 줄어들어 성능이 개선됨

## REACT 라이프 사이클

constructor -&gt; getDerivedStateFromProps -&gt; render -&gt; componentDidMount -&gt; getDerivedStateFromProps -&gt; shouldComponentUpdate -&gt; render -&gt; getSnapshotBeforeUpdate -&gt; componentDidupdate -&gt; componentDidUnmount

## 순수함수란?

순수함수란, 같은 입력이 주어지면, 같은 출력을 반환 사이드 이펙트가 없어야한다. -&gt; 순수함수를 이용한, 사이드 이펙트를 제어하는 안정적인 프로그래밍

## OOP와 함수형 프로그래밍

OOP와 함수형 프로그래밍의 차이 : 객체지향은 객체 안에서 상태를 저장하고, 이상태를 이용하여 메소드를 추가하고 상태변화를 설정하여 다양한 기능을 사용한다. 반면, 함수형 프로그래밍은 상태를 제어하는 것보다 상태를 저장하지 않고 없애는 데 주력한다. =&gt; 몇몇 자료구조를 이용하여 최적화된 동작을 만든다.

## AJAX

AJAX란? JS를 이용하여 비동기적으로 서버와 브라우저가 데이터를 교환할수 있는 통신방식 -&gt; 페이지 일부만을 갱신하고도 동일한 효과를 볼수 있다. -&gt; 빠르고 부드러운 화면효과

## Promise 와 Callback

Promise , Callback 비동기 처리를 위해 사용되는 패턴으로, callback은 함수의 처리 순서를 보장하기 위해서 함수를 중첩하게 사용하는 경우가 발생 -&gt; 에러처리가 힘들고 가독성 저하

Promise는 생성자함수를 통해 인스턴스화하며, 비동기 처리에 성공하면, resolve 메소드를 호출하여, 비동기 처리 결과를 후속처리 메소드로 전달한다. -&gt; promise를 반환 then을 이용한 메소드 체이닝 방식으로 콜백헬 문제 해결

## Async , Await

Promise를 더욱 쉽게 사용할 수 있도록 하는 ES2017문법 함수의 앞부분에 Async, 함수 내부에서 Promise의 앞부분에 await 키워드를 사용한다. 코드가 간결해지는 반면, 에러처리를 위해 try, catch를 사용한다.

원시타입 boolean , Number, String, Undefined, null, symbol -&gt; Undefined는 선언은 되어 있으나, 값은 없는 상태 -&gt; null은 자료형이 객체이며, 빈값을 의미한다.

## 실행 컨텍스트

전역컨텍스트랑, 함수 컨텍스트 2가지가 존재 -&gt; 전역 실행 후 함수 호출될때마다 함수 컨텍스트 생성 컨텍스트를 생성시에 변수객체, 스코프체인, this가 생성된다. 변수들은 변수 객체 안에서 값을 찾고 없으면, 스코프 체인을 따라서 올라간다. JS 코드가 실행되기 위해서, 변수객체, 스코프체인, this 정보들을 담고있는 곳을 실행컨텍스트라고한다.

## 호이스팅이란? 

-&gt; 변수를 선언하고, 초기화했을때, 선언부가 최상단으로 끌어올려지는 현상

## 클로저란?

반환된 내부함수가 자신이 선언됬을때의 환경인 스코프를 기억하여, 자신이 선언되었을때의 환경 밖에서 호출되어도, 그 환경에 접근할 수 있는 함수, 자신이 생성될때 환경을 기억하는 함수 

1\) 현재 상태를 기억하고 변경된 최신 상태를 유지하기 위해 

2\) 전역 변수의 사용을 억제하기 위해 

3\) 정보 은닉

## 가비지 컬렉터의 역할 

메모리 할당을 추적하고 할당된 메모리 영역이 필요하지 않는 영역일 경우 판단하여 회수,  \(Mark and Sweep 알고리즘\)

## 순환참조 

객체간 서로 순환 참조하여 가비지컬렉터가 작동하지 않고 메모리누수 발생 -&gt; null을 사용하여 연결을 끊는다.

JS 배열은 Hashmap + 링크드 리스트 -&gt; 이를 해결하기 위해 타이핑된 배열 Int8Array, Float32Array가 추가

## 이벤트 루프 

자바스크립트는 싱글스레드 언어, 함수 호출에 따라 스택이 쌓이고, 스택의 맨위에서 아래로 한번에 하나씩 처리 이벤트 루프로 동시성을 지원 -&gt; 콜스택에서 실행중인 것을 확인하고, 이벤트 큐에 작업이 있는지 확인해서 콜스택에 작업이 비어있으면, 이벤트큐의 작업을 콜스택으로 옮겨서 실행

## 프로토 타입

자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제어 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메소드를 프로토타입에 미리 구현함으로써 상위 객체인 프로토타입의 자산을 공유 **proto** 접근자로 자신의 프로토타입, 즉 프로토타입 내부슬롯에 접근가능 프로토타입체인이란? 객체의 프로퍼티에 접근하려할때, 객체에 접근하려는 프로퍼티가 없으면, 자신의 부모역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. \(최상위 객체는 Object.prototype\) prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가르킨다.

This 일반함수의 this는 window를 가리키고, 화살표 함수의 this는 언제나 상위스코프의 this를 가리킨다. Call, Bind, Apply use strict mode에서 일반함수 this는 undefined

ES6 스펙지원을 위해 Babel\(트렌스 파일러\) var와 let, const의 차이 -&gt; var는 함수 레벨의 스코프를 지원 -&gt; let,const는 블록 스코프를 지원

Redux -&gt; 리엑트에서 전역의 상태를 관리하기 위해서 사용하는 방법 컴포넌트간의 상태들을 한곳에 모아놓고 공유해서 사용하는 방식 Context API, Redux, MobX 등의 상태관리가 있으며, 대규모 개발에서 유지보수성이나 작업효율을 위해 Redux를 사용

```text
React-Redux의 3가지 조건
1. 단일 스토어
2. 읽기 전용상태(기존의 객체는 건드리지 않고, 새로운 객체를 생성하여 사용)
3. Reducer는 순수한 함수 (파라미터 외의 값에는 의존X)
```

액션타입을 정하고, 액션생성함수를 만들고, 액션을 사용하는 리듀서 함수를 만들고 index.js에서 스토어를 만들어 provider로 스토어를 props로 전달

Presentational Comp , Container Comp로 분리하여, Container Comp에서 connect 함수를 사용하여, mapStateToProps, mapDispatchToProps 두가지를 사용한다.

Redux-saga와 observable -&gt; redux의 비동기 액션을 처리하기 위한 라이브러리, Generator 기반 ,RxJS 기반 Worker + Watcher 구조

Context API -&gt; 리엑트에서 전역상태를 관리하기 위한 기능

클래스형과 함수형의 차이 -&gt; 클래스 형은 라이프사이클 메소드 사용, render 함수 필요 -&gt; 함수형은 hook을 사용함



Typescript의 장점 -&gt; 동적타입의 언어인 JS의 약점을 보완하기 위해 타입을 지정 1. 타입이 필요한 이유는 메모리 절약\(참조하는 데이터의 크기를 알아야함\) 2. 에러 제어 3. 협업 4. 코드에디터의 도움 5. Babel을 안써도 됨

Angular와 React의차이 -&gt; 프레임워크 vs 라이브러리 -&gt; 반제품 vs 자유로움

```text
Angular는 양방향 바인딩 개념으로 Model과 View가 연결되어 있어 데이터 값이 한쪽에서 변화하면,
다른쪽에서도 바로 업데잍  진행
서비스는 컴포넌트간의 의존성관리를 용이하게한다. Directive를 이용하여 커스텀 HTML 태그를 작성할수 있다.

React는 Virtual DOM을 가지고 있다. 상태를 비교하여 부분적으로 랜더링을 할수 있어서 속도가 빠르다.
Angular는 Tempalate 기반 / React는 JSX 기반
```

RESTful API란? 1. URI로 접근이 가능하고, JSON, XML등으로 표현된 자원에 대한 행위를 HTTP Method로 정읳ㄴ다. 2. RESTful하다라는 것은 REST API의 설계의도를 명확하게 지켜주는것, /를 통해 계층관계를 표시, 숫자는 id를 나타내고, 동사보단 명사로 쓰거나 3. CORS란? 도메인 또는 포트가 다른 서버의 자원을 요청하면 발생하는 문제 웹 프론트측에서 request header에 CORS 관련 옵션을 넣어주고, 서버에서 해당 프론트 요청을 허용

ESLint -&gt; 소스를 스캔하여 문법적인 오류나 잠재적 오류까지 찾아내고 오류의 이류를 볼 수 있도록하는 도구

webpack? -&gt; 모듈 번들러, 파일 확장자에 맞는 로더에게 위임하여 하나로 묶어준다. 최종 배포용 파일을 만들어줌 script태그가 여러개 있을때, 순서보장도 중요하기 때문에 이도 webpack에서 지원

npm vs yarn npm으로 패키지 받을때, 이전과 버전정보가 다른 환경문제가 생길수 있었는데, 이를 처리하기 위해 yarn.lock 파일에서 처리 -&gt; package-lock으로 의존성 트리의 정확한 정보 제공

적응형과 반응형웹

반응형은 미디어쿼리를 사용하여 기기화면의 크기를 확인하고 유연한 이미지와 그리드를 활용해 화면 크기변화에 따라 페이지의 크기 및 레이아웃을 조절하는 기술

적응형은 서버나 클라이언트에서 웹에 접근한 기기를 체크하여 그 기기에 맞는 템플릿을 제공 -&gt; 데이터 낭비가 적고 로딩이 빠르다. but 기기별로 템플릿을 작성해야되므로, 개발이 복잡

## CSR과 SSR의 차이

### CSR 과정

* 서버가 브라우저의 응답을 전송 -&gt; 브라우저는 JS를 다운 -&gt; 브라우저에서 React 실행 -&gt; 페이지가 보여지고 상호작용

### SSR 과정

* 서버가 브라우저에게 HTML 응답 렌더링을 하기 위한 준비가 되었다고 전송 -&gt; 브라우저가 페이지 렌더링, 페이지 렌더링 후 브라우저는 JS를 다운받음 -&gt; 브라우저 리엑트 실헹 -&gt; 페이지 상호작용

SSR은 미리 페이지가 보여지고, CSR은 로딩중 CSR은 초기 속도가 느리지만, 화면전환이 클라이언트 쪽에서 이루어져서 빠른 전환이 가능 SSR은 초기 속도가 빠르지만, 동작은 하지 않음, 화면전환에 있어서 서버에 요청해야하므로, 서버에 부담

## 이벤트 위임

* 자식 엘리먼트의 이벤트를 부모 엘리먼트에서 감지, 이벤트를 하나씩 등록하는 것이 아니라 부모에게 이벤트를 위임하는 방법

### 반응형 프로그래밍

* 데이터 스트림이라는 일관된 형식을 만드록, 스트림을 구독하여 데이터 스트림의 상태 변화에 반응하는 방식

JS는 call by value but 오브젝트는 call by reference

inline vs inline block inline은 text 크기만큼만 공간을 점유하고 줄바꿈을 하지않는다. inline-block은 inline속성과 block 속성을 가지고있어서 width, height, line-height 적용가능











 





