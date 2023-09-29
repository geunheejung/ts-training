"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const returnVO = () => {
    return {
        value: "hello",
    };
};
// 1. T를 VO의 서브 집합으로 넣었다.
// 2. 그 상태에서 반환값을 T로 정했다
// 3. 그러면 T는 T | VO이다.
// T는 VO 의 다른 하위 형식으로 인스턴스화할 수 있다고 한다. 프로퍼티를 추가할 수 있는데 왜 너가 프로퍼티를 강제하냐
// 이 뜻인거 같다.
// 프로퍼티가 아니라 조금 더 넓게 봐야할 것 같다.
// T는 VO의 부분집합이다. 그리고 T를 리턴 타입으로 강제 했다.
// 그 상태에서 우리는 VO의 형식을 보고 객체를 반환 했다
// T는 VO보다 하위 집합인 상태이기에, { value: any } 외에도 다른 타입이 반환 될 수 있다.
// 에러 메세지도 보면 T는 VO 제약 조건의 다른 하위 형식으로도 인스턴스화 될 수 있다고 한다.
// 내가 더 큰 집합일 경우 나보다 작은 집합을 포함 시킬 수 있지만, 서브 집합이 메인 집합을 포함 시킬 수 없다.
// boolean의 서브 집합 T 인 상태에서 T에 메인 집합을 넣으려 함. T는 boolean의 다른 값으로도 인스턴스화 될 수 있음에도
// T extends boolean, boolean { never, boolean }인데 T에다가 true라고 넣음. -> 추론상 다른 타입도 추론될 수 있는 상황에서
// assignability 이기 때문에 T의 value는 다른 값 타입들일 가능성이 있다.
function onlyBoolean(arg = true) {
    return arg;
}
// 파라미터의 경우 교집합이 되고, 리턴의 경우 합집합이된다.
// T는 함수 디자인시점에 결정되지 않기 때문에 conditional type을 써도 T를 결정할 수 없다.
// 타입스크립트 컴파일러가 T의 타입을 결정할 때 T extends string ? string | number를 결정할 수 없다.
// T' 형식은 'T extends string ? string : number'
// 즉, 아래처럼 제네릭에 의한 컨디셔널 타입이 존재할 경우 타입 시그니처 그대로 해석해야한다.
// 왜? 컨디셔널 타입은 가장 마지막에 평가되기 때문이다.
function double(x) {
    return x;
}
function double1(x) {
    return x;
}
const q = double1();
// 대괄호가 쓰여질 경우 타입의 대한 평가가 다른 방식으로 바뀐다.
function double2(x) {
    return x;
}
const w = double2("c");
