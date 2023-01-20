import React, {useEffect, useLayoutEffect} from "react";

const Test3 = () => {

    console.log("test3")
    useEffect(()=>{
        console.log("test3-effect")
    },[])
    return (
        <div>

        </div>
    );
};

export default Test3;
