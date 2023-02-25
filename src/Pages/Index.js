import { useLoaderData, Link } from "react-router-dom"


function Index(props){
    const data = useLoaderData()
    console.log(data)
    
    //Make alist of unique categories
    let allCategories = []
    data.forEach((element) => allCategories.push(element.category))
    console.log(allCategories)

    function uniqueCategories(element, index, arr){
         return arr.indexOf(element) === index
     }
    const unique = allCategories.filter(uniqueCategories)
    
    return (
    <>
        <h1>Index COMPONENT</h1>
        {unique.map((element, index) => {
            return(
            <ul key = {index}>
                <Link to = {`catshow/${element}`} id = {element}>{element}</Link>
            </ul>
            )
        })}
        <Link to = 'create'>Create</Link>
    </>
    )
}

export default Index