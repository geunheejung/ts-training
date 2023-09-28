// Partial
// 객체를 받는다
// 객체의 프로퍼티들을 옵셔널 하게 바꾼다
// 객체를 순회하면서 옵셔널하게 바꾼다

// Partial<Object>

interface IMessage {
  title: string;
  author: string;
  name: string;
}

type Partial1<T> = {
  [k in keyof T]?: T[k];
};

type A = Partial1<IMessage>;
