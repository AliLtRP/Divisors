import { useEffect, useState } from "react";




function DivisorsCalc({ num }) {
    const [result, setResult] = useState([]);


    let divisors = () => {
        let divi = []
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divi.push(i);
            }
        }

        setResult(divi);
    }


    useEffect(() => {
        divisors();
    }, [num]);

    const formattedResult = result.join(", ");

    return (
        <div className="result">
            {formattedResult}
        </div>
    )
}

export default DivisorsCalc;