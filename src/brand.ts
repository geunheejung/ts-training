// K와 커스텀으로 만든 브랜드 타입이 교집합이여야 함.
type Brand<K, T> = K & { __brand: T };

// 아, 프로퍼티를 통해서 내부 타입을 만듬
type EUR = Brand<number, "EUR">;

const usd = 10;
const eur = 10 as EUR; // as를 통해서 강제로 만든 타입을 캐스팅함.
const krw = 2000;

// euro만 강제하고 싶은데, number는 집합의 범위가 넓음.
const euroToUsd = (euro: EUR): number => {
  return euro * 1.18;
};

euroToUsd(eur);
