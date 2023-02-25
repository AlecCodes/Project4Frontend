import {Form} from 'react-router-dom'

function Create(props){
    return (
    <div>
        <h1>Create COMPONENT</h1>
        <Form action = '/createAction' method='post'>
            <input type = 'text' name='name' placeholder='name'/>
            <input type = 'text' name='category' placeholder='category'/>
            <input type = 'text' name='dur' placeholder='time'/>
            <input type = 'text' name='distance' placeholder='distance in km'/>
            <input type = 'submit'/>
        </Form>
    </div>
    )
}

export default Create