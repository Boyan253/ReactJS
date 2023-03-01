import { useEffect } from "react"
import style from './Movie.module.css'
export default function Movie({
    id,
    title,
    year,
    plot,
    posterUrl,
    author,
    onMovieDelete,
    onMovieSelect,
    selected
}) {

    useEffect(() => {
        return () => (console.log('Mounting: ' + title))

    }, [])
    return (
        <article className={style["movie-article"]}>
            <h1>{title}, {year}</h1>
            {selected && <h4>Selected</h4>}
            <main>
                <img src={posterUrl} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
                <p>Author: {author}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => onMovieSelect(id)}>select</button>
            </footer>
        </article>
    )

}