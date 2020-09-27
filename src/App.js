import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [nightMode, setNightMode] = useState(localStorage.getItem('night-mode-enabled') === 'true' || false);

    const toggleNightMode = () => {
        setNightMode(!nightMode);
        localStorage.setItem('night-mode-enabled', (!nightMode).toString());
    };

    return (
        <div className={`app${nightMode ? ' night' : ''}`}>
            <header className="header">
                <label htmlFor="night-mode-check" className="night-mode-toggle">
                    Night mode
                    <input id="night-mode-check" type="checkbox"
                           checked={nightMode}
                           onChange={() => toggleNightMode()}
                           onKeyPress={(e) => {
                               if (e.key === 'Enter') {
                                   toggleNightMode();
                               }
                           }}
                    />
                    <label htmlFor="night-mode-check"/>
                </label>
            </header>
            <main>
                <h1>
                    🚧 Website under construction 🚧
                </h1>
                <p>Check back soon!</p>
                <div className="waves-wrapper">
                    <div>
                        <div className="wave first"/>
                        <div className="wave second"/>
                        <div className="wave third"/>
                    </div>
                </div>
            </main>
            <footer>
                Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </footer>
        </div>
    );
}

export default App;
