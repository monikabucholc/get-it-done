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
            startDate: false,
            endDate: false,
            priority: false
        })
    };

    const statusPriorityHandler = () => {
        setStatus({
            labelId: "0",
            startDate: false,
            endDate: false,
            priority: true
        })
    };

    const startDateHandler = () => {
        setStatus({
            labelId: "0",
            startDate: true,
            endDate: false,
            priority: false
        });
    };

    const endDateHandler = () => {
        setStatus({
            labelId: "0",
            startDate: false,
            endDate: true,
            priority: false
        });
    };

    const resetStatusHandler = () => {
        setStatus({
            labelId: "0",
            startDate: false,
            endDate: false,
            priority: false
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
                <button onClick={statusPriorityHandler} className="secondary-category">Priority</button>
                <button onClick={startDateHandler} className="secondary-category">Start date</button>
                <button onClick={endDateHandler} className="secondary-category">End date</button>
                <button onClick={resetStatusHandler} className="label-btn" type="reset">Reset Filters</button>

     
            <div className="main-category"><i className="fa-solid fa-check" />&nbsp; Completed</div>
            <div className="main-category"><i className="fa-solid fa-trash" />&nbsp; Deleted</div>
        </aside>
    )
}

export default Sidemenu;