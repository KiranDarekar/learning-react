const header = React.createElement(
    "h1", 
    { id: "heading", className:"dddd" },
    "Hello word from React !!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);