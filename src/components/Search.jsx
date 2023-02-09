import { Component } from "react";

class Search extends Component {
    state = {
        searchText: "",
    };

    changeText = (e) => {
        this.setState({searchText: e.target.value})
    }

    doSearch = () => {
        this.props.addFilter("s", this.state.searchText)
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        type="search"
                        className="materialize-textarea"
                        placeholder="Search"
                        onChange={this.changeText}
                        onKeyDown={e=> {
                            if(e.code === "Enter") {
                                this.doSearch();
                            }
                        }}
                    ></input>
                    <button className="btn right" onClick={this.doSearch}>search</button>
                </div>
            </div>
        );
    }
}

export default Search