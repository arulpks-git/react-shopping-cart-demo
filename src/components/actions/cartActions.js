
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,FETCH_CART_LIST,FETCH_CART_LIST_SUCCESS,FETCH_CART_LIST_FAILURE,ADD_TO_SEARCH_ITEM_TEXT} from './action-types/cart-actions'
import store from "../../store";

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

//add search item text action
export const addSearchItemText= (searchText)=>{
  return{
      type: ADD_TO_SEARCH_ITEM_TEXT,
      searchText
  }
}

//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}


export const fetch_cart = () => {
    return {
      type: FETCH_CART_LIST
    };
  };
  
  export const fetch_cart_success = post => {
    return {
      type: FETCH_CART_LIST_SUCCESS,
      data: post
    };
  };
  
  export const fetch_cart_error = () => {
    return {
      type: FETCH_CART_LIST_FAILURE
    };
  };
  
  export const fetch_cart_list_from_api = username => {
    
    store.dispatch(fetch_cart());
    return function(dispatch, getState) {
      return fetch(`https://api.myjson.com/bins/qzuzi`)
        .then(data => data.json())
        .then(data => {
          if (data.message === "Not Found") {
            throw new Error("No cart list found!!");
          } else dispatch(fetch_cart_success(data));
        })
        .catch(err => dispatch(fetch_cart_error()));
    };
  };