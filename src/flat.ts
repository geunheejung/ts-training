type FlatArray<Arr, Depth extends number> = {
  done: Arr; // 순회 대상
  recur: Arr extends ReadonlyArray<infer InnerArr>
    ? FlatArray<
        InnerArr,
        [
          -1,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ][Depth]
      >
    : Arr;
}[Depth extends -1 ? "done" : "recur"];

interface Arr<T> {
  // this로 순회 대상인 리스트가 추론됨. 그리고 순회 대상 이랑 depth를 넘김
  flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];
}

// A, D를 제네릭으로 받고,
let list: Arr<number | string> = [1, 2, 3, [1, 2, 3, [1, "2", 3]]];

// 함수에서 this 파라미터는 명시 안해도 되는듯
const q = [1, 2, 3, [1, 2, 3, [1, "2", 3, [1, 2, 3]]]].flat(2);

const li = [1, 2, 3];

type Q<Arr, Depth extends number> = {
  done: Arr;
  recur: Arr extends ReadonlyArray<infer InnerArr> ? InnerArr : Arr;
}[Depth extends -1 ? "done" : "recur"];

// Depth는 -1이 아니다 -> recur에서 ReadonlyArray<innerArr> 내부 인덱스가 추론 되었다.
type J = Q<typeof li, 1>;

interface List<T> {}

type K<Arr> = Arr extends List<infer InnerArr> ? InnerArr : null;

const jj = [1, 2, 3, 4, 5] as const;
type K1 = K<typeof jj>;

/*
1. Flat은 this 자기 자신과 depth를 받는다.
2. 그리고 FlatArray라는 재귀 타입 추론을 하는데 이때
    1. depth가 -1일 경우 추론을 마무리한다.
    2. 아닐 경우 recur를 key로 반환하고
    3. recur일 경우 FlatArray의 재귀가 시작된다.
    4. ReadonlyArray<infer InnerArr>은 Arr은 여기서 현재 태스크에 순회 되어야할 대상이며
    5. extends로 순회 대상을 서브 타입에 넣고, ReadOnlyArray로 선언과 동시에 
    6. 배열의 인덱스 타입 자리에 Infer를 사용하여 배열 내부 를 추론해냈다.
    7. readonly여야만 값 자체가 추론 된다.
    8. depth가 2면 1 depth가 1이면 0으로 추론된다.
    9. 이렇게 추론될 수 있는 이유는 다음 재귀로 넘어갈 때 인덱스에 따라 -1씩 뎁스가 줄어들기 때문이다.
*/
