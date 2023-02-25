import { useLoaderData, Link} from "react-router-dom"

function CatShow({params}){
    const data = useLoaderData()
    console.log(data)

    return (
    <div>
    <h1>{data[0].category}</h1>
    <ul>
        {data.map((element) => {
            return <li key = {element.id}><Link to={`../show/${element.id}`}>{element.name}</Link></li>
        })}
    </ul>
    </div>
    )
}

export default CatShow