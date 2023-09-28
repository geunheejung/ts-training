interface Arr<T> {
  forEach: (
    callbackfn: (value: T, index: number, arr: T[]) => void,
    thisArg?: any
  ) => void;
  // 내가 필요한것은 콜백 함수의 결과값이고, 결과값을 어딘가에 저장해야하니 제네릭 써서 U에다가 할당함
  map: <U>(
    callbackfn: (value: T, index: number, arr: T[]) => U,
    thisArg?: any
  ) => U[];
  // filter는 내가 넣은 재료안에서만 가능하다
  filter<S extends T>(predicate: (value: T, index: number) => value is S): S[];

  // value의 타입은 T 로 정한 상태에서 리턴으로 value는 S 타입이라 정의 하였다.
  // 현재 T, S타입간에 접점이 없다. Value is Type은 타입스크립트가 추론 하는데 있어 넓은 집합에서 좁은 집합으로 좁혀주는것이다.
  // 넓은 집합에서 좁은 집합으로 좁히기 위해서는 T 라는 집합 안에 S가 존재해야 하는데 지금은 그렇지 않다.
  // 예를 들면, string | number 라는 집합에서 value is number 를 한다면, number라는 집합으로 좁힌것이다.
  // filter<S>(predicate: (value: T, index: number) => value is S): S[];

  filter(predicate: (value: T, index: number) => unknown): T[];
}

const list: Arr<number | string> = [1, 2, 3, "4", "5", "6"];
const numList: Arr<number> = [1, 2, 3, 4, 5, 6];

// 아울러 extends도 마찬가지이다. S라는 집합의 범위를 T라는 집합의 하위 집합으로 넣은것이다.
// 즉, S는 T 집합을 벗어난값을 넣을 수 없다. T가 number인데인데 S에 number외의 타입을 넣으면 하위 집합이 상위 집합을 초과하여 성립 하지 못한다.
const oddList = list.filter((row, index) => index % 2);
// <S extends T>(value: T) => value is S
const strList = list.filter<string>(
  (value: number | string): value is string => typeof value === "string"
);
