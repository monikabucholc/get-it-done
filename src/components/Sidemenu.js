import React, { useState } from 'react';
import LabelTag from './LabelTag';
import _uniqueId from 'lodash/uniqueId';
import './Sidemenu.css'


const Sidemenu = ({ labels, setLabels, selectedLabel, setSelectedLabel }) => {

    const [inputLabel, setInputLabel] = useState("");
    const inputHandler = (event) => 
    setInputLabel(event.target.value);

    
    const inputLabelHandler = (event) => {
        event.preventDefault();
        setLabels([...labels, {
            name: inputLabel,
            color: "rgb(178, 183, 190)",
            id: _uniqueId()
        }]);
        setInputLabel("");
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13)
        inputLabelHandler(inputLabel);
    }

    return (
        <aside className="sidemenu">
            <p className="main-category"><i className="fa-solid fa-tag" />&nbsp; Labels</p>
            <ul className="labels-list">
                {labels.map((label) => (
                    <LabelTag
                    key={label.id}
                    labels={labels}
                    setLabels={setLabels}
                    label={label}
                    selectedLabel={selectedLabel}
                    setSelectedLabel={setSelectedLabel}
                    />
                ))}  
            </ul>
            <form method="POST" className="input-label-form">
                <input 
                onKeyDown={handleKeyDown} 
                value={inputLabel}
                onChange={inputHandler} 
                type="text" 
                className="input-label" 
                placeholder="Add Label"
                />
                <button onClick={inputLabelHandler} type="submit" className="label-btn" name="addlabel"><i className="fa-solid fa-plus" /></button>
            </form>   
            <p className="main-category"><i className="fa-solid fa-filter" />&nbsp; Sort</p>
            <p className="secondary-category">Date</p>
            <p className="secondary-category">Priority</p>
            <p className="main-category"><i className="fa-solid fa-check" />&nbsp; Completed</p>
            <p className="main-category"><i className="fa-solid fa-trash" />&nbsp; Bin</p>
        </aside>
    )
}

export default Sidemenu;