import { useState } from "react"


export function CreateGame({
    onCreateGameSubmit
}) {
    const [values, setValues] = useState({

        title: '',
        category: '',
        maxLevel: "",
        imageUrl: "",
        summary: ""
    })
    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        onCreateGameSubmit(values)
    }
    return (<section id="create-page" className="auth">
        <form id="create" onSubmit={(e) => onSubmit(e, values)}>
            <div className="container">

                <h1>Create Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input onChange={onChangeHandler} value={values.title} type="text" id="title" name="title" placeholder="Enter game title..." />

                <label htmlFor="category">Category:</label>
                <input onChange={onChangeHandler} value={values.category} type="text" id="category" name="category" placeholder="Enter game category..." />

                <label htmlFor="levels">MaxLevel:</label>
                <input onChange={onChangeHandler} value={values.maxLevel} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                <label htmlFor="game-img">Image:</label>
                <input onChange={onChangeHandler} value={values.imageUrl} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary" onChange={onChangeHandler} value={values.summary}></textarea>
                <input className="btn submit" type="submit" defaultValue="Create Game" />
            </div>
        </form>
    </section>)
}