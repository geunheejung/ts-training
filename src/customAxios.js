"use strict";
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
class CustomError extends Error {
}
() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield axios.get("http", "get");
    }
    catch (error) {
        // try, catch의 error는 추론이 명확하지 않아 unknown이다.
        if (error instanceof CustomError) {
            // 타입 가드로 타입 내로잉 해줘서 사용해줘야 한다. as 키워드 지양
            console.log(error.response);
        }
    }
});
