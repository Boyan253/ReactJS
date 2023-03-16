export function CatalogItem({ imageUrl, name, genres }) {
    return (<div className="allGames">
        <div className="allGames-info">
            <img src={imageUrl} />
            <h6>{name}</h6>
            <h2>{genres}</h2>
            <a href="#" className="details-button">Details</a>
        </div>

    </div>)
}