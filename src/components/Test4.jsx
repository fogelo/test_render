import React from "react";
import {useSelector} from "react-redux";

const Test4 = () => {
    const elements = useSelector(state => state.app.arr)

    console.log("test4")


    return (
        <div>

        </div>
    );
};

export default Test4;
