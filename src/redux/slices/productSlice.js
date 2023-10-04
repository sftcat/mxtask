import { createSlice } from "@reduxjs/toolkit";

const initialState = { // бош холат
    products: []
};

// Руйхатнинг продукталарини бошкариш учун Redux slice яратамиз
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // продуктни руйхатга кушамиз
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        // продуктни руйхатдан чикариб ташлаймиз
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.Name !== action.payload);
        },
    }
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
