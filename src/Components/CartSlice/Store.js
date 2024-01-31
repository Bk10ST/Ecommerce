import {configureStore} from '@reduxjs/toolkit'
import {  orderReducer } from './CartSice'


export const store= configureStore({
    reducer: {
        order: orderReducer
    }
})

