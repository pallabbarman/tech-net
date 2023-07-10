import { configureStore } from '@reduxjs/toolkit';
import api from './api/apiSlice';
import cartReducer from './features/cart/cartSlice';
import productsReducer from './features/products/productsSlice';
import userReducer from './features/user/userSlice';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        cart: cartReducer,
        products: productsReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
