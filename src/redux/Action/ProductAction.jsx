import {ActionTypes} from "../Contants/Actiontypes"
export const setProducts = (products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    };
};

export const selectedProducts = (product)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:product
    };
};

export const removeSelectedProducts = ()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    };
};