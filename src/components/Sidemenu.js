import React, { useState, useContext, useEffect } from 'react';
import { LabelContext } from './LabelContext'
import LabelTag from './LabelTag';
import Dropdown from 'react-bootstrap/Dropdown';
import _uniqueId from 'lodash/uniqueId';
import './Sidemenu.css'


const Sidemenu = ({ status, setStatus, showMenu, setShowMenu }) => {
    const [labels, setLabels] = useContext(LabelContext);
    const [inputLabel, setInputLabel] = useState("");
    const [selectedLabel, setSelectedLabel] = useState("");
    const selectedLabelHandler = (event) => {
        event.preventDefault();
        setSelectedLabel(event.target.innerHTML);
    }
    
    const showMenuHandler = () => {
        if (window.innerWidth <= 900) {
        setShowMenu(!showMenu);
        }
    }

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
        showMenuHandler();
        setStatus({
            labelId: e,
            filterStatus: ""
        })
    };


    const statusHandler = (e) => {
        showMenuHandler()
        setStatus({
            labelId: "0",
            filterStatus: e.target.value
        });
    };

    useEffect(() => {
        if (localStorage.getItem("labels") === null) {
            localStorage.setItem("labels", JSON.stringify([]));
        } else {
            setLabels(JSON.parse(localStorage.getItem("labels")));
        }
    }, []);
   
    useEffect(() => {
        if (labels.length > 0) {
            localStorage.setItem("labels", JSON.stringify(labels));
        }
    }, [labels]);
   
    
    return (
        <aside className="sidemenu" style={ showMenu ? {display: "flex"} : {}}>
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
                    placeholder="Add a Label"
                    />
                    <button onClick={inputLabelHandler} type="submit" className="label-btn" name="addlabel"><i className="fa-solid fa-plus" /></button>
                </form>   
            <div className="main-category"><i className="fa-solid fa-filter" />&nbsp; Filter To Do</div>
                <Dropdown onSelect={statusLabelHandler}>
                        <Dropdown.Toggle  id="dropdown-basic" className="dropdown-label-sidemenu">
                            {status.labelId === "0" ? "Labels" : selectedLabel}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item eventKey="0">All</Dropdown.Item>
                            {labels.map((element) => (
                            <Dropdown.Item onClick={selectedLabelHandler} key={element.id} eventKey={element.id}>
                                {element.name}
                            </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                </Dropdown>
            <div className="main-category"><i className="fa-solid fa-sort" />&nbsp; Sort To Do</div>
                <button onClick={statusHandler} value="priority" className="sort-category"><i className="fa-solid fa-star" />&nbsp; Priority</button>
                <button onClick={statusHandler} value="start-date" className="sort-category"><i className="fa-solid fa-hourglass-start" />&nbsp; Start date</button>
                <button onClick={statusHandler} value="end-date" className="sort-category"><i className="fa-solid fa-hourglass-end" />&nbsp; End date</button>
                <button onClick={statusHandler} value="" className="sort-category" type="reset"><i className="fa-solid fa-xmark" />&nbsp; Reset</button>
            <div className="main-category"><i className="fa-solid fa-list-check" />&nbsp; Status</div>
                <button onClick={statusHandler} value="" className="sort-category" type="reset"><i className="fa-solid fa-spinner" />&nbsp; To Do</button>
                <button onClick={statusHandler} value="completed" className="sort-category" type="reset"><i className="fa-solid fa-check" />&nbsp; Completed</button>
                
  
            

        </aside>
    )
}

export default Sidemenu;