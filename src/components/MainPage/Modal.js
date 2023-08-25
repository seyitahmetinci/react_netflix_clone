import React, {useCallback, useEffect, useState} from 'react';
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'primeicons/primeicons.css';
import Slideshow from "./Image-Show/Slideshow";
import {hideLoading, showLoading} from "./actions/actions";
import {useDispatch, useSelector} from "react-redux";
import Loading from "./loading";

const Modal = (props) => {
    const [visible, setVisible] = useState(false);
    const [play, setPlay] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const spinnerState = useSelector((state) => state.loading);
    const [moviePoster, setMoviePoster] = useState([]);

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };


    const fetchMoviesHandler = useCallback(async () => {
        // setIsLoading(true);
        setError(null);
        dispatch(showLoading);
        try {
            const response = await fetch('https://reactmoviefetchwebsite-default-rtdb.firebaseio.com/moviePosters.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const loadedMoviePoster = [];

            for (const key in data) {
                loadedMoviePoster.push({
                    id: key,
                    movieImage: data[key].image
                });
            }


            setMoviePoster(loadedMoviePoster);
        } catch (error) {
            setError(error.message);

        }
        dispatch(hideLoading);
        // setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        fetchMoviesHandler();
    }, []);


    return (
        <div className="card flex justify-content-center">

            <section className="d-flex justify-content-between">
                <div>

                    <button onClick={() => setPlay(!play)}>
                        {play ? <i className="pi pi-pause"></i> : <i className="pi pi-play"></i>}
                        <Slideshow play={play} moviePoster={moviePoster}/>
                        {spinnerState && <Loading/>}
                    </button>
                </div>
                <div>
                    <i className="bi bi-arrow-down-circle card-icon"></i>
                </div>
            </section>

        </div>
    );
};

export default Modal;
