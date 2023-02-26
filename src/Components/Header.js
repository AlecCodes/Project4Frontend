import {Link} from 'react-router-dom'

function Header(props){
    return (
    <nav>
        <Link 
        to = ""
        className='linkButton'>Home</Link>
        <h1>Run Tracker</h1>
        <Link 
        to = "create"
        className='linkButton'>Add New Run</Link>
    </nav>
    )
}

export default Header