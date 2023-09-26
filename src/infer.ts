// 1. 현재는 제네릭으로 보낸 타입이 조건에 맞을 경우 string으로 벗겨내고 아니면 그대로 돌려보낸다.
type Flatten<T> = T extends Array<string> ? string : T;

// 원하는 것은 string배열 뿐 아니라 다른 타입의 배열도 flatten하고 싶다.
// 2. 아래처럼 해주면 보내야 하는 타입이 하나가 더 늘어난다. 안티패턴
type Flatten2<T, E> = T extends Array<E> ? E : T;

// 3. 아래 구조는 유지하되, 제네릭의 대해서 명칭을 주고, 아닐 경우 유동적으로 추론 되게 하고 싶다.
// type Flatten3<T> = T extends Array<E> ? E : T;
// 4. 내부적으로 해당 자리에 들어갈 값의 대한 타입을 추론하고, 식별화한다.
// 주어진 타입이 Array 타입일 경우 값의 대해 추론하여 반환
type Flatten3<T> = T extends Array<infer E> ? E : T;

type strArr = Flatten<string[]>;
type strArr3 = Flatten3<number[]>;

type InferReturnType<T> = T extends (...arg: any[]) => infer R ? R : T;

type StrFunc = InferReturnType<() => string>;
type numFunc = InferReturnType<() => number>;
