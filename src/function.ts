{
  const a = (x: string): number => {
    return parseInt(x, 10);
  };

  console.log(a("1"));

  // 리턴 값은 더 넓은 집합으로 대입할 수 있다. -> B가 a보다 더 넓다.
  type B = (x: string) => number | string;
  let b: B;

  // B라는 상위 집합에 a를 넣는 상황이다.
  b = a;
}
{
  const a = (x: string): string | number => {
    return Math.random() > 0.5 ? x : parseInt(x);
  };

  // a 함수는 -> (x: string) => string 가능성이 있음.
  type B = (x: string) => number;
  let b: B;

  b = a;
}

{
  // (x: string | number) => string;
  const a = (x: string): string => {
    return x.toString();
  };

  // 당연히 매개변수도 대입하는쪽보다 좁아야 넣을 수 있다.
  type B = (x: string | number) => string;

  let b: B;

  b = a;
}

{
  // 매개 변수도 동일하다
  // 값이든, 타입이든 할당 하려면 할당 하는 대상이 집합에 속해있어야 한다.
  const a = (x: string | number): x is string => {
    return typeof x === "string";
  };

  type B = (x: string) => x is string;

  let b: B;

  b = a;
}

{
  // 받는쪽이 허용하느냐이다 리턴의 경우 number라는 작은 집합에 string | number를 넣을 수 없다
  // 파라미터의 경우 string | number라는 큰 집합에 string을 넣을 수 있다
  function a(x: string | number): number {
    return 0;
  }

  // (x: string) => number
  function a2(x: string): number | string {
    return "a";
  }

  type B = (x: string) => number;
  let b: B = a;

  type B2 = (x: string) => number;

  let b2: B2 = a2;
}
