import Movies from "../components/Movies";
import { Component } from "react";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import FilterPanel from "../components/FilterPanel";

const apikey = process.env.REACT_APP_API_KEY;

class Main extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            movies: [],
            filters: {
                s: "Iron man",
            },
        };
    }

    componentDidMount() {
        this.updateMoviesBySearch("matrix");
    }

    render() {
        return (
            <main className="content">
                <Search addFilter={this.addFilter} />
                <FilterPanel addFilter={this.addFilter} />
                {!this.state.isLoading ? (
                    <Movies data={this.state.movies} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
    }

    updateMoviesBySearch = () => {
        this.setState({ movies: [], isLoading: true });

        let filterStr = this.buildFilter_();

        fetch("https://www.omdbapi.com/?apikey=" + apikey + filterStr)
            .then((data) => data.json())
            .then((data) => {
                this.setState({
                    movies: data.Search ? data.Search : [],
                    isLoading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ movies: [], isLoading: false });
            });
    };

    buildFilter_ = () => {
        let result = "";
        for (let key in this.state.filters) {
            let value = this.state.filters[key];
            if (value === null) continue;
            result += `&${key}=${value}`;
        }
        return result;
    };

    addFilter = (key, value) => {
        //this.state.filters[key] = value;
        this.setState(
            { filters: { ...this.state.filters, [key]: value } },
            () => this.updateMoviesBySearch()
        );
    };
}

export default Main;
