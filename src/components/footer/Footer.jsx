export default function Footer() {
    return (
        <footer className="page-footer light-green lighten-1">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getUTCFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="/">More Links</a>
                </div>
            </div>
        </footer>
    );
}
