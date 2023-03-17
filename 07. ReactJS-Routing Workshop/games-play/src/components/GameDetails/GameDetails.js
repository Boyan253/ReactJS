import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import * as gamesAction from '../../services/gamesService'
import * as CommentsService from '../../services/commentsService/CommentsService'

export const GameDetails = () => {
    const [comment, setComments] = useState('')
    const [username, setUsername] = useState('')

    const { gameId } = useParams()
    const [game, setGame] = useState({})
    console.log(gameId);

    useEffect(() => {
        gamesAction.getOne(gameId)
            .then(res => {

                setGame(res);
            }
            )
    }, [gameId])

    const onCommentSubmit = async (e) => {
        e.preventDefault()
        const result = await gamesAction.addComments(gameId, { username, comment })

        setGame(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }))
        setComments('')
        setUsername('')
    }
    return (<section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.genres}</p>
            </div>

            <p className="text">
                {game.description}
            </p>

            {/* <!-- Bonus ( for Guests and Users ) --> */}
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {/* <!-- list all comments for current game (If any) --> */}
                    {game.comments && Object.values(game.comments).map(x => (
                        <li key={x._id} className="comment">
                            <p>{x.username}: {x.comment}.</p>
                        </li>
                    ))}



                </ul>
                {/* {!Object.values(game.comments).length && (<p className="no-comment">No comments.</p>)}
                <!-- Display paragraph: If there are no games in the database --> */}

            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>

        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={(e) => onCommentSubmit(e)}>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <textarea name="comment" value={comment} onChange={(e) => setComments(e.target.value)} placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    </section>)
}