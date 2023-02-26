import {useLoaderData, Form, Link} from 'react-router-dom'

function Show({params}){
    const data = useLoaderData()
    return (
    <div className='container'>
        <h1>{data.name} Run</h1>
        <p>{data.dur} minutes</p>
        <p>{(data.distance)?data.distance:'unknown'} km</p>
        <p>{(data.dur)?data.dur:'unknown'} minutes</p>
        <p>{data.category}</p>
        <Link
        className='linkButton' 
        to = {`../edit/${data.id}/`}>Edit</Link>
        <Form action = {`../delete/${data.id}`} method='post'>
            <input type = 'submit' value='delete'/>    
        </Form>
    </div>
    )
}

export default Show