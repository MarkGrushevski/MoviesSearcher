import {useState} from "react";

export const Search = ({searchMovies}) => {
    const languages = new Map([
        ["ru-RU", "Русский"],
        ["en-EN", "English"],
        ["cs-CZ", "Čeština"]
    ]);
    const [query, setQuery] = useState("The Godfather");
    const [language, setLanguage] = useState("en-EN");
    
    return (
        <div className="search">
            <input
                className="search__input"
                type="search"
                value={query}
                onChange={(ev) => setQuery(ev.target.value)}
            />
            {[...languages].map(([key, lang]) => (
                <label className="search__language" key={key}>
                    <input
                        name="language"
                        type="radio"
                        checked={language === key}
                        onChange={() => setLanguage(key)}
                    /><span>{lang}</span>
                </label>
            ))}
            <button
                className="search__btn"
                onClick={() => searchMovies(query, language)}
            >Search!
            </button>
        </div>
    );
};
