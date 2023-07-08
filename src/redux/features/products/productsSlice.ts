import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProductFilters {
    status: boolean;
    priceRange: number;
}

const initialState: IProductFilters = {
    status: false,
    priceRange: 150,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        toggleState: (state) => {
            state.status = !state.status;
        },
        setPriceRange: (state, action: PayloadAction<number>) => {
            state.priceRange = action.payload;
        },
    },
});

export const { toggleState, setPriceRange } = productsSlice.actions;

export default productsSlice.reducer;
