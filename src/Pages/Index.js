import { useLoaderData } from "react-router-dom"

function Index(props){
    const data = useLoaderData()
    console.log(data)

    //let allCategories = []
    // data.forEach((element) => allCategories.push(element.category))
    // console.log(allCategories)
    // function uniqueCategories(element, index, arr){
    //     return arr.indexOf(element) === index
    // }
    // const unique = data.filter(uniqueCategories)
    // console.log(unique)
    
    return (
    <>
        <h1>Index COMPONENT</h1>
    </>
    )
}

export default Index