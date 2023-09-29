"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class Decorators
 * 클래스 생성자에 적용되며 클래스 정의를 관찰, 수정 또는 교체하는 데 사용된다.
 * 클래스 데코레이터의 표현식은 데코레이팅된 클래스의 생성자를 유일한 인수로 런타임에 함수로 호출된다.
 * 클래스 데코레이터 값을 반환하면 클래스가 선언을 제공하는 생성자 함수로 바꾼다.
 */
function sealed(constructor, ...args) {
    // seal : 수정 막음.
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let Greeter = class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return `Hello ${this.greeting}`;
    }
};
Greeter = __decorate([
    sealed,
    __metadata("design:paramtypes", [String])
], Greeter);
const instance = new Greeter("John");
function classDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = "new property";
            this.hello = "override";
        }
    };
}
let Greeter2 = class Greeter2 {
};
Greeter2 = __decorate([
    classDecorator
], Greeter2);
let Idol = class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
Idol = __decorate([
    Factory,
    __metadata("design:paramtypes", [String, Number])
], Idol);
function Factory(constructor) {
    console.log(constructor);
}
