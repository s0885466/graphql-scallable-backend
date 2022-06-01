import {db} from "./db.js";
import {mapToArray} from "../../helpers/helpers.js";

export const userQueries = {
  allUsers: () => {
    return mapToArray(db)
  }
}