interface IResponse<T = any> {
  data: T;
  status: number;
}
interface Axios {
  get<T = unknown>(
    url: string,
    method: string,
    options?: {}
  ): Promise<IResponse<T>>;
}

class CustomError extends Error {
  response?: {
    data: any;
  };
}

// declare 키워드가 붙을 경우, 타입스크립트에게 추상부분이며, 실제 구현은 다른데서 할 것이라 알리는것이다.
// 구현 부분이 없어도 넘어감
declare const axios: Axios;

async () => {
  try {
    const res = await axios.get("http", "get");
  } catch (error: unknown) {
    // try, catch의 error는 추론이 명확하지 않아 unknown이다.
    if (error instanceof CustomError) {
      // 타입 가드로 타입 내로잉 해줘서 사용해줘야 한다. as 키워드 지양
      console.log(error.response);
    }
  }
};
