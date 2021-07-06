import {Component} from "react";

export default class Search extends Component {
    state = {
        search: "",
        language: ""
    };

    handleFilter = (lang) => {
        this.setState(
            () => ({language: lang}),
            () => {
                this.props.searchMovies(
                    this.state.search,
                    this.state.language
                );
            }
        );
    };

    handleLoad = () => {
        this.props.searchMovies(
            this.state.search,
            this.state.language
        );
    };

    render() {
        return (
            <div className="container row">
                <div className="input-field col s12">
                    <input id="search"
                           type="search"
                           className="validate"
                           value={this.state.search}
                           onChange={(ev) => (this.setState({search: ev.target.value}))}
                    />
                </div>
                <div className="row">
                    <label className="col s4 center">
                        <input className="with-gap"
                               name="lang"
                               type="radio"
                               onChange={() => (this.handleFilter("en-US"))}
                               checked={this.state.language === "en-US"}
                        />
                        <span>English</span>
                    </label>
                    <label className="col s4 center">
                        <input className="with-gap"
                               name="lang"
                               type="radio"
                               onChange={() => (this.handleFilter("ru-RU"))}
                               checked={this.state.language === "ru-RU"}
                        />
                        <span>Русский</span>
                    </label>
                    <label className="col s4 center">
                        <input className="with-gap"
                               name="lang"
                               type="radio"
                               onChange={() => (this.handleFilter("cs-CZ"))}
                               checked={this.state.language === "cs-CZ"}
                        />
                        <span>Čeština</span>
                    </label>
                </div>
                <button className="btn"
                        onClick={this.handleLoad}
                >Search!
                </button>
            </div>
        );
    }

}
