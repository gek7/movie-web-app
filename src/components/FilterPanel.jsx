import React from "react";


class FilterPanel extends React.Component {

    options = {
        "all": "Все",
        "movie": "Фильмы",
        "series": "Сериалы"
    }

    constructor() {
        super();
        this.state = {
            currentState: null
        }
    }

    onChecked = (e)=>
    {
        this.setState({currentState: e.target.id}, ()=>{this.props.addFilter("type", e.target.id === "all" ? null : this.state.currentState);})
    }

    render() {
        let buttons = [];
        for(let key in this.options) {
            buttons.push(  <label key={key}>
                <input name="group" type="radio" id={key} onChange={this.onChecked} checked={this.state.currentState === key}/>
                <span>{this.options[key]}</span>
              </label>)
        }

        return <div className="filterPanel">{buttons}</div>;

    }

}

export default FilterPanel;