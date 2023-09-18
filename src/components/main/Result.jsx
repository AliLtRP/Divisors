import { useState } from "react";
import DataForm from "./DataForm";
import DivisorsCalc from "./DivisorsCalc";
import './style.css';


function Result() {
    const[num, setNum] = useState(0);


    return(
        <div className="result-wrap">
            <DataForm setData={setNum}/>
            <DivisorsCalc num={num}/>
        </div>
    )


}

export default Result;