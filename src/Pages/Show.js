import {useLoaderData, Form, Link} from 'react-router-dom'

function Show({params}){
    const data = useLoaderData()
    return (
    <div>
        <Form action = {`../delete/${data.id}`} method='post'>
            <input type = 'submit' value='delete'/>    
        </Form>
        <Link to = {`../edit/${data.id}/`}>Edit</Link>
        <h1>Show {data.name} COMPONENT</h1>
        <p>{data.dur} minutes</p>
        <p>{(data.distance)?data.distance:'unknown'} km</p>
        <p>{(data.dur)?data.dur:'unknown'} minutes</p>
        <p>{data.category}</p>
    </div>
    )
}

export default Show