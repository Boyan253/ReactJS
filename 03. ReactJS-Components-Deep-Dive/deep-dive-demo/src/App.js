
import { useEffect, useState } from 'react'
import Movielist from './components/MovieList'


function App() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/movies.json`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.movies)
            })

    }, [])
    const onMovieDelete = (id) => {
        setMovies((state) => state.filter(x => x.id !== id))

    }
    const onMovieSelect = (id) => {
        setMovies((state) => state.map(x => ({ ...x, selected: x.id === id })))


    }
    return (
        <div>


            <h1 >Welcome to ReactJS</h1>
            <Movielist movies={movies} onMovieSelect={onMovieSelect} onMovieDelete={onMovieDelete}></Movielist>

        </div >
    )


}

export default App;
