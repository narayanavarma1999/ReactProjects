import { useRouteError } from "react-router-dom"

function Error() {
    
    const err = useRouteError()

    console.log(`Error:${JSON.stringify(err)}`)

    return (<div>
        <h1>Oops!</h1>
        <h1>Something went wrong</h1>
        <h1>{err.status}</h1>
        <h1>{err.statusText}</h1>
        <h1>{err.data}</h1>
    </div>)
}

export default Error