// TElement인 이유는 JQuery가 아닌 HTML엘리먼트가 제공되어야 하니
interface Custom<TElement = HTMLElement> {
  text(
    params?:
      | string
      | Node
      | ((this: TElement, index: number, className: string) => string)
  ): this; // 체이닝을 위해서
}

namespace Q {
  type String = string;
  type StringOrArr<T> = T | T[];
}

interface $ {
  <T>(param: string | string[]): Custom<HTMLElement>;
}

function $(params: Custom<HTMLElement>): Custom<HTMLElement>;
function $(params: string): Custom<HTMLElement>;
function $(params: string[]): Custom<{}>;
function $(params: any) {
  return $(params);
}

const tag = $("q");

tag.text(function (this) {
  return "";
});

const test = $(tag);
