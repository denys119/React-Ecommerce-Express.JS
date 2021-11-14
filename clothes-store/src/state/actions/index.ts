import { ActionType } from "../action-types";

interface GetProductAction {
  type: ActionType.GET_PRODUCTS;
  payload: {}[];
}

interface DeleteProductAction {
  type: ActionType.DELETE_PRODUCT;
  payload: {};
}

export type Action = GetProductAction | DeleteProductAction;
