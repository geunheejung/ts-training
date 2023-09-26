"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createPizza = () => {
    const plainPizza = {
        size: "R",
        rank: "O",
        name: "meat",
    };
    return plainPizza;
};
const setSource = (pizza, source) => {
    return Object.assign(Object.assign({}, pizza), { source });
};
const setTopping = (pizza, topping) => {
    return Object.assign(Object.assign({}, pizza), { topping });
};
const pizza = setTopping(setSource(createPizza(), { bbq: true, hotSource: true }), { olive: true, pimento: true });
