"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouteStack {
    constructor() {
        this.init();
    }
    init() {
        this.stack = [];
    }
}
const routeStack = new RouteStack();
class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// 팩토리 함수처럼 직접 호출하여 찍어낼 수 있다. -> 만약 인스턴스 생성 전 공통 전처리 작업이 필요할 경우 유용할 듯.
function createIdol(constructor, name, age) {
    return new constructor(name, age);
}
class Parent {
    constructor(name) {
        this.name = name;
    }
    say(name) {
        return `Hello ${name}`;
    }
}
class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.name = name;
        this.age = age;
    }
    /**
     * 1. 부모 메서드와 반환 타입 일치, 필수 파라미터 존재
     * 2. 부모 메서드에서 optional인 파라미터가 오버라이드 시 필수 파라미터가 되면 안된다.
     * ->즉, 오버라이드 하는 대상 끼리의 시그니처가 동일해야 한다.
     */
    say(name) {
        return "";
    }
}
const parent = new Parent("geun");
const child = new Child("ari", 12);
let child2;
child2 = child;
child2 = parent;
// 공통된 멤버 변수, 메서드의 대해서 구조 클래스를 만들어놓을 수 있다. 당연히 인스턴스화는 불가능하다.
class Model {
    constructor(name) {
        this.name = name;
        this.key = "aaa.bbb.ccc";
    }
}
class ModelB extends Model {
    constructor() {
        super(...arguments);
        this.code = 0;
    }
    shout() {
        return "Ya!";
    }
    getCode() {
        return this.code;
    }
}
const model = new ModelB("park");
model.shout();
