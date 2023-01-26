import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    /* name of the slice of state */
    name: "balance",

    /* set initial value of state */
    initialState: {
        value: 0.00,
    },

    reducers: {

        /* action payload passed to add to the state value */
        depositByAmount: (state, action) => {
            state.value += action.payload
        },

        /* action payload passed to subract from the state value */
        withdrawByAmount: (state, action) => {
            state.value -= action.payload
        },

        /* increses the current state by 5% */
        addInterest: (state) => {
            state.value = Number((state.value * 1.05).toFixed(2))
        },

        /* decreases the current state by 15% */
        takeCharges: (state) => {
            state.value = Number((state.value * 0.85).toFixed(2))
        }
    }
})

export const {depositByAmount, withdrawByAmount, addInterest, takeCharges} = balanceSlice.actions

/* exporting the reducer function to be used in App.js */
export default balanceSlice.reducer