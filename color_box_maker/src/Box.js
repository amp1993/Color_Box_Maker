import React from "react";
import NewBoxForm from "./NewBoxForm";

const Box = (props) => {
    const boxStyle = {
        height : props.height + 'px',
        width : props.width + 'px',
        backgroundColor : props.backgroundColor
        }

    
    return(
        <>
        
        <div key={props.id} style={boxStyle}>
            <p>{props.height}</p>
            <p>{props.width}</p>
            <p>{props.backgroundColor}</p>
            <button className="removeButton" onClick={() => props.removeBox(props.id)}>X</button>
        </div>
        
        </>
      
    )
   
}

export default Box;