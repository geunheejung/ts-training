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
// 1. class 위에 데코레이터 사용 시, Class를 파라미터로 하여, 데코레이터가 호출된다. Decorator(class)
let Idol = class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
Idol = __decorate([
    Factory,
    Frozen,
    LogTest("PRODUCTION"),
    ChangeClass,
    __metadata("design:paramtypes", [String, Number])
], Idol);
function Factory(constructor) {
    console.log(constructor);
}
function Frozen(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
const idol = new Idol("hi", 16);
// 2. 데코레이터 팩토리 -> 데코레이터를 반환함으로써, 파라미터를 받을 수 있다.
function LogTest(env) {
    return function (constructor) {
        console.log(`[${env}] - ${constructor} 실행됐습니다.`);
    };
}
console.log("-- -- --");
// 3. Class의 데코레이터는 인스턴스화 될 때마다 실행 되는것이 아닌, 클래스가 초기화될 때 한번 실행 된다.
const idol2 = new Idol("hello", 22);
console.log(idol2);
function ChangeClass(constructor) {
    return class extends constructor {
        constructor(...params) {
            super(...params);
            this.groupName = "아이브";
            console.log(`constructor instantiated`);
        }
    };
}
