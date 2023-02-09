function Movie(props) {
    let { Title, Year, Type, Poster } = props

    return (
        <div className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={Poster} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}<i className="material-icons right"></i></span>
                <p>{Year}<span className="right">{Type}</span></p>
            </div>
        </div>
    )
}

export default Movie;