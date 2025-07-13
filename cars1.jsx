const Car = ({ manu, model, year, number }) => {
    return (
        <div className="block">
            <h1>{manu}</h1>
            <h2>{model}</h2>
            <h2>{year}</h2>
            <h3>{number}</h3>
        </div>
    );
};

function App() {
    return (
        <div className="container">
            <Car manu={"Honda"} model={"Civic"} year={2019} number={12345} />
            <Car manu={"Honda"} model={"Accord"} year={2019} number={34567} />
            <Car manu={"Toyota"} model={"Corolla"} year={2020} number={34569} />
            <Car manu={"Toyota"} model={"Camry"} year={2019} number={13345} />
            <Car manu={"Nissan"} model={"350z"} year={2009} number={12365} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
