import React, { useState, useContext, useEffect } from 'react';
import { LabelContext } from '../../context/LabelContext'
import LabelTag from '../LabelTag/LabelTag';
import Dropdown from 'react-bootstrap/Dropdown';
import uniqid from 'uniqid';
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
            color: "rgb(243, 207, 19)",
            id: uniqid()
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
        if (sessionStorage.getItem("labels") === null) {
            sessionStorage.setItem("labels", JSON.stringify([]));
        } else {
            setLabels(JSON.parse(sessionStorage.getItem("labels")));
        }
    }, []);
   
    useEffect(() => {
        if (labels.length > 0) {
            sessionStorage.setItem("labels", JSON.stringify(labels));
        }
    }, [labels]);
   
    
    return (
        <aside className="sidemenu" style={ showMenu ? {display: "flex"} : null}>
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
            <div className="main-category"><i className="fa-solid fa-filter" />&nbsp; Sort To Do</div>
                <Dropdown onSelect={statusLabelHandler}>
                        <Dropdown.Toggle  id="dropdown-basic" className="dropdown-label-sidemenu">
                            {status.labelId === "0" ? "Labels" : selectedLabel}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item eventKey="0">All Labels</Dropdown.Item>
                            {labels.map((element) => (
                            <Dropdown.Item onClick={selectedLabelHandler} key={element.id} eventKey={element.id}>
                                {element.name}
                            </Dropdown.Item>
                            ))}
                        
                        </Dropdown.Menu>
                </Dropdown>
                <button onClick={statusHandler} value="priority" style={ status.filterStatus === 'priority' ? {fontWeight: "500"} : null } className="sort-category"><i style={ status.filterStatus === 'priority' ? {color: "rgb(243, 207, 19)"} : null } className="fa-solid fa-star" />&nbsp; Priority</button>
                <button onClick={statusHandler} value="start-date" style={ status.filterStatus === 'start-date' ? {fontWeight: "500"} : null } className="sort-category"><i style={ status.filterStatus === 'start-date' ? {color: "rgb(243, 207, 19)"} : null } className="fa-solid fa-hourglass-start" />&nbsp; Start date</button>
                <button onClick={statusHandler} value="end-date" style={ status.filterStatus === 'end-date' ? {fontWeight: "500"} : null } className="sort-category"><i style={ status.filterStatus === 'end-date' ? {color: "rgb(243, 207, 19)"} : null } className="fa-solid fa-hourglass-end" />&nbsp; End date</button>
                <button onClick={statusHandler} value="" className="sort-category" type="reset"><i className="fa-solid fa-xmark" />&nbsp; Reset</button>
            <div className="main-category"><i className="fa-solid fa-list-check" />&nbsp; Status</div>
                <button onClick={statusHandler} value="" className="sort-category" type="reset"><i className="fa-solid fa-spinner" />&nbsp; To Do</button>
                <button onClick={statusHandler} value="completed" style={ status.filterStatus === 'completed' ? {fontWeight: "500"} : null } className="sort-category" type="reset"><i style={ status.filterStatus === 'completed' ? {color: "rgb(243, 207, 19)"} : null } className="fa-solid fa-check" />&nbsp; Completed</button>
                
  
            

        </aside>
    )
}

export default Sidemenu;