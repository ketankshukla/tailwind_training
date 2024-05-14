import React from 'react';

const App: React.FC = () => {
    return (
        <div>
            <header>
                <h1>My Website</h1>
            </header>
            <main>
                <div className="card">
                    <h2>Card Title</h2>
                    <p>Card description goes here.</p>
                </div>
            </main>
            <footer>
                <p>Footer content</p>
            </footer>
        </div>
    );
}

export default App;
