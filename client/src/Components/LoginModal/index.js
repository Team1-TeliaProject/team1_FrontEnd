import React from 'react';
import Modal from 'react-modal';

//https://www.npmjs.com/package/react-modal

import Button from '../Button';
import './Login.scss';

const LoginModal = () => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal(){
        setIsOpen(false);
    }

    function login()
    {
        console.log('Lets Login Now');
    }

    function createAccount()
    {
        console.log('Create my account please');
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className='login-modal'
                contentLabel="Login"
            >
                <div className='close-btn-container'>
                    <button className='close-btn' onClick={closeModal}>X</button>
                </div>
                <h2>LOG IN</h2>
                <form action="">
                    <div className='field-container'>
                        <input type="text"/>
                    </div>
                    <div className='field-container'>
                        <input type="text"/>
                    </div>
                    <div className="login-btn-container">
                        <Button text="Login" modifier="login" handleClick={login}></Button>
                    </div>

                    <div className="forgot-password-container">
                        <a href="">Forgot password? reset here</a>
                    </div>

                    <div className='create-account-container'>
                        <p>Dont have an account?</p>
                        <Button text="Create Account" modifier="create-account" handleClick={createAccount}></Button>
                    </div>
                </form>

            </Modal>
        </div>
    );
};

export default LoginModal;
