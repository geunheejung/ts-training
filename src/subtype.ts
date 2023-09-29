interface User {
  name: string;
}

interface Admin extends User {
  age: number;
}

// S <: P
type IsSubtypeof<S, P> = S extends P ? true : false;

type R = IsSubtypeof<Admin, User>;

type R2 = IsSubtypeof<"Hello", string>;

type R3 = IsSubtypeof<Map<string, string>, Object>;

// 공변성
type R4 = IsSubtypeof<Promise<Admin>, Promise<User>>;
// Promise 타입이 공변이다.

// S가 P의 서브 타입이면 Type<S> 도 Type<P>의 서브 타입이다.
// Promise<S> <: Promise<P>

// 타입의 공변성은 직관적이다.
type RecordOfAdmin = Record<string, Admin>;
type RecordOfUser = Record<string, User>;

type R5 = IsSubtypeof<RecordOfAdmin, RecordOfUser>;

// 반공변성
type Func<T> = (param: T) => void;

// Admin 이 User의 서브 타입이라면
type F = IsSubtypeof<Func<Admin>, Func<User>>;
type F1 = IsSubtypeof<Func<User>, Func<Admin>>;

// Admin은 User의 서브타입인데 함수 파라미터에서는 공변성이 성립하지 않는다.
// 예전에 이해했던것은, 리턴 타입은 함수에서 정해진대로 리턴해야하고 좁은
// 파라미터는 반대로 무엇이든 초과로 받을 수 있다 넓은 으로 이해했다

// S가 P의 서브 타입일때 타입내에서 반대가 될 경우 해당 타입은 반공변이다.
// S <: P 일 때 T<P> <: T<S> 이면 타입 T 는 반공변입니다.”

type FUser = (p: User) => void;
type FAdmin = (p: Admin) => void;

// 공변
type T31 = IsSubtypeof<Admin, User>;
// 반공변
type T32 = IsSubtypeof<FUser, FAdmin>;
