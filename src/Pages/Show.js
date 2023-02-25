import {useLoaderData, Form} from 'react-router-dom'

function Show({params}){
    const data = useLoaderData()
    console.log(data.id)
    return (
    <div>
        <Form action = {`../delete/${data.id}`} method='post'>
            <input type = 'submit' value='delete'/>    
        </Form>    
        <h1>Show {data.name} COMPONENT</h1>
        <p>{data.dur} minutes</p>
        <p>{(data.distance)?data.distance:'unknown'} km</p>
        <p>{(data.dur)?data.dur:'unknown'} km</p>
        <p>{data.category}</p>
    </div>
    )
}

export default Show