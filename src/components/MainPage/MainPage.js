import { useSelector, useDispatch } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from '../../components/MoviesList';
import Loading from "./loading"; // Import the loading component
import Slideshow from './Image-Show/Slideshow';
import errorPNG from "../images/netflix-error-code.png";

import { loadingActions } from '../store/loading';

import image1 from '../images/trending/img1.webp'
import image2 from '../images/trending/img2.jpeg'
import image3 from '../images/trending/img3.webp'
import image4 from '../images/trending/img4.jpeg'
import image5 from '../images/trending/img5.jpeg'
import image6 from '../images/trending/img6.jpeg'
import image7 from '../images/trending/img7.webp'
import "../MainPage/types"
import {LOADING_HIDE, LOADING_SHOW} from "./types";
import {hideLoading, showLoading} from "./actions/actions";

//todo write its a firebase-used project

// const dummyData = [
//     {"id":1,"movie":"The Shawshank Redemption","rating":9.2,"image":"https://occ-0-2705-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABasmWEsr0vRs1jLV8id3DaY9FWtQgsTt-eDFGwKoRkV5lfykN2Z_Ttd4HA_xaFJDq7HGS9GQbOcXfWDekQwTUvTjsphLXeCyQXFw53HIC6g.webp?r=7fe","imdb_url": image1},
//     {"id":2,"movie":"The Godfather","rating":9.2, "image": "https://occ-0-2705-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaYi7Dcu01gROYTPDq64So8FKqudlFM2B2kkDwUTWgKP_TIZYBYfuJTq9MVTgm8dJqemimAG3eeRh3MPslf7O-zPQC0ZYkNbIf-5mGSonzs.webp?r=f78","imdb_url":image2},
//     {"id":3,"movie":"The Dark Knight","rating":9,"image":"https://occ-0-2705-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQ7bLKIpHv-XU3O5futDo2mdgK1bc733OLb2L6j-LpmIdf8wmMBbqkN7Wz0HKHp4HLEYwQ6T_DK_x9LbFIEz-M-igJMBwTig7X-RP37gYCU.webp?r=c55","imdb_url":image3},
//     {"id":4,"movie":"Pulp Fiction","rating":8.9,"image":"https://occ-0-2705-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbzL1XWRR1yFXT1PVShQ4S48JV-KB2T7K469Y0glHAdde6IOA6HhZ4OU2SR0RLPtbHT1T8HzENRy_gk2Bs2xy1W_g9BUO-gGiznnOPoyy5s.webp?r=67f","imdb_url":image4},
//     {"id":5,"movie":"The Lord of the Rings: The Return of the King","rating":9,"image":"https://occ-0-2705-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABa5MD4elRwiBt-hLOrE7V7WeSHzgxQd0vf73tZsHJrR7sn2tqDVKs6YBisg1BcyX-pHu651-Wac3AfK0gadbaeiN07C8zhfSYMZcZF43YhQ.webp?r=492","imdb_url":"https://www.imdb.com/title/tt0167260/"},
//     {"id":6,"movie":"The Good, the Bad and the Ugly","rating":8.8,"image":"https://occ-0-2705-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcJyrCmc42oTsjv2M_TMb3GM1MUIWMRZkUICAm3FfPUlTTs-NOqpw2976YNeJI6T114TryW-loROsR6Ev2StNgbunGBJXfm37WIfU3wffOI.webp?r=c4f","imdb_url":"https://www.imdb.com/title/tt0060196/"},
//     {"id":7,"movie":"Fight Club","rating":8.8,"image":"https://occ-0-2705-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38","imdb_url":"https://www.imdb.com/title/tt0137523/"},
//     {"id":8,"movie":"The Lord of the Rings: The Fellowship of the Ring","rating":8.8,"image":"https://occ-0-2705-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcP26PAFxFmklTrQECGkdE1t_Tv-zxfDMgjkedr-fEpTqHAkcwAuWb2fis1eTeJT4FLcFAT7wG0lnWAozmboM_qWgrFZBQdDoN8EOm7xtL4.webp?r=61b","imdb_url":"https://www.imdb.com/title/tt0120737/"},
//     {"id":9,"movie":"Forrest Gump","rating":8.8,"image":"https://occ-0-2705-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABc_jEMOAQt_VgVThCOQm6jJvh_PlWt7Phw10AUXONxsN50rHA8i5bGU3p3A6SOdN9EquULRCtYA_hHUQKskTUGqBILzl4ukloeYP2ULvhHw.webp?r=895","imdb_url":"https://www.imdb.com/title/tt0109830/"},
//     {"id":10,"movie":"Inception","rating":8.8,"image":"https://occ-0-2705-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcz0O2kAiQCiDkPzSA9sDyOmfG2wE0ZdC8PjneU-FITt2IZiNgUcZi4BKCbX6IcpNKKEevKBnt3JnvV6KzAs5jH39oSZeWHYDq7RHq5sdgk.webp?r=28c","imdb_url":"https://www.imdb.com/title/tt1375666/"}
// ];



function MainPage() {
    const [movies, setMovies] = useState([]);
    const [play, setPlay] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const spinnerState = useSelector((state) => state.loading);



    const fetchMoviesHandler = useCallback(async () => {
        // setIsLoading(true);
        setError(null);
        dispatch(showLoading);
        try {
            const response = await fetch('https://reactmoviefetchwebsite-default-rtdb.firebaseio.com/movies.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].movie,
                    movieImage: data[key].image,
                    releaseDate: data[key].rating
                });
            }


            setMovies(loadedMovies);
        } catch (error) {
            setError(error.message);

        }
        dispatch(hideLoading);
        // setIsLoading(false);
    }, [dispatch]);


    //         const data = dummyData;
    //         const loadedMovies = [];
    //
    //         for (const key in data) {
    //             loadedMovies.push({
    //                 id: key,
    //                 title: data[key].movie,
    //                 movieImage: data[key].image,
    //                 releaseDate: data[key].rating
    //             });
    //         }
    //
    //         setMovies(loadedMovies);
    //
    //     setIsLoading(false);
    // }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, []);

    let content = <p>Found no movies.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }

    // if (error) {
    //     content = (
    //         <div>
    //             <div>
    //                 <img src={errorPNG} alt="Error" />
    //                 <p>{error}</p>
    //             </div>
    //             <button onClick={fetchMoviesHandler}>Fetch Movies</button>
    //         </div>
    //     );
    // }

    // if (spinnerState) {
    //     content = <img src={loadingGif} alt="Loading" />;
    // }

    return (
        <React.Fragment>
            {spinnerState && <Loading/>}
            <section>{content}</section>
        </React.Fragment>
    );
}

export default MainPage;

//todo https://www.bezkoder.com/react-redux-crud-example/ kaynak