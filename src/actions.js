import {redirect} from 'react-router-dom'
const URL = 'https://runappbackendapi.onrender.com/run/'

export const createAction = async({request}) => {
    const formData = await request.formData()
    const newRun = {
        name: formData.get("name"),
        category: formData.get("category"),
        dur: formData.get('dur'),
        distance: formData.get('distance')
    }
    await fetch (URL, {
        method: "post",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newRun)
    })
    return redirect('/')
}