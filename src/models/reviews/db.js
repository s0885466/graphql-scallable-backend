import {arrayToMap} from "../../helpers/helpers.js";

const reviews = [
  {
    id: 'REVIEW_1',
    title: 'Sasha',
    content: 'Some text',
    author: 'USER_1',
    product: 'PRODUCT_1'
  },
]

export const db = arrayToMap(reviews)