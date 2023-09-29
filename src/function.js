"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    const a = (x) => {
        return parseInt(x, 10);
    };
    console.log(a("1"));
    let b;
    // B라는 상위 집합에 a를 넣는 상황이다.
    b = a;
}
{
    const a = (x) => {
        return Math.random() > 0.5 ? x : parseInt(x);
    };
    let b;
    b = a;
}
{
    // (x: string | number) => string;
    const a = (x) => {
        return x.toString();
    };
    let b;
    b = a;
}
{
    // 매개 변수도 동일하다
    // 값이든, 타입이든 할당 하려면 할당 하는 대상이 집합에 속해있어야 한다.
    const a = (x) => {
        return typeof x === "string";
    };
    let b;
    b = a;
}
{
    // 받는쪽이 허용하느냐이다 리턴의 경우 number라는 작은 집합에 string | number를 넣을 수 없다
    // 파라미터의 경우 string | number라는 큰 집합에 string을 넣을 수 있다
    function a(x) {
        return 0;
    }
    // (x: string) => number
    function a2(x) {
        return "a";
    }
    let b = a;
    let b2 = a2;
}
