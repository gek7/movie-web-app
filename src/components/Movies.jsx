import Movie from "./Movie";

function Movies(props) {
    if (props.data.length) {
        return (
            <div className="movies">
                {props.data.map((object) => (
                    <Movie key={object.imdbID} {...object} />
                ))}
            </div>
        );
    } else {
        return <h4>Не найдены фильмы</h4>;
    }
}

export default Movies;
