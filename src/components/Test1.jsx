import React, {useEffect, useLayoutEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActiveId, setArr, setArrElement, setName, setTestData1} from "../store/app_reducer";
import Test3 from "./Test3";

const Test1 = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log("test1-effect")
    },[])

    console.log("test1")

    return (
        <div>
            {/*<button onClick={() => setText("buttonText")}>text</button>*/}
            <Test3/>
        </div>
    );
};

export default Test1;
