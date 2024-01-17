import { useRouteError } from "react-router-dom"

const Error=()=>{

    const err=useRouteError()//this hook gives you more info on the error that has occured
    return (
        <div>
            <h1>Opps!!!</h1>
            <h2>Spmething went wrong</h2>
        </div>
    )
}

export default Error