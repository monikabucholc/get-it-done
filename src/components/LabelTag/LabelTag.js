import React, { useState, useContext } from 'react';
import { LabelContext } from '../../context/LabelContext';
import { TodoContext } from '../../context/TodoContext';
import uniqid from 'uniqid';
import Modal from 'react-bootstrap/Modal';
import Alertedit from '../AlertEdit/Alertedit'
import 'bootstrap/dist/css/bootstrap.min.css';

import './LabelTag.css'


const LabelTag = ({ label }) => {
    const [labels, setLabels] = useContext(LabelContext);
    const [todos, setTodos] = useContext(TodoContext);
    const [show, setShow] = useState(false);
    const colors = [
        "rgb(176, 207, 85)",
        "rgb(118, 148, 31)",
        "rgb(15, 97, 47)",
        "rgb(32, 132, 146)",
        "rgb(44, 167, 205)", 
        "rgb(59, 86, 155)",
        "rgb(139, 66, 66)",
        "rgb(207, 85, 85)",
        "rgb(253, 153, 77)",
        "rgb(243, 207, 19)",
        "rgb(178, 183, 190)"
    ];
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    const changeColor = (event) => {
        setLabels(labels.map((element) => {
            if (element.id === label.id) {
                setTodos(todos.map((e) => {
                    if (e.labelId === label.id) {
                        return {
                        ...e,
                        color: event.target.style.background
                        }
                    }
                    return e;
                }))
                return {
                    ...element,
                    color: event.target.style.background
                } 
            }
            return element;
        }))
        handleClose();
    }

    const removeLabelHandler = () => {
        setTodos(todos.map((todo) => {
            if (todo.labelId === label.id) {
                return {
                ...todo,
                label: "",
                color: "rgb(243, 207, 19)",
                labelId: "0",
                } 
            }
            return todo;
        }))
        setLabels(labels.filter((element) => element.id !== label.id)); 
        //Remove last item from Local Storage
        if (labels.length === 1) {
            sessionStorage.setItem("labels", JSON.stringify([]))
        } 
    }


return (
    <div className="label-tag" >
        <div className="label-tab-icon-text">
            <i className="fa-solid fa-tag" />
            <li className="label-text">{label.name}</li>
        </div>
        <button onClick={handleShow} className="colors-btn" style={{color: label.color}}><i className="fa-solid fa-circle" /></button>
        <Alertedit label={label} name="edit"/>
        <button onClick={removeLabelHandler} className="bin-btn" name="bin"><i className="fa-solid fa-trash" /></button>  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Pick color</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {colors.map((color) => (
                        <button onClick={changeColor} key={uniqid()} className="color-btn" style={{background: color}}/> 
                    ))}
                </div>
            </Modal.Body>  
        </Modal>
    </div> 
)
}

export default LabelTag;


