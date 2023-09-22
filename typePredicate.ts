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
