function add(a: string, b?: string, c?: string): string;
function add(a: number, b?: number, c?: number): number;

// implementation signature
function add(a: any, b?: any, c?: any): any {
  if (b) {
    if (c) {
      return a + b + c;
    }

    return a + b;
  }

  return a;
}

const stringResult = add("1", "2", "3");
const numberResult = add(1, 2, 3);
// const stringOrNumber = add(1, 2, '3')

interface MutableRefObject<T> {
  current: T;
}

interface RefObject<T> {
  readonly current: T | null;
}

// 1. 초깃값이 제네릭 T 타입일 경우
function useRef<T>(initialValue: T): MutableRefObject<T>;
// 2. 초깃값이 제네릭 T | null
function useRef<T>(initialValue: T | null): RefObject<T>;
// 3. 초깃값이 제네릭 T | undefined 일 경우
function useRef<T = undefined>(): MutableRefObject<T | undefined>;
function useRef<T>(initialValue?: any): any {}

interface Coupon {
  isSent: boolean;
}

function filterSentCoupon(coupons: Coupon[] | undefined): Coupon[] | undefined {
  return coupons?.filter((coupon) => coupon.isSent);
}

// 타입 내로잉 시 undefined가 추가 되어서 Coupon[] | undefined
const filtered = filterSentCoupon([
  { isSent: true },
  { isSent: true },
  { isSent: true },
]);

function filterSentCoupon2(coupons: Coupon[]): Coupon[];
function filterSentCoupon2(coupons: Coupon[] | undefined): Coupon[] | undefined;
function filterSentCoupon2(
  coupons: Coupon[] | undefined
): Coupon[] | undefined {
  return coupons?.filter((coupon) => coupon.isSent);
}

// 타입 내로잉 시 Coupon[] 로 명확히 좁혀짐.
const filtered2 = filterSentCoupon2([
  { isSent: true },
  { isSent: true },
  { isSent: true },
]);
