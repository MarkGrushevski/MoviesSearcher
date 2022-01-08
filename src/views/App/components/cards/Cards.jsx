import {Card} from "./Card";

export const Cards = ({movies = []}) => {
    return (
        <div className="cards">
            {movies.length ? (
                movies.map(movie => (
                    <Card
                        key={movie.id}
                        {...movie}
                    />
                ))
            ) : (<h4>Nothing</h4>)}
        </div>
    );
};
