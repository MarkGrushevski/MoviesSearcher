export const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container black-text">
                    © {new Date().getUTCFullYear()} Copyright Text
                    <a className="text-lighten-4 right black-text" href="/"><b>More Links</b></a>
                </div>
            </div>
        </footer>
    );
};
