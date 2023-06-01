import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import FilterPanel from "../components/FilterPanel";
import { useState } from "react";

const apikey = process.env.REACT_APP_API_KEY;

export default function Main() {

    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [filters, setFilters] = useState({ s: "Iron man" });

    //Функция, через которую устанавливаются фильтры
    const addFilter = (key, value) => {
        setFilters({ ...filters, [key]: value }, () => updateMoviesBySearch());
    };

    //Функция по которой строится фильтр для запроса
    const buildFilter_ = () => {
        let result = "";
        for (let key in filters) {
            let value = filters[key];
            if (value === null) continue;
            result += `&${key}=${value}`;
        }
        return result;
    };

    const updateMoviesBySearch = () => {
        setMovies([]);
        setIsLoading(true);
        let filterStr = buildFilter_();

        fetch("https://www.omdbapi.com/?apikey=" + apikey + filterStr)
            .then((data) => data.json())
            .then((data) => {
                setMovies(data.Search ? data.Search : []);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setMovies([]);
                setIsLoading(false);
            });
    };

    return (
        <main className="content">
            <Search addFilter={addFilter} />
            <FilterPanel addFilter={addFilter} />
            {!isLoading ? (
                <Movies data={movies} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
