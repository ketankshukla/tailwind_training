import React from 'react';

const App: React.FC = () => {
    return (
        <div>
            <header className={"bg-blue-500 text-white p-4"}>
                <h1 className={"text-3xl font-bold"}>My Website</h1>
            </header>
            <main className={"p-6 bg-gray-100"}>
                <div className="card bg-white p-4 rounded-lg shadow-md">
                    <h2 className={"text-xl font-semibold"}>Card Title</h2>
                    <p className={"text-gray-700"}>Card description goes here.</p>
                </div>
            </main>
            <footer className={"bg-gray-800 text-white p-4 mt-6"}>
                <p>Footer content</p>
            </footer>
        </div>
    );
}

export default App;
