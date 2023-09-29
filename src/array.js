"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list = [1, 2, 3, "4", "5", "6"];
const numList = [1, 2, 3, 4, 5, 6];
// 아울러 extends도 마찬가지이다. S라는 집합의 범위를 T라는 집합의 하위 집합으로 넣은것이다.
// 즉, S는 T 집합을 벗어난값을 넣을 수 없다. T가 number인데인데 S에 number외의 타입을 넣으면 하위 집합이 상위 집합을 초과하여 성립 하지 못한다.
const oddList = list.filter((row, index) => index % 2);
// <S extends T>(value: T) => value is S
const strList = list.filter((value) => typeof value === "string");
