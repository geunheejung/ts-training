/**
 * Type Predicate
 * 반환 타입을 '변수 is Type' 으로 지정해줌.
 * if 문을 통해서 또는 조건문을 통해서 타입 내로잉 과정에서
 * 리턴 타입으로 명확히 타입에 대한 정보를 제공함으로써,
 * 타입 내로잉이 더 디테일 하게 된다.
 */

const isNumber = (input: any): input is number => {
  return typeof input === "number";
};
const input: any = 10;
const isInputTypeNumber = isNumber(input);
if (isInputTypeNumber) {
  input;
}

interface Doge {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogeOrCat = Doge | Cat;

const isDoge = (animal: DogeOrCat): animal is Doge => {
  // age 프로퍼티는 Doge 인터페이스에만 존재하기에, animal 인스턴스에 없을 경우 Cat으로 규정
  return (animal as Doge).age !== undefined;
};

// 명확히 규정해줬을 경우 Doge & Cat
const animal: DogeOrCat =
  Math.random() > 0.5
    ? {
        name: "bob",
        age: 32,
      }
    : {
        name: "navi",
        breed: "normal",
      };

const animal2: DogeOrCat = {
  name: "bob",
  age: 10,
};

if (isDoge(animal)) {
  animal;
} else {
  // animal2의 구현 사항에 Cat 인터페이스로써 추론되기에 부족하기에 never
  animal;
}
