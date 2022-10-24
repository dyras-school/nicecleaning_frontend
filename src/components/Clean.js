const Clean = (props) => {

    const {clean} = props;

    return (
        <div>
            <h1>{clean.date}</h1>
            <h2>{clean.time}</h2>
            <p>Avklarad: <input type="checkbox" 
                checked={clean.completed} 
                onChange={() => console.log("To be implemented")} 
                />
                </p>
                <button>Avboka</button>
        </div>
    )
}

export default Clean;