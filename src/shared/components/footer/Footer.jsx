export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">{new Date().getUTCFullYear()}</p>
                <a className="footer__link" href="/">Home</a>
            </div>
        </footer>
    );
};
