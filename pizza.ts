interface ITopping {
  tomato: boolean;
  pimento: boolean;
  olive: boolean;
}

interface ISource {
  bbq: boolean;
  tomato: boolean;
  hotSource: boolean;
}

interface IPizza {
  size: "L" | "R" | "P";
  rank: "O" | "P";
  name: "meat" | "pepperoni";
  source?: Partial<ISource>;
  topping?: Partial<ITopping>;
}
const createPizza = () => {
  const plainPizza: IPizza = {
    size: "R",
    rank: "O",
    name: "meat",
  };

  return plainPizza;
};

const setSource = (pizza: IPizza, source: Partial<ISource>): IPizza => {
  return {
    ...pizza,
    source,
  };
};

const setTopping = (pizza: IPizza, topping: Partial<ITopping>): IPizza => {
  return {
    ...pizza,
    topping,
  };
};

const pizza = setTopping(
  setSource(createPizza(), { bbq: true, hotSource: true }),
  { olive: true, pimento: true }
);
