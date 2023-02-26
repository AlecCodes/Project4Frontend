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
        <ul>
        {unique.map((element, index) => {
            return(
                <li><Link to = {`catshow/${element}`} id = {element}>{element}</Link></li>
            )
        })}
        </ul>
    </div>
    )
}

export default Index