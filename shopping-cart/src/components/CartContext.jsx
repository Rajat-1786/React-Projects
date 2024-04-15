import { createContext } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { useReducer } from "react";

export const CartContext = createContext({
    items:[],
    addItemsToCart: () => {},
    handleUpdateItemToCart: () => {}
})

function shoppingCartReducer(state,action){
    if(action.type === 'AddItem'){
      const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.id);
        updatedItems.push({
          id: action.id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      };

      return {
        items: updatedItems,
      };
    }
    if(action.type ==='UpdateItem'){
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    }
  return state;
}
export default function CartContextProvider({children}){
  const [shoppingCart,shoppingCartDispatcher] = useReducer(shoppingCartReducer,{
    items: []
  });
    
      function handleAddItemToCart(id) {
        shoppingCartDispatcher({
          type: 'AddItem',
          id:id
        });
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatcher({
          type: 'UpdateItem',
          payload:{
            productId,
            amount
          }
        });
      }
    
      const Ctxvalue = {
        items:shoppingCart.items,
        addItemsToCart: handleAddItemToCart,
        handleUpdateItemToCart: handleUpdateCartItemQuantity
      }

      return <CartContext.Provider value={Ctxvalue}>
        {children}
      </CartContext.Provider>
}