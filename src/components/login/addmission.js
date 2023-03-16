import React, { useState } from "react";
import "./addmission.css";

function MyForm(){
    const [name, setname] = useState(" ");

    return(
        <form>
            <label>
                Enter yor Name:
                <input type="text"
                value ={name}
                onChange={(e) => setname(e.target.value)}/>


            </label>

        </form>
        const root = ReactDom.createRoot(document.getElementById('root'));
        root.render(<MyForm/>);
    )
}
