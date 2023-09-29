// ThisParameterType1<T>가 타입 추론을 실패 했을 때, 타입 추론이 성공 했을 때는 매개변수와 리턴 값 그대로 알아내서 함수를 만들어라 하면서, this가 사라짐.
type OmitThisParameter1<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R // T의 시그니처가 (...args: infer A) => infer R 를 충족 하면 추론한 타입을 반환해서 함수를 내로잉함.
  ? (...args: A) => R
  : T;

type ThisParameterType1<T> = T extends (this: infer U, ...args: never) => any
  ? U
  : unknown;

interface Func {
  bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
  bind<T, A0, A extends any[], R>(
    this: (this: T, arg0: A0, ...args: A) => R,
    thisArg: T,
    arg0: A0
  ): (...args: A) => R;
  bind<T, A0, A1, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1
  ): (...args: A) => R;
  bind<T, A0, A1, A2, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
    arg2: A2
  ): (...args: A) => R;
  bind<T, A0, A1, A2, A3, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
    arg2: A2,
    arg3: A3
  ): (...args: A) => R;
  bind<T, AX, R>(
    this: (this: T, ...args: AX[]) => R,
    thisArg: T,
    ...args: AX[]
  ): (...args: AX[]) => R;
}
// bind는 첫 번째 인자로 callable한 객체인 함수 객체와, this를 받아서, 해당 함수의 this를 바인딩 한 다음 새로운 함수를 반환한다.
// T 제네릭을 받고, this의 자리에 T를 기재했다.
// ThisParameterType에 this로 추론된 Type T를 파라미터로 보낸다.
// 타입을 제네릭으로 받고, 제한하는데, 함수로 제한하고, this의 타입을 infer로 추론해서 U에 할당하고, 타입 파라미터로 받은 제네릭 T의 시그니처가 맞을 경우 this를 반환한다.
// this를 추출해내기 위해서 thisArg자리에 ThisParameterType을 사용해서 추출했다.
// 그 다음 리턴값은 OmitThisPAram이다. 내생각엔 기존의 this파라미터를 제외하고 새로운 this를 할당하기 위해서이지 않을까
// OmitThisParma에는 this제네릭을 넣고,
// This가 unknown이면, T를 그대로반환하고, 아닐 경우 새로운 this로 반환한다 인듯.
// 그리고 나머지 타입 오버로드들은, bind의 this바인딩 이후의 타입들에 대해서 동일하게 처리된다.
// 마지막은 bind에 두 번째 파라미터로 배열을 넣은 경우인듯

const obj = {
  name: "obj",
  method(this: { name: string }) {
    console.log(this.name);
  },
};

function hello(this: Window | typeof calculate, x: number, y: number) {
  console.log(`this${this.name} = ${x + y}`);

  return this;
}

const calculate = {
  name: "calculate",
};

const sayHello = obj.method.bind({ name: "calculate" });

type c = typeof sayHello;

sayHello();

type T = ThisParameterType<typeof hello>;
// this파라미터가 소거되었다.
type NoThis = OmitThisParameter1<typeof hello>;

const j = hello.bind(calculate, 1, 2);
j();
const b = obj.method.bind(calculate, 1, 2);

const obj2 = {
  method(this: Window) {
    console.log(this);
  },
};
function r(this: Window | typeof calculate, x: number, y: number) {
  console.log(this);
}
// const h = obj2.method.bind(calculate, 1, 2);
// bind를 호출한 함수가 T로 추출되고, 함수의 this가 추론되냐 안되냐에 따라 달라진다.
type H = ThisParameterType1<typeof obj2.method>;
