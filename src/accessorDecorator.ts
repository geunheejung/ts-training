class Rectangle {
  private height: number;
  private width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  @Configurable(false)
  get h() {
    return this.height;
  }

  @Configurable(false)
  get w() {
    return this.width;
  }
}

const rec = new Rectangle(20, 10);

function Configurable(configurable: boolean) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    desc.configurable = configurable;
  };
}
console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));
