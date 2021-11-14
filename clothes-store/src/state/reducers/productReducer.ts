import { ActionType } from "../action-types";
import { Action } from "../actions";
import { IProductState } from "../interfaces/product";

const initState: IProductState = {
  products: [],
};

const productsReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
