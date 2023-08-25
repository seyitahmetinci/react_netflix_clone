import React, { useState } from 'react';
import Modal from '../components/MainPage/Modal'; // Import your Modal component

const Movie = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal

    const modalHandler = () => {
        setIsModalOpen(!isModalOpen); // Toggle modal state
    }

    return (
        <React.Fragment>
            <li className={'card'} onClick={modalHandler}>
                <img src={props.movieImage} alt="Movie Image"/>
                <h2>{props.title}</h2>
                <h3>{props.releaseDate}</h3>
                <p>{props.openingText}</p>
            </li>
            {isModalOpen && <Modal onClose={modalHandler} />} {/* Render modal if isModalOpen is true */}
        </React.Fragment>
    );
};

export default Movie;
