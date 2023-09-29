"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
const q = (0, jquery_1.default)("q");
for (const item of q) {
    item;
}
(0, jquery_1.default)("p").removeClass(function (index, className) {
    return "a";
});
(0, jquery_1.default)("p").removeClass("myClass noClass").addClass("yourClass");
(0, jquery_1.default)(["p", "t"]).text("hello");
const tag = (0, jquery_1.default)("ul li").addClass(function (index) {
    return "item-" + index;
});
(0, jquery_1.default)(tag).html(function (i) {
    console.log(this);
    const res = ((0, jquery_1.default)(this).data("name") + "입니다");
    return res;
});
// 달러는 태그 이름 리터럴, 태그 이름 리터럴 배열, Jquery로 감싸진 HTML ELement를 받을 수 있음.
const j = (0, jquery_1.default)(tag);
