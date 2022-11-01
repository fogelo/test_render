import "./App.css";
import Test1 from "./components/Test1";
import {useEffect, useLayoutEffect, useState} from "react";
import Test2 from "./components/Test2";
import {useDispatch, useSelector} from "react-redux";
import {setActiveId} from "./store/app_reducer";

function App() {
    const dispatch = useDispatch()
    // const arr = useSelector(state => state.app.arr.find(item => item.id ===1).name)
    console.log("app")
    // const arr = useSelector(state => state.app.arr)

    useEffect(() => {
        setTimeout(() => {
            // dispatch(setArrElement({id: 1, name: "react"}))
            dispatch(setActiveId({id: 1}))
        }, 3000)
    }, [])

    return (
        <div className="App">
            <Test1/>
            <Test2/>
        </div>
    );
}

export default App;
