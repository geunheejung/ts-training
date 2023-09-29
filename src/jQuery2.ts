interface Custom<TElement> {
  text(
    params?:
      | string
      | Node
      | ((this: TElement, index: number, className: string) => string)
  ): this;
}

namespace Q {
  type String = string;
  type StringOrArr<T> = T | T[];
}

interface $ {
  <T>(param: string | string[]): Custom<HTMLElement>;
}

function $(params: string): Custom<HTMLElement>;
function $(params: string[]): Custom<{}>;
function $(params: any) {
  return $(params);
}

const tag = $("q");

tag.text(function (this) {
  return "";
});
