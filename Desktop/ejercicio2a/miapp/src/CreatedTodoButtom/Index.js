import React from "react";
import './CreateTodoButtom.css';

function CreateTodoButtom(props){
    const onClickButton = (msg) => {
        props.setOpenModal(prevState => !prevState);
    }
    return(
        <button 
        className="CreateTodoButtom"
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButtom};