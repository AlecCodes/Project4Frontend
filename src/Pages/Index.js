import { useLoaderData, Link } from "react-router-dom"


function Index(props){
    const data = useLoaderData()
    
    //Make alist of unique categories
    let allCategories = []
    data.forEach((element) => allCategories.push(element.category))

    function uniqueCategories(element, index, arr){
         return arr.indexOf(element) === index
    }
    const unique = allCategories.filter(uniqueCategories)
    
    return (
    <div className="container">
        <h1>My Runs:</h1>
        {unique.map((element, index) => {
            return(
            <ul key = {index}>
                <Link to = {`catshow/${element}`} id = {element}>{element}</Link>
            </ul>
            )
        })}
        <Link to = 'create'>Create</Link>
    </div>
    )
}

export default Index