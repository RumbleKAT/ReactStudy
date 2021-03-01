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

**3-2. 하이어 오더 컴포넌트 \(aka Interface\)**

**3-3. Reducer / Context API**

**3-4. Redux Thunk / Redux** 

\*\*\*\*

## **DOM 렌더링 과정 설명** 

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













 





