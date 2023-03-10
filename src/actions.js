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

export const deleteAction = async({params}) => {
    //console.log('DELETE '+ params.id + '/')
    await fetch(URL + params.id + '/' , {
        method: "delete"
    })
    return redirect('/')
}

export const updateAction = async({params, request}) => {
    const formData = await request.formData()
    const updatedRun = {
        name: formData.get("name"),
        category: formData.get("category"),
        dur: formData.get('dur'),
        distance: formData.get('distance')
    }
    await fetch(URL+params.id, {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedRun)
    })
    return redirect('/')
}