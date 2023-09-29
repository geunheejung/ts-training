"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// implementation signature
function add(a, b, c) {
    if (b) {
        if (c) {
            return a + b + c;
        }
        return a + b;
    }
    return a;
}
const stringResult = add("1", "2", "3");
const numberResult = add(1, 2, 3);
function useRef(initialValue) { }
function filterSentCoupon(coupons) {
    return coupons === null || coupons === void 0 ? void 0 : coupons.filter((coupon) => coupon.isSent);
}
// 타입 내로잉 시 undefined가 추가 되어서 Coupon[] | undefined
const filtered = filterSentCoupon([
    { isSent: true },
    { isSent: true },
    { isSent: true },
]);
function filterSentCoupon2(coupons) {
    return coupons === null || coupons === void 0 ? void 0 : coupons.filter((coupon) => coupon.isSent);
}
// 타입 내로잉 시 Coupon[] 로 명확히 좁혀짐.
const filtered2 = filterSentCoupon2([
    { isSent: true },
    { isSent: true },
    { isSent: true },
]);
