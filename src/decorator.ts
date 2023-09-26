/**
 * Class Decorators
 * 클래스 생성자에 적용되며 클래스 정의를 관찰, 수정 또는 교체하는 데 사용된다.
 * 클래스 데코레이터의 표현식은 데코레이팅된 클래스의 생성자를 유일한 인수로 런타임에 함수로 호출된다.
 * 클래스 데코레이터 값을 반환하면 클래스가 선언을 제공하는 생성자 함수로 바꾼다.
 */
function sealed(constructor: Function, ...args: any[]) {
  // seal : 수정 막음.
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello ${this.greeting}`;
  }
}

const instance = new Greeter("John");

type ConstructorType = { new (...args: any[]): {} };

function classDecorator<T extends ConstructorType>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class Greeter2 {}

@Factory
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
