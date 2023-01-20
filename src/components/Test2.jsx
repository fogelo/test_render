import React, {useEffect, useLayoutEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActiveId, setArr, setArrElement, setName, setTestData1} from "../store/app_reducer";
import {selectByFilter} from "../store/selectors";

const Test2 = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        console.log("test2-effect")
    },[])

    console.log("test2")

    return (
        <div>

        </div>
    );
};

export default Test2;
