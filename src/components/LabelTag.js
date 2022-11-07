import React from 'react';
import './LabelTag.css'


const LabelTag = ({ label, labels, setLabels, selectedLabel, setSelectedLabel }) => {
    
    

    const removeLabelHandler = () => {
        setLabels(labels.filter((element) => element.id !== label.id)); 
    }


    const selectLabelHandler = () => {
        setSelectedLabel(label.name);
    }


return (
    
        <div className="label-tag" onClick={selectLabelHandler}>
            <div className="label-tab-icon-text">
                <i className="fa-solid fa-tag" />
                <li className="label-text">{label.name}</li>
            </div>
            <button onClick={removeLabelHandler} className="bin-btn" name="bin"><i className="fa-solid fa-trash" /></button>  
        </div> 
)
}

export default LabelTag;


