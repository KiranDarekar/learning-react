import { useRouteError } from "react-router";

const Error = ()=> {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Ooops !!!</h1>
            <div> { err.status } : { err.statusText } </div>
            <div> { err.error.message} </div>
        </div>
    )
}

export default Error;