import React from 'react';

export default function Footer() {
    return (
        <footer className="px-4 py-2 text-right">
            <p className="text-sm">© {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a></p>
            <p className="text-xs">
                Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </p>
        </footer>
    );
}
