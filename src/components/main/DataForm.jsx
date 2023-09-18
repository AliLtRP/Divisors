import { useState } from "react";



function DataForm({ setData }) {
    const [number, setNumber] = useState(0);

    let handleSubmit = (event) => {
        event.preventDefault();
        setData(number);
    }


    return (
        <div className="form-wrap form-group">
            <form onSubmit={handleSubmit} style={{ width: "100%",display: "flex", alignItems: "end", gap: "10px" }}>
                <div>
                    <label for="usr">Number</label>
                    <input class="form-control" id="usr" name="number" placeholder="number" value={number} onChange={e => setNumber(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-dark" style={{height: ""}}>Result</button>
            </form>
        </div>
    )
}

export default DataForm;