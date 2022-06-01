import {arrayToMap} from "../../helpers/helpers.js";

const products = [
  {
    id: 'PRODUCT_1',
    name: 'egg',
    price: 100
  },
  {
    id: 'PRODUCT_2',
    name: 'banana',
    price: 200
  }
]

export const db = arrayToMap(products)