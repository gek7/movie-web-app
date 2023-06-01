import { useState } from "react";


export default function FilterPanel(props) {

    const options = {
        "all": "Все",
        "movie": "Фильмы",
        "series": "Сериалы"
    }

    const [currentState, setCurrentState] = useState(null);

    const onChecked = (e) => {
        setCurrentState(e.target.id,
            () => { props.addFilter("type", e.target.id === "all" ? null : currentState); });
    }

    let buttons = [];
    for (let key in options) {
        buttons.push(<label key={key}>
            <input name="group" type="radio" id={key} onChange={onChecked} checked={currentState === key} />
            <span>{options[key]}</span>
        </label>)
    }

    return <div className="filterPanel">{buttons}</div>;

}