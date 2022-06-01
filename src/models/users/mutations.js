import {createUniqId} from "../../helpers/helpers";
import {db} from "./db";

export const userMutations = {
  createUser: (_, {userInput}) => {
    const id = createUniqId();
    const user = {...userInput, id, reviews: [], purchases: []}

    db.set(id, user);

    return db.get(id);
  }
}