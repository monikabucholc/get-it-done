import React, { useState, useContext } from 'react';
import { LabelContext } from './LabelContext';
import { TodoContext } from './TodoContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Alertedit.css'

const Alertedit = ({ todo, label }) => {
    const [show, setShow] = useState(false);
    const [labels, setLabels] = useContext(LabelContext);
    const [todos, setTodos] = useContext(TodoContext);
    const [inputElement, setInputElement] = useState(`${ todo ? todo.task : label.name }`);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const inputElementHandler = (event) => {
        setInputElement(event.target.value);
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }

    const editHandler = (event) => {
        if (todo) {
            editTodoHandler(event);
        } else {
            editLabelHandler(event);
        }
    }
    const editTodoHandler = (event) => {
        event.preventDefault();
        setTodos(todos.map((element) => {
            if (element.id === todo.id) {
                return {
                    ...element,
                    task: inputElement
                }
            }
            return element;
        }));
        setShow(false);
    }

    const editLabelHandler = (event) => {
        event.preventDefault();
        setLabels(labels.map((element) => {
            if (element.id === label.id) {
                setTodos(todos.map((e) => {
                    if (e.labelId === label.id) {
                        return {
                            ...e,
                            label: inputElement
                            }
                        }
                        return e;
                    }))
                    return {
                        ...element,
                        name: inputElement
                    }
            }
            return element;
        }));
        setShow(false);
    }


    return (
        <>
        <Button variant="light" onClick={handleShow}>
            <i className="fa-solid fa-pen" />
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form method="PUT" className="edit-input">
                    <input 
                        onKeyDown={handleKeyDown}
                        value={inputElement}
                        onChange={inputElementHandler} 
                        type="text" 
                        className="edit-input-field" 
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
                Close
            </Button>
            <Button variant="light" onClick={editHandler}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Alertedit;