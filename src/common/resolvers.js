import {userResolvers} from "../models/users/resolvers.js";
import {mergeResolvers} from "../helpers/helpers";
import {productResolvers} from "../models/products/resolvers";
import {reviewResolvers} from "../models/reviews/resolvers";

export const resolvers = mergeResolvers([
  userResolvers,
  productResolvers,
  reviewResolvers
])