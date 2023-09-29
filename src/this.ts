interface HTMLElement {
  tagName: string;
}

interface Handler {
  (this: HTMLElement, event: Event, callback: () => void): void;
}

interface NoThis {
  (this: void, event: Event, cabllack: () => void): void;
}

let cb: any;

const onClick: NoThis = function (event, cb) {
  // 실제 함수 매개변수에는 this가 나타나지 않음
  console.log(this.tagName);
  cb();
};

const foo = <T extends []>(x: T): void => {};

foo("aa");
