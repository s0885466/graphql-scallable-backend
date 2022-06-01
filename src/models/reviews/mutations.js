import {createUniqId} from "../../helpers/helpers";
import {db} from "./db";

export const reviewsMutations = {
  createReview: (_,{reviewInput}) => {
    const id = createUniqId();
    const review = {...reviewInput, id}

    db.set(id, review);

    return db.get(id);
  }
}