"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A, D를 제네릭으로 받고,
let list = [1, 2, 3, [1, 2, 3, [1, "2", 3]]];
// 함수에서 this 파라미터는 명시 안해도 되는듯
const q = [1, 2, 3, [1, 2, 3, [1, "2", 3, [1, 2, 3]]]].flat(2);
const li = [1, 2, 3];
const jj = [1, 2, 3, 4, 5];
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
