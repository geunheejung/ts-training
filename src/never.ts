type IsNever<T> = T extends never ? true : false;
type a = IsNever<never>;

// T를 never의 서브 집합으로 넣었다
// T가 never에 할당되면 true 아니면 false인데
// never 는 bottom type 즉, 공집합이다.
// 집합의 개념으로 봤을때 T를 공집합으로 넣을 경우 추론은 의미가 없어진다?
// 타입 매개변수와 유니온이 만나면 분배 법칙이 실행된다.
// T extends J 는 T | J 즉, 유니온, 합집합을 만드는 행위이다.
// 분배법칙이란 두 피연산자의 곱셈에서 피연산자 중 하나를 연산의 결과와 바꾸더라도 연산의 결과는 변하지 않는다
// T | never = 추론된 타입에서 never가 어느곳으로 들어가더라도 결과는 바뀌재 않는다. 이건 맞다 근데 공집합이면
// 공집합이 우선일것이다.

interface VO {
  value: any;
}

const returnVO = <T extends VO>(): T => {
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
function onlyBoolean<T extends boolean>(arg: T = true): T {
  return arg;
}

// 교집합을 구하는 타입을 만들고 싶을 경우
type Intersection<T> = T extends {
  a: (pa: infer U) => void;
  b: (pa: infer U) => void;
}
  ? U
  : never;

// Intersection 타입이 시그니처를 충족할 경우 a, b 콜백 함수의 파라미터를 추론해서 U로 반환한다.
// 이러면 b의 U가 타입으로 추론될려나?

type Result2 = Intersection<{ a(pa: 1 | 2): void; b(pb: 2 | 3): void }>;
// 내 생각엔 number가 반환되지 않을까?
// 2가 반환되넹.. 리터럴 값 그대로 넣어서 그런듯.
// 아 교집합이구나 1 | (2 | 2) | 3

// 위의 경우 함수의 대해서 a, b가 나뉜 상태이다. 공변성 반공변성, 합쳐질 수 있느냐 또는 없느냐
type Union<T> = T extends { a: () => infer U; b: () => infer U } ? U : never;
type Result1 = Union<{ a: () => 1 | 2; b: () => 2 | 3 }>;

// 파라미터의 경우 교집합이 되고, 리턴의 경우 합집합이된다.

// T는 함수 디자인시점에 결정되지 않기 때문에 conditional type을 써도 T를 결정할 수 없다.
// 타입스크립트 컴파일러가 T의 타입을 결정할 때 T extends string ? string | number를 결정할 수 없다.
// T' 형식은 'T extends string ? string : number'
// 즉, 아래처럼 제네릭에 의한 컨디셔널 타입이 존재할 경우 타입 시그니처 그대로 해석해야한다.
// 왜? 컨디셔널 타입은 가장 마지막에 평가되기 때문이다.
function double<T extends string | number>(
  x: T
): T extends string ? string : number {
  return x;
}

function double1<T extends null | undefined>(x?: T): void;
function double1<T extends string>(x: T): string;
function double1<T extends number>(x: T): number;
function double1<T>(x: T): T {
  return x;
}

const q = double1();

// 대괄호가 쓰여질 경우 타입의 대한 평가가 다른 방식으로 바뀐다.
function double2<T extends [T] extends [string] ? string : number>(
  x: T
): [T] extends [string] ? string : number {
  return x;
}

const w = double2("c");
