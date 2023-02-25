import { useLoaderData, Form } from "react-router-dom"

function Edit(props){
    const data = useLoaderData()
    //console.log(data)
    return(
    <div>
        <Form action = {`/edit/${data.id}`} method='post'>
            <input type = 'text' name = 'name' defaultValue={`${data.name}`} />
            <input type = 'text' name = 'category' defaultValue={`${data.category}`}/>
            <input type = 'text' name = 'dur' defaultValue={`${data.dur}`}/>
            <input type = 'text' name = 'distance' defaultValue={`${data.distance}`}/>
            <input type = 'submit'/>
        </Form>
        <h1>EDIT COMPONENT</h1>
    </div>
    )
}

export default Edit