import { useState } from "react";

export default function Search(props) {

    const [searchText, setSearchText] = useState("");

    const changeText = (e) => {
        setSearchText(e.target.value);
    }

    const doSearch = () => {
        props.addFilter("s", searchText);
    }
    return (
        <div className="row">
            <div className="input-field">
                <input
                    type="search"
                    className="materialize-textarea"
                    placeholder="Search"
                    onChange={changeText}
                    onKeyDown={e => { if (e.code === "Enter") doSearch(); }}
                ></input>
                <button className="btn right" onClick={this.doSearch}>search</button>
            </div>
        </div>
    );
}