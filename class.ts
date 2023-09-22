class RouteStack {
  // 프로퍼티 앞에 '!' 가 붙을 경우 해당 프로퍼티의 대해서 존재한다고 타입 스크립트에게 알려준다.
  stack!: string[];

  constructor() {
    this.init();
  }

  init() {
    this.stack = [];
  }
}

const routeStack = new RouteStack();

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// new Idol() 과 동일하다. class의 생성자의 대한 타입 정의가 가능함.
interface IDolConstructor {
  new (name: string, age: number): Idol;
}

// 팩토리 함수처럼 직접 호출하여 찍어낼 수 있다. -> 만약 인스턴스 생성 전 공통 전처리 작업이 필요할 경우 유용할 듯.
function createIdol(constructor: IDolConstructor, name: string, age: number) {
  return new constructor(name, age);
}
