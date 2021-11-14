import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";

export const getProducts = (products: {}[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_PRODUCTS,
      payload: products,
    });
  };
};
