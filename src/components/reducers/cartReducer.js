
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,FETCH_CART_LIST,FETCH_CART_LIST_SUCCESS,FETCH_CART_LIST_FAILURE,ADD_TO_SEARCH_ITEM_TEXT } from '../actions/action-types/cart-actions'


const initState = {

    items:[],
    isFetching: false,
    isError: false,
    addedItems:[],
    total: 0,
    searchItemText: ''

}
const cartReducer= (state = initState,action)=>{

    if(action.type === FETCH_CART_LIST){
      return  {
          ...state,
        isFetching: true,
        items: [],
        isError: false
      }
    }

    if(action.type === FETCH_CART_LIST_SUCCESS){
      return  {
          ...state,
        items: action.data,
        isFetching: false,
        isError: false
      }
    }

    if(action.type === FETCH_CART_LIST_FAILURE){
      return  {
          ...state,
        isError: true,
        isFetching: false
      }
    }
   
    if(action.type === ADD_TO_SEARCH_ITEM_TEXT){
        return {
            ...state,
            searchItemText : action.searchText
        }
    }
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer