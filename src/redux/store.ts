import { configureStore } from '@reduxjs/toolkit';
import api from './api/apiSlice';
import cartReducer from './features/cart/cartSlice';
import productsReducer from './features/products/productsSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
