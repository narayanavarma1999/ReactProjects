const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    React.createElement('h1', null, 'Hello, React via CDN!')
);