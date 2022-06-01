import {db} from "./db";
import {mapToArray} from "../../helpers/helpers";

export const reviewsQueries = {
  allReviews: () => {
    return mapToArray(db)
  },
  getAllReviewsByProduct: (_, {productId}) => {
    return mapToArray(db)
      .filter(review => {
        return review.product === productId
      })
  }
}