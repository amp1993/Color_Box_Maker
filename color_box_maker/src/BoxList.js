import React, { useState } from "react";
import Box from "./Box";
import { v4 as uuidv4 } from 'uuid';
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {

    const [boxes, setBoxes] = useState([]);


    const addBox = (newBox) =>{
        const id = uuidv4();
        setBoxes(boxes => [...boxes, {...newBox, id}])
    }

    const removeBox = (id) => {
        const updateBoxes = boxes.filter(box => box.id !== id);
        setBoxes(updateBoxes)
    }
    
    return(
        <div className="boxList">
            <h2>Color Box Maker</h2>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({id, height, width, backgroundColor})=> <Box  key={id} id={id} height={height}  width={width}  backgroundColor={backgroundColor} removeBox={removeBox} />)}
        </div>
    )
}



export default BoxList;