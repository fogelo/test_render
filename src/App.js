import "./App.css";
import Test1 from "./components/Test1";
import {useEffect, useLayoutEffect, useState} from "react";
import Test2 from "./components/Test2";
import {useDispatch, useSelector} from "react-redux";
import {setActiveId, setArrElement} from "./store/app_reducer";
import Test4 from "./components/Test4";
import Test5 from "./components/Test5";
import {Routes, Route} from "react-router-dom";

function App() {
    const [state, setState] = useState(0)
    const dispatch = useDispatch()

    console.log("app")
    useEffect(() => {
        console.log("app-effect")
    }, [])

    setTimeout(() => {
        setState(1)
    }, 0)

    return (
        <div className="App">
            <Test1/>
            <Test2/>
            <div>{state}</div>
        </div>
    );
}

export default App;
