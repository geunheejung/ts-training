"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cb;
const onClick = function (event, cb) {
    // 실제 함수 매개변수에는 this가 나타나지 않음
    console.log(this.tagName);
    cb();
};
const foo = (x) => { };
foo("aa");
