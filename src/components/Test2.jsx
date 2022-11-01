import React, {useEffect, useLayoutEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActiveId, setArr, setArrElement, setName, setTestData1} from "../store/app_reducer";
import {selectByFilter} from "../store/selectors";

const Test2 = () => {

    const dispatch = useDispatch()

    // const activeId = useSelector(state => state.app.activeId)
    // const elements = useSelector(state => state.app.arr.filter(el => el))
    const elements = useSelector(selectByFilter)

    // console.log(element)
    console.log("test2", elements)

    return (
        <div>

        </div>
    );
};

export default Test2;
