import axios, { AxiosError } from "axios";

// axios는 get, post의 따라서 다른 파라미터와 리턴값을 가진다.
// axios

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
    if (CustomError.isCustomError<IResponse<IUser>>(error)) {
      // console.error(
      //   (error as  AxiosError<{ message: string }>.response?.data.message)
      // )
    }
  });
