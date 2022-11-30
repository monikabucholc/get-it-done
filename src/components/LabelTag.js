import React, {useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';

import './LabelTag.css'


const LabelTag = ({ label, labels, setLabels, selectedLabel, setSelectedLabel }) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const changeColor = (event) => {
        setLabels(labels.map((element) => {
            if (element.id === label.id) {
                return {
                    ...element,
                    color: event.target.style.color
                }
            }
            return element;
        }))
        handleClose();
    }
    const removeLabelHandler = () => {
        setLabels(labels.filter((element) => element.id !== label.id)); 
    }
    const selectLabelHandler = () => {
        setSelectedLabel(label.name);
    }

    

return (
    
        <div className="label-tag" onClick={selectLabelHandler}>
            <div className="label-tab-icon-text">
                <i className="fa-solid fa-tag" style={{color: label.color}} />
                <li className="label-text">{label.name}</li>
            </div>
            <button onClick={handleShow} className="color-btn" style={{color: label.color}}><i className="fa-solid fa-circle" /></button>
            <button onClick={removeLabelHandler} className="bin-btn" name="bin"><i className="fa-solid fa-trash" /></button>  
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pick color</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(139, 66, 66)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(207, 85, 85)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(253, 153, 77)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(243, 207, 19)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(176, 207, 85)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(118, 148, 31)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(77, 133, 83)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(15, 97, 47)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(32, 132, 146)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(44, 167, 205)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(59, 86, 155)"}}/></h2>
                        </button>
                        <button onClick={changeColor} className="color-btn">
                            <h2><i className="fa-solid fa-circle" style={{color: "rgb(178, 183, 190)"}}/></h2>
                        </button>
                        
                    </div>
                </Modal.Body>  
            </Modal>
        </div> 
)
}

export default LabelTag;


