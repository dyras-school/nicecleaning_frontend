import { useEffect, useState } from "react";
import Clean from "./Clean";

const Cleans = () => {

    const [cleans, setCleans] = useState([{id: 0, date:"2020.04.10", time:"16:52" }])

    useEffect(() => {

        const fetchCleans = async () => {
            
            let response = await fetch("http://localhost:8080/api/clean");
            let cleans = response.json();

            console.log(blogs)

            setCleans()
        }

    }, [])


    return (
        <div>
            {clean.map(clean => <Clean key={clean.id} clean={clean} /> )}
        </div>
    )

}

export default Cleans;