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

class Parent {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  say(name: string) {
    return `Hello ${name}`;
  }
}

class Child extends Parent {
  age?: number;
  // 프로퍼티 오버라이드 또한 타입을 동일하게 해야한다.
  name: string;
  constructor(name: string, age: number) {
    super(name);
    this.name = name;
    this.age = age;
  }

  /**
   * 1. 부모 메서드와 반환 타입 일치, 필수 파라미터 존재
   * 2. 부모 메서드에서 optional인 파라미터가 오버라이드 시 필수 파라미터가 되면 안된다.
   * ->즉, 오버라이드 하는 대상 끼리의 시그니처가 동일해야 한다.
   */
  say(name: string) {
    return "";
  }
}

const parent = new Parent("geun");
const child = new Child("ari", 12);
let child2: Child;

child2 = child;
child2 = parent;

// 공통된 멤버 변수, 메서드의 대해서 구조 클래스를 만들어놓을 수 있다. 당연히 인스턴스화는 불가능하다.
abstract class Model {
  name: string;
  protected key: string;
  constructor(name: string) {
    this.name = name;
    this.key = "aaa.bbb.ccc";
  }

  abstract shout(): string;
}

class ModelB extends Model {
  private code: number = 0;

  shout(): string {
    return "Ya!";
  }

  getCode() {
    return this.code;
  }
}

const model = new ModelB("park");

model.shout();
