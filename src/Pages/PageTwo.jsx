import React from "react";
import {useNavigate } from "react-router-dom";
const PageTwo = () => {
    const navigate = useNavigate();
    return(
        <>
            <h1>Page Two</h1>
            <div>
                <button onClick = {()=>navigate("/pageOne")}>Page One</button>
                <button onClick = {()=>navigate("/pageTwo")}>Page Two</button>
                <button onClick = {()=>navigate("/pageThree")}>Page Three</button>
            </div>
        </>
    )
}

export default PageTwo;