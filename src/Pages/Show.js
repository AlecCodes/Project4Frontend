import {useLoaderData} from 'react-router-dom'

function Show(params){
    const data = useLoaderData()

    return (
    <div>    
    <h1>Show {data.name} COMPONENT</h1>
    <p>{data.dur} minutes</p>
    <p>{(data.distance)?data.distance:'unknown'} km</p>
    <p>{(data.dur)?data.dur:'unknown'} km</p>
    <p>{data.category}</p>
    </div>
    )
}

export default Show