class Idol {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @MethodCallLogger("dev")
  dance() {
    return `${this.name}가 춤을 춥니다.`;
  }
}

/**
 *
 * @param target - static method에 데코레이팅을 할 경우 생성자 함수, instance method에 데코레이팅 할 경우 인스턴스의 프로토타입
 * @param propertyKey
 * @param descriptor
 */

function MethodCallLogger(env: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // 인스턴스 메서드의 데코레이터로 사용할 경우, 메서드가 value로 들어온다. 멤버 변수도 할당된 값이 들어왔으니.
    console.dir(descriptor, { showHidden: true });
    const originalMethod = descriptor.value;

    // 메서드를 오버라이딩함.
    descriptor.value = function (...args: any[]) {
      console.log(`[${env}] running function : ${propertyKey}`);

      // 오리지널 메서드를 호출해주면서 this바인딩이 끊기지 않게 함.
      const result = originalMethod.apply(this, ...args);

      console.log("result ->", result);

      return result;
    };
  };
}

const idol = new Idol("geuni");

idol.dance();

const fetch = <T>(url: string, method: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    if (!url || !method) {
      reject(Error("error"));
      return;
    }

    setTimeout(() => {
      const value = {} as T;
      resolve(value);
    }, 2000);
  });
};

function fetchDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = async function (url: string, method: "GET" | "POST") {
    try {
      const original = descriptor.value;
      const res = await orignial(url, method);
    } catch (error) {}
  };
}

class Api {
  url: string;
  status: "request" | "success" | "error" | "" = "";
  data: {} = {};

  constructor(url: string) {
    this.url = url;
  }

  async fetch(url: string, method: "GET" | "POST") {
    try {
      this.status = "request";
      const res = await fetch<typeof this.data>(url, method);
      this.data = res;
      this.status = "success";
    } catch (error) {
      this.status = "error";
    }
  }
}

const api = new Api("http://q.com");
