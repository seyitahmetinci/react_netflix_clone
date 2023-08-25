import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import MoviesList from "./components/MoviesList";

const dummyData = [
    {"id":1,"movie":"The Shawshank Redemption","rating":9.2,"image":"images/shawshank.jpg","imdb_url":"https://www.imdb.com/title/tt0111161/"},
    {"id":2,"movie":"The Godfather","rating":9.2,"image":"images/godfather.jpg","imdb_url":"https://www.imdb.com/title/tt0068646/"},
    {"id":3,"movie":"The Dark Knight","rating":9,"image":"images/dark_knight.jpg","imdb_url":"https://www.imdb.com/title/tt0468569/"},
    {"id":4,"movie":"Pulp Fiction","rating":8.9,"image":"images/pulp_fiction.jpg","imdb_url":"https://www.imdb.com/title/tt0110912/"},
    {"id":5,"movie":"The Lord of the Rings: The Return of the King","rating":9,"image":"images/lotr_return_king.jpg","imdb_url":"https://www.imdb.com/title/tt0167260/"},
    {"id":6,"movie":"The Good, the Bad and the Ugly","rating":8.8,"image":"images/good_bad_ugly.jpg","imdb_url":"https://www.imdb.com/title/tt0060196/"},
    {"id":7,"movie":"Fight Club","rating":8.8,"image":"images/fight_club.jpg","imdb_url":"https://www.imdb.com/title/tt0137523/"},
    {"id":8,"movie":"The Lord of the Rings: The Fellowship of the Ring","rating":8.8,"image":"images/lotr_fellowship.jpg","imdb_url":"https://www.imdb.com/title/tt0120737/"},
    {"id":9,"movie":"Forrest Gump","rating":8.8,"image":"images/forrest_gump.jpg","imdb_url":"https://www.imdb.com/title/tt0109830/"},
    {"id":10,"movie":"Inception","rating":8.8,"image":"images/inception.jpg","imdb_url":"https://www.imdb.com/title/tt1375666/"}
];

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route path="/chooseaccount" element={<LoginPage />} />
                <Route path="/mainpage" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
