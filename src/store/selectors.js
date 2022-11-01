import {createSelector} from "@reduxjs/toolkit";

export const selectAllItems = state => state.app.arr

export const selectByFilter = createSelector(
    [selectAllItems],
    (arr) => {
        // return arr.filter(el => el.id === 2 || el.id === 3)
        return arr.filter(el => el)
    })
