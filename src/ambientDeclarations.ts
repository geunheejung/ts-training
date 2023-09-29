// 일반 함수의 대해서 new 예약어 없이도 호출 가능하게 해줌.
// class, function은 엠비언트 선언 시 병합 된다.
// 이렇게 한 이유는 Typescript로는 자바스크립트의 동작에 대해 구현하기 어려울 경우 대응하기 위해서이다.
declare class A {
  constructor(name: string);
}

function A(name: string) {
  return new A(name);
}

var a = new A("");
var a2 = A("");
