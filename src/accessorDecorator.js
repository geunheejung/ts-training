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
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get h() {
        return this.height;
    }
    get w() {
        return this.width;
    }
}
__decorate([
    Configurable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Rectangle.prototype, "h", null);
__decorate([
    Configurable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Rectangle.prototype, "w", null);
const rec = new Rectangle(20, 10);
function Configurable(configurable) {
    return function (target, key, desc) {
        desc.configurable = configurable;
    };
}
console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));
