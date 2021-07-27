import {LOGO} from "../../constants/titles";

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-wrapper container ">
                    <a href="/" className="brand-logo left black-text"><b>{LOGO}</b></a>
                </div>
            </nav>
        </header>
    );
};
