const URL = 'https://runappbackendapi.onrender.com/run/'

export const indexLoader = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

export const showLoader = async({params}) => {
    const response = await fetch(URL+params.id+'/')
    const data = await response.json()
    console.log(data)
    console.log(params.id)
    return data
}