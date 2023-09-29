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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Idol {
    constructor(name) {
        this.name = name;
    }
    dance() {
        return `${this.name}가 춤을 춥니다.`;
    }
}
__decorate([
    MethodCallLogger("dev"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Idol.prototype, "dance", null);
/**
 *
 * @param target - static method에 데코레이팅을 할 경우 생성자 함수, instance method에 데코레이팅 할 경우 인스턴스의 프로토타입
 * @param propertyKey
 * @param descriptor
 */
function MethodCallLogger(env) {
    return function (target, propertyKey, descriptor) {
        // 인스턴스 메서드의 데코레이터로 사용할 경우, 메서드가 value로 들어온다. 멤버 변수도 할당된 값이 들어왔으니.
        console.dir(descriptor, { showHidden: true });
        const originalMethod = descriptor.value;
        // 메서드를 오버라이딩함.
        descriptor.value = function (...args) {
            console.log(`[${env}] running function : ${propertyKey}`);
            // 오리지널 메서드를 호출해주면서 this바인딩이 끊기지 않게 함.
            const result = originalMethod.apply(this, ...args);
            console.log("result ->", result);
            return result;
        };
    };
}
const idol = new Idol("geuni");
idol.dance();
const fetch = (url, method) => {
    return new Promise((resolve, reject) => {
        if (!url || !method) {
            reject(Error("error"));
            return;
        }
        setTimeout(() => {
            const value = {};
            resolve(value);
        }, 2000);
    });
};
function fetchDecorator(target, key, descriptor) {
    descriptor.value = function (url, method) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const original = descriptor.value;
                const res = yield orignial(url, method);
            }
            catch (error) { }
        });
    };
}
class Api {
    constructor(url) {
        this.status = "";
        this.data = {};
        this.url = url;
    }
    fetch(url, method) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status = "request";
                const res = yield fetch(url, method);
                this.data = res;
                this.status = "success";
            }
            catch (error) {
                this.status = "error";
            }
        });
    }
}
const api = new Api("http://q.com");
