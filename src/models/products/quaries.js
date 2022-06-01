import {db} from "./db";
import {mapToArray} from "../../helpers/helpers";

export const productsQueries = {
  allProducts: () => {
    return mapToArray(db)
  }
}