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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
require("reflect-metadata");
const restrictParamValueKey = Symbol("restrictParmValue");
function RestrictParamValue(restrictedValues) {
    return function (target, propertyKey, index) {
        var _a;
        const prevMeta = (_a = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey)) !== null && _a !== void 0 ? _a : [];
        const info = {
            index,
            restrictedValues,
        };
        Reflect.defineMetadata(restrictParamValueKey, [...prevMeta, info], target, propertyKey);
    };
}
class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // style에는 '신나게' | '열정적으로' 만 입력 가능하다
    sing(style) {
        return `${this.name}이 ${style} 노래를 부릅니다.`;
    }
}
__decorate([
    __param(0, RestrictParamValue(["신나게", "열정적으로"])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Idol.prototype, "sing", null);
{
    class Idol {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        // style에는 '신나게' | '열정적으로' 만 입력 가능하다
        sing(style) {
            Reflect.defineMetadata("style", style, Idol.prototype);
            return `${this.name}이 ${style} 노래를 부릅니다.`;
        }
    }
    __decorate([
        methodDecorator,
        __param(0, paramDecorator),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Idol.prototype, "sing", null);
    function paramDecorator(target, methodName, index) {
        Reflect.defineMetadata("validate", function (value) {
            return value === "신나게" || value === "열정적으로";
        }, target);
    }
    function methodDecorator(target, key, desc) {
        const validateFn = Reflect.getMetadata("validate", target);
        const org = desc.value;
        desc.value = function (style) {
            if (!validateFn(style)) {
                console.log("ERROR");
                return;
            }
            else {
                org.apply(style, this);
            }
        };
    }
    const i = new Idol("iu", 20);
    i.sing("바보");
}
