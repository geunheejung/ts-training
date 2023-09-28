// Pick<Object, key union>
// object를 받는다
//

interface IMessage {
  name: string;
  title: string;
  author: string;
}

// key in union 타입 할 경우, 하나씩 순회
// keyof로 제한할 경우 사용처에서 union으로 제공.
type Pick1<T, K extends keyof T> = {
  [k in K]: T[K];
};

// 유니온이란 또는 이니깐, IMessage에 존재하는 key는 모두 가능할듯.
type B = Pick1<IMessage, "author" | "title">;

type C = (k: keyof IMessage) => k;

const c: C = (k: keyof IMessage) => {
  return k;
};
