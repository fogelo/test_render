import React, {useEffect, useLayoutEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActiveId, setArrElement, setName, setTestData1} from "../store/app_reducer";
import Test3 from "./Test3";

const Test1 = () => {
    // const testData1 = useSelector(state => state.app.testData1)
    const dispatch = useDispatch()
    // const elements = useSelector(state => state.app.arr)


    // useEffect(() => {
    //     setTimeout(() => {
    //         // dispatch(setArrElement({id: 1, name: "react"}))
    //         dispatch(setActiveId({id: 1}))
    //     }, 3000)
    // }, [])

    console.log("test1")

    return (
        <div>
            {/*<button onClick={() => setText("buttonText")}>text</button>*/}
            {/*<Test3/>*/}
        </div>
    );
};

export default Test1;
