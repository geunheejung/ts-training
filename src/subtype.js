"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(username) {
        this.username = username;
    }
}
class Admin extends User {
    constructor(username, isSuperAdmin) {
        super(username);
        this.isSuperAdmin = isSuperAdmin;
    }
}
const admins = [
    new Admin("john.smith", false),
    new Admin("jane.doe", true),
    new Admin("joker", false),
];
const superAdmins = admins.filter((admin) => {
    return admin;
});
// admin은 서브 클래스이지만 파라미터는 반공변 성질이기 때문에 아이러니하게 파라미터 자리에는 베이스타입이 Admin이고
// 서브타입이 User이다.
// admins.filter()는 (admin: Admin) => boolean 베이스 타입 + (user: User) => boolean 서브 타입 또한
// 콜백으로 받을 수 있다.
// (admin: Admin) => boolean 의 서브 타입은 (user: User) => boolean 이다.
