import Card from "./card/Card";

export default function Cards({movies = []}) {
    const imageSize = "w185";
    return (
        <div className="cards container">
            {
                movies.length ? (
                    movies.map(movie => (
                        <Card
                            key={movie.id}
                            {...movie}
                            poster={`https://image.tmdb.org/t/p/${imageSize}/${movie.poster_path}`}
                        />
                    ))
                ) : (<h4>Nothing</h4>)
            }
        </div>
    );
}
