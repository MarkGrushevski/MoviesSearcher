import {Card} from "./Card";

export const Cards = ({movies = []}) => {
    return (
        <div className="cards container">
            {
                movies.length ? (
                    movies.map(movie => (
                        <Card
                            {...movie}
                            key={movie.id}
                        />
                    ))
                ) : (<h4>Nothing</h4>)
            }
        </div>
    );
};
