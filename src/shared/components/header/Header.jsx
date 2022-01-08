import {LOGO} from "../../constants/titles";

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <a href="/" className="header__logo">{LOGO}</a>
            </nav>
        </header>
    );
};
