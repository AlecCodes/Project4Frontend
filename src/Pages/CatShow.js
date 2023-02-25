import { useLoaderData, Link} from "react-router-dom"

function CatShow({params}){
    const data = useLoaderData()
    const nonZero = data.filter((element)=> element.dur > 0)
    const nonZeroAvg = nonZero.reduce((acc, element) => acc + element.dur,0)/nonZero.length
    console.log(nonZeroAvg, " minutes")

    let timesArr = []
    data.forEach((element) => {
        if(element.dur !== 0){
            timesArr.push(element.dur)
        }
    })
    let record = Math.min(...timesArr)
    

    return (
    <div>
    <h1>{data[0].category}</h1>
    <h3>Average time: {nonZeroAvg} minutes</h3>
    <h3>Record time: {record} minutes</h3>
    <ul>
        {data.map((element) => {
            return <li key = {element.id}><Link to={`../show/${element.id}`}>{element.name}</Link></li>
        })}
    </ul>
    </div>
    )
}

export default CatShow