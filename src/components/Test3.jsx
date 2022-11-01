import React, {useEffect, useLayoutEffect} from "react";

const Test3 = () => {
    console.log("component2")
    useLayoutEffect(() => {
        // setTimeout(() => {
        console.log("effect-component2")
        // setText(new Date())
        // }, 2000)
    }, [])
    return (
        <div>

        </div>
    );
};

export default Test3;
