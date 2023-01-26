import { configureStore } from "@reduxjs/toolkit"
import balanceReducer from './balance'

export default configureStore({

    /* imports the balanceReducer to be accessed by the store */
    reducer: {
        balance: balanceReducer,
    }
})