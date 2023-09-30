import {
  ClassAttributes,
  EffectCallback,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DetailedReactHTMLElement } from "react";
import { DOMElement } from "react";
import { createElement } from "react";
import { FunctionComponent } from "react";
import { ReactHTML } from "react";
import { HTMLAttributes } from "react";
import { ReactNode } from "react";
import { InputHTMLAttributes } from "react";
import A = require("react");
useState;
namespace R {
  // setState는 state 또는 콜백 함수로 받을 수 있음.
  type SetStateAction<S> = S | ((prevState: S) => S);

  // 디스패치는 setState 액션을 타입으로 가지는 함수
  type Dispatch<A> = (value: A | ((prevState: A) => A)) => void;

  declare function useState<S = undefined>(): [S | undefined, Dispatch<S>];

  interface DetailedReactHTMLElement<
    P extends HTMLAttributes<T>,
    T extends HTMLElement
  > extends DOMElement<P, T> {
    type: keyof ReactHTML;
  }

  // createElement(type, props) => { type, ref }
  declare function createElement(
    type: "input",
    props?:
      | (InputHTMLAttributes<HTMLInputElement> &
          ClassAttributes<HTMLInputElement>)
      | null,
    ...children: ReactNode[]
  ): DetailedReactHTMLElement<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

// useState는 state를 받고, 배열을 반환한다.
// 첫번째 파라미터로 S를 반환하기에 S의 값이 추론되며 없을 경우 undefined가 state의 타입이 된다.
// 리턴값으로 배열을 반환하는데, 첫번째 아이템은 state , 두번째 아이템은 dispatch이다.
// 내 생각에 디스패치는 리액트가 상태를 변경하도록 알리는 요청 함수이다.
// 리액트는 디스패치를 하여 변경에 대한 액션을 받고, 액션을 적용 시킨다.
// 그래서 Dispatch = (value: state | state => state) => void 인것이다.
// 디스패치를 호출하면 state 트리 또는 대기열에 콜백 함수가 등록되고
// 다음 업데이트 시점에 반영되는것이다.
// 아울러 리액트는 UMD 모듈 방식으로 제공해준다.
// commonjs,esmoulde 둘다 제공

const Hello: FunctionComponent = (props) => {
  return <div>Hello</div>;
};

const q = Hello({});

const j = createElement("Hello");

// 첫 번째 인자로 콜백 함수를 받고, 두 번째 인자로 배열을 받는다.
// 콜백 함수는 리턴값으로 콜백 함수를 받는다.

interface Q {
  useEffect(callback: () => void | (() => void), dependencies: any[]): void;
}

useEffect(() => {
  return () => {};
});

const UNDEFINED_VOID_ONLY: unique symbol = Symbol("UNDEFINED_VOID_ONLY");
type H = () => void | { [UNDEFINED_VOID_ONLY]: never };

const f = (callback: H) => {
  return callback();
};

const j2 = f(() => {});

type b = void | undefined;
const q4 = (): b => {
  return undefined;
};

interface ra {
  useEffect(effectFn: () => void | (() => void | { _a: never })): void;
}

const qqrc: ra = {
  useEffect(effectFn) {
    const cleanup = effectFn();

    if (cleanup) {
      const e = cleanup();
    }
  },
};

qqrc.useEffect(() => {
  return () => {};
});

// useCallback -> 함수를 파라미터로 받고, 인자로 deps를 받는다
// deps가 변하지 않으면 이전에 받았던 함수를 그대로 반환한다.(클로져 영역으로 매번 호출되어도 남겨놔야할듯)

// const useCallback = (cb: () => void, deps: any[]) => {
//   let _cb = cb;
//   let _deps = deps;
//   return () => {
//     if (deps !== _deps) {
//       _cb = cb;
//     }

//     return _cb;
//   }
// }

// const q1 = useCallback(() => {}, []);

function useCallback1<T extends Function>(cb: T, deps: any[]) {
  return cb;
}

function useMemo1<T>(value: T, deps: any[]): T {
  return value;
}

useMemo;

A.useRef;

interface MutableRefObject<T> {
  current: T;
}
interface RefObject<T> {
  readonly current: T | null;
}

interface YY {
  // 초깃값 명확히 지정된 경우, current에 초깃값 할당 되고 변경 가능함. -> ref를 상태값으로 사용하려는 경우
  useRef<T>(initialValue: T): MutableRefObject<{
    current: T;
  }>;

  // 초깃값이 정해져있으나, null과 유니온 타입인 경우 -> readonly로 current가 지정됨. -> 엘리먼트에 ref 연결한 경우 ref가 초기화 되는 시점에 current의 초깃값이 명확히 지정되지 않음. -> 타입만 지정 가능함
  useRef<T>(initialValue: T | null): RefObject<{
    readonly current: T | null;
  }>;

  // 비어놓는 경우 -> 상태로 사용함.
  useRef<T = undefined>(): MutableRefObject<
    | {
        current: T;
      }
    | undefined
  >;
}

const yy: YY = {
  useRef<T>(
    value: any
  ):
    | MutableRefObject<{ current: T } | undefined>
    | RefObject<{ readonly current: T | null }> {},
};
type Ref1 = useRef<string>;
