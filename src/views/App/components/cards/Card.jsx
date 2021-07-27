import {getPosterPath} from "../../shared/getPosterPath";

export const Card = ({title, release_date, popularity, poster_path, overview}) => {
    let imagePath = getPosterPath(poster_path);
    return (
        <div className="card">
            <div className="card-image">
                <img src={imagePath} alt=""/>
            </div>
            <div className="card-content ">
                <h3 className="card-title ">{title}</h3>
                <p><b>Popularity:</b> {popularity}</p>
                <p><b>Release:</b> {release_date}</p>
                <p><b>Overview:</b> {overview}</p>
            </div>
        </div>
    );
};
