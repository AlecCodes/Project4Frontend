const URL = 'https://runappbackendapi.onrender.com/run/'

export const indexLoader = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

export const catLoader = async({params}) => {
    const response = await fetch(URL)
    const data = await response.json()
    const catData = data.filter((element) => (element.category === params.cat))
    return catData
}

export const showLoader = async({params}) => {
    const response = await fetch(URL+params.id+'/')
    const data = await response.json()
    return data
}