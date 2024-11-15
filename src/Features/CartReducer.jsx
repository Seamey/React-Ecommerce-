export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity , 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price , 0)
}


const CartReducer = (state, action) => {

    switch (action.type) {
      case 'Add':
        const existingItem = state.find(item => item.id === action.product.id);
        if (existingItem) {
          return state.map(item =>
            item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...state, { ...action.product, quantity: 1 }];
        
      case 'Increase':
        return state.map(item =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
        );
  
      case 'Decrease':
        return state
          .map(item =>
            item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter(item => item.quantity > 0); // Filter out items with quantity <= 0
  
      case 'Remove':
        return state.filter(item => item.id !== action.id);
  
      default:
        return state;
    }

     
}

export default CartReducer