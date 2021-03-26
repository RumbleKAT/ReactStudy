# 하이어오더 컴포넌트

## 커링개념

커링은 함수를 반환하는 함수, 커링을 사용해야하는 이유는 함수의 재활용을 위해서 사용한다. 즉, 중복된 코드를 반복적으로 입력하지 않고 원하는 기능을 조합하여 적재적소에 사용할수 있다.

```javascript
function multiply(a,b){
    return a*b
} 
```

위의 함수는 두인자를 곱하여 반환하는 예제

```javascript
function multiplyX(x){
    return function(a){
        return multiply(a,x);
    }
}

const multiplyX = x => a => multiply(a,x)
```

커링의 장점은 인자를 나눠받아 실행할수 있다.

```javascript
const result1 = multiplyX(3)(3); // 9
const result2 = multiplyY(4)(3); // 12

((x*a)*b)+c)
const equation = (a,b,c) => x => (((x*a)*b)+c); //이것이 바로 커링함수


const multiply = (a,b) => a*b;
const add = (a,b) => a+b;

const muliplyX = x => a => multiply(a,2);
const addX = x => a => add(x,a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree =multiplyX(3);

const formula = x => addFour(multiplyThree(multiplyTwo(x)));
<-------함수 실행순서가 오른쪽에서 왼쪽으로 사람이 함수의 적용 흐름을 한번에 이해하기 어렵다.
        즉, 코드 가독성이 떨어진다.
```

## 함수 조합 기법

커링 함수를 순서대로 조합하는 compose\(\) 함수를 만들면 된다. prevfunc가 누적값, nextfunc가 누적할 값, function\(k\){return k} 초깃값

```javascript
[multiplyTwo, multiplyThree, addFour].reduce(
    function (prevFunc, nextFunc){
        return function(value){
            return nextFunc(prevFunc(value));
        };
    },
    function(k){ return k;}
)
```





