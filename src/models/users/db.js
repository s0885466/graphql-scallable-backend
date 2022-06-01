import {arrayToMap} from "../../helpers/helpers.js";

const users = [
  {
    id: 'USER_1',
    name: 'Sasha',
    purchases: ['PRODUCT_1']
  },
  {
    id: 'USER_2',
    name: 'Igor',
    purchases: ['PRODUCT_1']
  }
]

export const db = arrayToMap(users)