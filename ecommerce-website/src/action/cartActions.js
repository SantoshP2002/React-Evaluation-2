export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';

export const addToCart = (product)=>({
    type: ADD_TO_CART,
    paylode: product
});

export const removeFromCart = (productId)=>({
    type: REMOVE_FROM_CART,
    paylode: productId
});

export const updateCartQuantity = (productId,quentity)=>({
    type: UPDATE_CART_QUANTITY,
    paylode:{ productId,quentity}
});
