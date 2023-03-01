import React from "react";
import Movie from "./Movie";

export default function Movielist({
    movies,
    onMovieDelete,
    onMovieSelect
}) {

    return <ul>{movies.map((movie) => (
        <li key={movie.id} ><Movie {...movie} onMovieSelect={onMovieSelect} onMovieDelete={onMovieDelete}></Movie></li>
    ))

    }</ul>



}