/**
 * 판자 위에 크라운 몰딩 추가하기.
 * 더 넓은 개념인 죽을 상속 받아 오트밀을 표현했다
 * 오트밀 클래스의 기본 점도를 기본 죽 보다 높게 설정하고
 * 맛을 추가 했다
 *
 */
class Porridge {
  viscosity: number;

  constructor(viscosity = 10) {
    this.viscosity = viscosity;
  }

  stir() {
    if (this.viscosity > 15) {
      console.log("This is pretty thick stuff.");
    } else {
      console.log("Spoon goes round and round.");
    }
  }
}

/**
 * 데코레이터 작성하는 법
 * 1. target은 현재 인스턴스 객체의 클래스이다.
 * 2. key는 데코레이터를 적용할 속성 이름이다.(문자열)
 * 3. descriptor는 해당 속성의 설명자 객체이다.
 *
 * 데코레이터의 목적에따라 내부의 동작이 결정된다.
 * 객체의 메서드나 속성을 꾸미려면 새로운 속성 설명자를 반환해야 한다.
 */

function readOnly(target: {}, key: string) {
  Object.defineProperty(target, key, {
    writable: false,
  });
}

class Oatmeal extends Porridge {
  flavor: string;
  @readOnly viscosity = 20; // 점도를 재정의함

  constructor(flavor: string) {
    super();
    this.flavor = flavor;
  }
}

// 기존의 오트밀 한 접시를 다시 만들 수 있다.
const oatmeal = new Oatmeal("Brown Sugar Cinnamon");

const q = Object.isFrozen(oatmeal.viscosity);
