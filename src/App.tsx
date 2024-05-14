import React from 'react';

const App: React.FC = () => {
    return (
        <div>
            <header className={"bg-blue-500 text-white p-4"}>
                <h1 className={"text-3xl font-bold"}>My Website</h1>
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
