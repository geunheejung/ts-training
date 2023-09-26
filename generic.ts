interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: { color: "red", coupon: true },
};

const m2: Mobile<boolean> = {
  name: "s20",
  price: 900,
  option: false,
};

type Person<T> = T | T[];

const p1: Person<string> = "hey";
const p2: Person<string> = ["a", "b"];

type numOrStr = number | string;

const identify = <T extends numOrStr>(p: T): T => {
  return p;
};

identify<string>("hello");

interface Lengthwise {
  length: number;
}
const loggingIdentify = <T extends Lengthwise>(arg: T) => {
  console.log(arg.length);

  if (Array.isArray(arg)) {
    console.log(arg.length);
  }
};

// T에는 객체가 오며, K는 T의 key 유니온으로 타입을 제한했다.
const getProperty = <T, K extends keyof T>(object: T, key: K) => {
  return object[key];
};

interface IPerson {
  name: string;
  age: string;
  address: string;
}

const swapProperty = <T extends IPerson, K extends IPerson>(
  obj1: T,
  obj2: K,
  key: keyof IPerson
) => {
  Object.keys(obj1).forEach((_) => {
    let tmp = obj1[key];
    obj1[key] = obj2[key];
    obj2[key] = tmp;
  });
};

const translate = (cb: (a: string) => number, arg: string) => {
  return cb(arg);
};

const num = translate((a) => {
  return parseInt(a, 10);
}, "10");

interface GenericIdentifyFn<T> {
  (arg: T): T;
}

const identify3 = <T>(arg: T): T => {
  return arg;
};

let myIdentify: GenericIdentifyFn<number> = identify3;

/*
1. map은 배열과 콜백 함수를 받는다
2. map은 배열을 순회 하면서 배열의 아이템, 인덱스를 콜백 함수로 넘긴다.
3. 콜백 함수의 결과를 현재 인덱스와 교체한다.
4. 콜백 함수의 결과가 없을 경우 undefined가 할당된다.
5. map 함수의 결과는 콜백 함수의 결과이다.
*/

const _map = <T, K>(array: T[], callback: (item: T, index: number) => K) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const row = array[i];

    const newRow = callback(row, i);

    newArray[i] = newRow;
  }

  return newArray;
};

const callback = <T>(row: T, index: number) => {
  if (index % 2 === 0) return "string";

  return row;
};

const list = _map<number, ReturnType<typeof callback<number>>>(
  [1, 2, 3, 4],
  callback
);

const foo = <T>(arg: T): T => arg;

const b = foo(1);

const getTuple = <X, Y>(val1: X, val2: Y) => {
  return [val1, val2];
};

const tuple = getTuple(true, 2);

/**
 *
 * @param constructor 생성자 함수를 받고, 생성자 함수의 파라미터는 any[]로 받는데, 나머지 연산자로 주입한다
 * 추가로 생성자 함수의 리턴값은 객체
 * @param args 생성자 함수를 호출할 때 주입할 파라미터들
 * @returns
 */
const instantiator = <T extends { new (...args: any[]): {} }>(
  constructor: T,
  ...args: any[]
) => {
  return new constructor(...args);
};

type DoneState<T> = {
  data: T[];
};

enum Status {
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

type LoadingState = {
  status: Status;
};

interface IUser {
  id: number;
  name: string;
  age: string;
}

type State<T = string> = DoneState<T> | LoadingState;

let state: State<IUser> = {
  data: [
    {
      id: 1,
      name: " helo",
      age: "2",
    },
  ],
};

state = {
  status: Status.SUCCESS,
};

class Idol<T> {
  data: T;

  constructor(data: T) {
    this.data = data;
  }
}

// 파라미터로 타입 추론이 진행 되지만 조금 더 명확하게 지정하려면 제네릭 파라미터를 같이 전달해주자
const a = new Idol([1, 2, 3]);
