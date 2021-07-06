export default function Card({title, release_date, popularity, poster, overview}) {
    return (
        <div className="card green lighten-1">
            <div className="card-image">
                <img src={poster} alt=""/>
            </div>
            <div className="card-content ">
                <h3 className="card-title ">{title}</h3>
                <p><b>Popularity:</b> {popularity}</p>
                <p><b>Release:</b> {release_date}</p>
                <p><b>Overview:</b> {overview}</p>
            </div>
        </div>
    );
}
