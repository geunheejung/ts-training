import $ from "jquery";

interface JQuery<TElement = HTMLElement> {}
type TypeOrArray<T> = T | T[];

interface $ {
  <TElement extends HTMLElement = HTMLElement>(
    html: JQuery.htmlString,
    ownerDocument_attributes?: Document | JQuery.PlainObject
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
  ): JQuery<TElement>;
}

interface JQuery<TElement = HTMLElement> {
  removeClass(
    className_function?:
      | JQuery.TypeOrArray<string>
      | ((this: TElement, index: number, className: string) => string)
  ): this;
}

const q = $("q");
for (const item of q) {
  item;
}

$("p").removeClass(function (this, index, className) {
  return "a";
});
$("p").removeClass("myClass noClass").addClass("yourClass");

$(["p", "t"]).text("hello");

const tag = $("ul li").addClass(function (index) {
  return "item-" + index;
});

$(tag).html(function (i: number) {
  console.log(this);
  const res = ($(this).data("name") + "입니다") as JQuery.htmlString;
  return res;
});

// 달러는 태그 이름 리터럴, 태그 이름 리터럴 배열, Jquery로 감싸진 HTML ELement를 받을 수 있음.
