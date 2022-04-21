import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import CreateForm from "./CreateForm";
import UserInfo from "./UserInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BootstrapModal.css';


function BootstrapModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState([]);
    
    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };


    return (
    <div className="text-center">
    <button className='calorie-button' onClick={showModal}>Get your Calorie Info!</button>
    <Modal
        show={isOpen}
        onHide={hideModal}
    >
    <Modal.Header>
        <Modal.Title>Please Enter Your Information Below!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <CreateForm setFormData={setFormData} setIsOpen={setIsOpen} />
    </Modal.Body>
    <Modal.Footer className='text-center'>
    This calculation is based on widely-accepted Mifflin St. Jeor formula, but it is not a prescription for your health and/or nutrition. Consult with your doctor before making a change to your nutrition or diet. 
    </Modal.Footer>
    </Modal>
    <br/>
    <UserInfo user_data={formData}/>
    </div>
  );
}

export default BootstrapModal;