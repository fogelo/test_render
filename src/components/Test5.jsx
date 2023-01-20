import React from "react";
import {useSelector} from "react-redux";

const Test5 = () => {

    const elements = useSelector(state => state.app.arr)
    console.log("test5")


    return (
        <div>

        </div>
    );
};

export default Test5;
