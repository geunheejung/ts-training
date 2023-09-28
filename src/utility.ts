// Omit
// 해당 프로퍼티만을 제외한다
// Pick에서

// T를 keyof하는데, T에서 K를 제외하면 된다.
// T에서 K를 제외한다
// T의 Key에 K가 포함되면 u
// T에서 K를 어떻게 제외하지
// T[K] ? pass

// 순회하면서, never를 반환해야한다.
// 즉, key 하나씩 순회 하면서 현재 key가 제외 대상인지 체크해야한다.
// T의 key에 대한 집합과 제외해야할 key에 대한 집합을 보낸다.

type Exclude1<T, K> = T extends K ? never : T;

type Pick1<T, K extends keyof T> = {
  // [k in ]
  // [k in 제외된 Key의 모음]
  // K는 유니온으로 들어옴.
  // T는 인터페이스임
  // 인터페이스에서 K를 제외해야함
};

// Exclude는 유니온 타입에서 제외를 해줌
// 유니온타입에서 케이스를 제외하려면 해당 케이스일 경우 never즉 추론되지 않게 하면됨.

// 유니온 타입을 각각 받고, 서로 매치되는 타입의 경우 제외 시킨다.
type Exclude2<T, K> = T extends K ? never : T;

type test = Exclude2<"test" | "hello" | "qq", "test">;

type Om<T, K extends keyof T> = {
  [k in Exclude2<keyof T, K>]: T[k];
};

type d = Om<IMessage, "author">;

interface IMessage {
  name: string;
  title: string;
  author: string;
}

type Q = Pick1<IMessage, "name">;

//
// T 는 string에 속하며, T로 들어오는 타입 파라미터의 타입이 string이 맞는지에 따라 조건적으로 타입이 단언된다.
type IsString<T> = T extends string ? string[] : number[];

type T1 = IsString<string>;

type Ex<T, K> = T extends K ? T : never;

// Extract<Type, Union> 타입에 할당할 수 있는 모든 공용체 멤버에서 추출하여 유형을 구성한다
type T0 = Ex<"a" | "b" | "c" | "d" | "f", number>;
