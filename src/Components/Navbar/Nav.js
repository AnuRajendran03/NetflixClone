
import './Nav.css'
function Nav()
{
    return(
    <div className='navbar'>
        <ul>
            <li className='brand'>NETFLIX</li>
            <li> 
                <select name="lang" className="select1">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
                </li>
                <li><button className='sign'>Sign In</button></li>
                
        </ul>


   
    </div>
    )
}
export default Nav;