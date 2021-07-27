export const getPosterPath = (posterPath) => {
    if (!posterPath) {
        return null;
    }
    
    const imageSize = "w185";
    return `https://image.tmdb.org/t/p/${imageSize}/${posterPath}`;
};
