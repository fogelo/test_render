import {createSlice} from "@reduxjs/toolkit";

const initState = {
    testData1: "111",
    testData2: "111",
    userInfo: {
        name: "ivan",
        age: 31
    },
    arr: [{id: 1, name: "js"}, {id: 2, name: "html"}, {id: 3, name: "css"}],
    activeId: null
}

const slice = createSlice({
    name: "app",
    initialState: initState,
    reducers: {
        setTestData1: (state, action) => {
            state.testData1 = action.payload.testData1
        },
        setTestData2: (state, action) => {
            state.testData2 = action.payload.testData2
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload.userInfo
        },
        setName: (state, action) => {
            state.userInfo.name = action.payload.name
        },
        setArr: (state, action) => {
            state.arr = action.payload.arr
        },
        setArrElement: (state, action) => {
            const obj = state.arr.find(item => item.id === action.payload.id)
            obj.name = action.payload.name
        },
        setActiveId: (state, action) => {
            state.activeId = action.payload.id
        },
    }
})

//reducer
export const appReducer = slice.reducer

//actions
export const {setTestData1, setTestData2, setUserInfo, setName, setArrElement, setArr, setActiveId} = slice.actions

