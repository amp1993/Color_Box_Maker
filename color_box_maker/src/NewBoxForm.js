import React, {useState} from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        height : '',
        width: '',
        backgroundColor: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange= (e) =>{
        const {name, value} = e.target;
        setFormData(formData => ({...formData, 
            [name]: value,
           
        }));
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height-range">Height:{formData.height}</label>
            <input 
            id="height-range" type="range" min="100" max="300" name="height"  value={formData.height} onChange={handleChange}></input>
            <label htmlFor="width-range">Width:{formData.width}</label>
            <input 
            id="width-range" type="range" min="100" max="300" name="width" value={formData.width} onChange={handleChange}></input>
            <label htmlFor="backgroundColor-input">Color: </label>
            <input 
            id="backgroundColor-input" type="text" name="backgroundColor" placeholder="Background Color" value={formData.backgroundColor} onChange={handleChange}></input>
            <button>Create</button>
        </form>
    )
        
}

export default NewBoxForm;