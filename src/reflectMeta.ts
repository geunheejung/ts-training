/**
 *
 */
import "reflect-metadata";

const restrictParamValueKey = Symbol("restrictParmValue");

interface RestrictionInfo<T> {
  index: number;
  restrictedValues: T[];
}

function RestrictParamValue<T>(restrictedValues: T[]) {
  return function (target: any, propertyKey: string, index: number) {
    const prevMeta =
      Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

    const info: RestrictionInfo<T> = {
      index,
      restrictedValues,
    };

    Reflect.defineMetadata(
      restrictParamValueKey,
      [...prevMeta, info],
      target,
      propertyKey
    );
  };
}

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // style에는 '신나게' | '열정적으로' 만 입력 가능하다
  sing(@RestrictParamValue(["신나게", "열정적으로"]) style: string) {
    return `${this.name}이 ${style} 노래를 부릅니다.`;
  }
}

{
  class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // style에는 '신나게' | '열정적으로' 만 입력 가능하다
    @methodDecorator
    sing(@paramDecorator style: string) {
      Reflect.defineMetadata("style", style, Idol.prototype);
      return `${this.name}이 ${style} 노래를 부릅니다.`;
    }
  }

  function paramDecorator(target: any, methodName: any, index: number) {
    Reflect.defineMetadata(
      "validate",
      function (value: string) {
        return value === "신나게" || value === "열정적으로";
      },
      target
    );
  }

  function methodDecorator(target: any, key: string, desc: PropertyDescriptor) {
    const validateFn = Reflect.getMetadata("validate", target);
    const org = desc.value;

    desc.value = function (style: string) {
      if (!validateFn(style)) {
        console.log("ERROR");
        return;
      } else {
        org.apply(style, this);
      }
    };
  }

  const i = new Idol("iu", 20);
  i.sing("바보");
}
