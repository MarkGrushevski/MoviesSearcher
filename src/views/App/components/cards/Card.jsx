import {getPosterPath} from "../../shared/getPosterPath";

export const Card = ({title, release_date, popularity, poster_path, overview}) => {
    let imagePath = getPosterPath(poster_path);
    return (
        <article className="card">
            <img
                src={imagePath}
                alt=""
            />
            <div className="card__content">
                <h3 className="card__title">{title}</h3>
                <p className="card__popularity"><b>Popularity:</b> {popularity}
                </p>
                <p className="card__release"><b>Release:</b> {release_date}</p>
                <p className="card__overview"><b>Overview:</b> {overview}</p>
            </div>
        </article>
    );
};
