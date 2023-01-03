import React, { useState, useContext } from 'react';
import { LabelContext } from './LabelContext'
//import { TodoContext } from './TodoContext';
import LabelTag from './LabelTag';
import Dropdown from 'react-bootstrap/Dropdown';
import _uniqueId from 'lodash/uniqueId';
import './Sidemenu.css'


const Sidemenu = ({ status, setStatus }) => {
    const [labels, setLabels] = useContext(LabelContext);
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
        setInputLabel("")
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13)
        inputLabelHandler(inputLabel)
    };

    const statusLabelHandler = (e) => {
        setStatus({
            labelId: e,
            filterStatus: ""
        })
    };

    const statusHandler = (e) => {
        setStatus({
            labelId: "0",
            filterStatus: e.target.value
        });
    };

    return (
        <aside className="sidemenu">
            <div className="main-category"><i className="fa-solid fa-tag" />&nbsp; Labels</div>
            <ul className="labels-list">
                {labels.map((label) => (
                    <LabelTag
                    key={label.id}
                    label={label}
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
            <div className="main-category"><i className="fa-solid fa-filter" />&nbsp; Sort</div>
            
                <Dropdown onSelect={statusLabelHandler}>
                        <Dropdown.Toggle  variant="success" id="dropdown-basic">
                            Label
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item eventKey="0">All</Dropdown.Item>
                            {labels.map((element) => (
                            <Dropdown.Item key={element.id} eventKey={element.id}>
                                {element.name}
                            </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                </Dropdown>
                <div className="secondary-category">Date</div>
                <button onClick={statusHandler} value="priority" className="secondary-category">Priority</button>
                <button onClick={statusHandler} value="start-date" className="secondary-category">Start date</button>
                <button onClick={statusHandler} value="end-date" className="secondary-category">End date</button>
                <button onClick={statusHandler} value="" className="label-btn" type="reset">Reset Filters</button>
                <button onClick={statusHandler} value="completed" className="label-btn" type="reset"> Completed</button>
  
            <div className="main-category"><i className="fa-solid fa-check" />&nbsp; Completed</div>

        </aside>
    )
}

export default Sidemenu;