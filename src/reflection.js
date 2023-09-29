"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const iu = {
    name: "",
    age: "",
};
/**
 * 1. 메타데이터 키
 * 2. 메타데이터 키에 저장할 값
 * 3. 메타데이터를 저장할 객체
 * 4. 메터데이터를 저장할 객체의 프로퍼티 (Optional)
 * 메타데이터: 데이터의 대한 데이터
 */
Reflect.defineMetadata("test-meta", 123, iu);
console.log(Reflect.getMetadata("test-meta", iu));
Reflect.defineMetadata("object-meta", 999, iu, "name");
console.log(Reflect.getMetadata("object-meta", iu, "name"));
Reflect.defineMetadata("prototype-data", "프로토타입", Object.getPrototypeOf(iu));
console.log(Reflect.getMetadataKeys(iu));
