import {useState} from "react";

export function Search({searchMovies}) {
    const languages = new Map([
        ["ru-RU", "Русский"],
        ["en-EN", "English"],
        ["cs-CZ", "Čeština"]
    ]);
    const [query, setQuery] = useState("Terminator");
    const [language, setLanguage] = useState("en-EN");
    
    return (
        <div className="container row">
            <div className="input-field col s12">
                <input id="search"
                       type="search"
                       className="validate"
                       value={query}
                       onChange={(ev) => setQuery(ev.target.value)}
                />
            </div>
            <div className="row">
                {
                    [...languages].map(([key, lang], index) => (
                        <label className="col s4 center" key={index}>
                            <input className="with-gap"
                                   name="language"
                                   type="radio"
                                   checked={language === key}
                                   onChange={() => setLanguage(key)}
                            />
                            <span className="lang">{lang}</span>
                        </label>
                    ))
                }
            </div>
            <button className="btn"
                    onClick={() => searchMovies(query, language)}
            >Search!
            </button>
        </div>
    );
}
