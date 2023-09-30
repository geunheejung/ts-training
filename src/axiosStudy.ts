import axios, { AxiosError } from "axios";

interface R<T = any> {
  data: T;
}

interface E {
  response?: R;
  message: string;
}

interface confi<T = any> {
  url: string;
  method: string;
  headers?: {};
  body?: T;
}

class Axi {
  get() {}
  post() {}
  put() {}
}

interface AxInterface extends Axi {
  <T = any, J = R>(axiosConfig: confi<T>): Promise<R<J>>;
}

interface AxStatic extends AxInterface {
  Axios: typeof Axi;
}

declare const ax: AxStatic;

// const fn: AxInterface = <T, J>(config: confi): Promise<J> => {
//   return new Promise((resolve, reject) => {
//     try {
//       const res = fetch(config.url, {  method: config.method, body: config.body });
//       return res;
//     } catch (error ) {
//       reject(error);
//     }
//   });
// }

// 1. 함수로서 호출하는 경우
ax({ url: "", method: "" });

// 2. 메서드로서 호출하는 경우
ax.get();
ax.post();
ax.put();

// 3. 클래스로서 인스턴스화 하는 경우
const instnace = new axios();

// 4. create 팩토리 메서드를 통해 생성하는 경우
const factory = axios.create();

interface IResponse<T = {}> {
  data: T;
  message: string;
}

interface IUser {
  id: string;
  email: string;
  name: string;
}

class CustomError<T> extends AxiosError<T> {
  constructor(...args: any[]) {
    super(...args);
  }

  static isCustomError<T>(value: any): value is CustomError<T> {
    return value instanceof CustomError<T>;
  }
}

axios
  .get("")
  .then()
  .catch((error: unknown) => {
    if (axios.isAxiosError<IUser>(error)) {
      // console.error(
      //   (error as  AxiosError<{ message: string }>.response?.data.message)
      // )
    }
  });
