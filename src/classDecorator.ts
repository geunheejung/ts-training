// 1. class 위에 데코레이터 사용 시, Class를 파라미터로 하여, 데코레이터가 호출된다. Decorator(class)
@Factory
@Frozen
@LogTest("PRODUCTION")
@ChangeClass
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function Factory(constructor: Function) {
  console.log(constructor);
}

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

const idol = new Idol("hi", 16);

// 2. 데코레이터 팩토리 -> 데코레이터를 반환함으로써, 파라미터를 받을 수 있다.
function LogTest(env: string) {
  return function (constructor: Function) {
    console.log(`[${env}] - ${constructor} 실행됐습니다.`);
  };
}

console.log("-- -- --");

// 3. Class의 데코레이터는 인스턴스화 될 때마다 실행 되는것이 아닌, 클래스가 초기화될 때 한번 실행 된다.
const idol2 = new Idol("hello", 22);
console.log(idol2);

function ChangeClass<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    groupName = "아이브";

    constructor(...params: any[]) {
      super(...params);

      console.log(`constructor instantiated`);
    }
  };
}
