class Car extends React.Component {
    constructor (props) {
        super(props)
    }

    render(){
        return(
            <div className="block">
                <h1>{this.props.manu}</h1>
                <h2>{this.props.model}</h2>
                <h2>{this.props.year}</h2>
                <h3>{this.props.number}</h3>
            </div>
        )
    }}

function App(){
    return(
        <div className="container">
            <Car manu={"Honda"} model={"Civic"}  year={2019} number={12345}/>
            <Car manu={"Honda"} model={"Accord"}  year={2019} number={34567}/>
            <Car manu={"Toyota"} model={"Corolla"}  year={2020} number={34569}/>
            <Car manu={"Toyota"} model={"Camry"}  year={2019} number={13345}/>
            <Car manu={"Nissan"} model={"350z"}  year={2009} number={12365}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>, document.getElementById("root"))